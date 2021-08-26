function orgDataZip() { // Capture form parameters for Location Zip
    let zipValue = document.getElementById("zip").value;
    let distanceValue = document.getElementById("distanceZip").value;
    let formObject = {
        'location' : zipValue,
        'distance' : distanceValue
    }
    // console.log(formObject); // DEBUG
    let callType = "organizations/";
    callPetAPI(callType, formObject);
}

function orgDataLocation() { // Capture form parameters for City, State 
    let cityValue = document.getElementById("city").value;
    let stateValue = document.getElementById("state").value;
    let distanceValue = document.getElementById("distanceLocation").value;
    let formObject = {
        'location' : cityValue + ', ' + stateValue,
        'distance' : distanceValue
    }
    let callType = "organizations/";
    // console.log(formObject); // DEBUG
    callPetAPI(callType, formObject);
}

// Load Information into the DOM through the API Call
function loadOrgData(data) {
    let orgAPI = data['organizations'];
    let length = orgAPI.length;
    console.log(orgAPI);
    let cardDiv = document.getElementById('card');
    let tabsDiv = document.getElementById('tabs');
    let displayDiv = document.getElementById('tabs-1');
    let missionDiv = document.getElementById('tabs-2');
    let linkDiv = document.getElementById('tabs-3');
    let photoDiv = document.getElementById('image');
    
    for (let i = 0 ; i < length ; i++) {
        cardDiv.appendChild(tabsDiv);
        tabsDiv.appendChild(displayDiv);
        tabsDiv.appendChild(missionDiv);
        tabsDiv.appendChild(linkDiv);
        cardDiv.appendChild(photoDiv);
        // displayDiv.append(colDiv);

        const imageDiv = document.createElement("img");
        imageDiv.src = orgAPI[i]['photos'].small;
        photoDiv.appendChild(imageDiv);
        
        const nameDiv = document.createElement("div");
        nameDiv.innerHTML = orgAPI[i]['name'];
        console.log(orgAPI[i]['name']);
        displayDiv.appendChild(nameDiv);

        const emailDiv = document.createElement("div");
        emailDiv.innerHTML = orgAPI[i]['email'];
        displayDiv.appendChild(emailDiv);

        const phoneDiv = document.createElement("div");
        phoneDiv.innerHTML = orgAPI[i]['phone'];
        displayDiv.appendChild(phoneDiv);

        const urlDiv = document.createElement("div");
        urlDiv.innerHTML = orgAPI[i]['url'];
        linkDiv.appendChild(urlDiv);

        const msDiv = document.createElement("div");
        msDiv.innerHTML = orgAPI[i]['mission_statement'];
        missionDiv.appendChild(msDiv);

    }
}
    // Put DOM call in here
