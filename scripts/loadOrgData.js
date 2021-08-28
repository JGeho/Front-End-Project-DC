function orgDataZip() { // Capture form parameters for Location Zip
    let zipValue = document.getElementById("zip").value;
    let distanceValue = document.getElementById("slider").value;
    let formObject = {
        'location' : zipValue,
        'distance' : distanceValue
    }
    // console.log(formObject); // DEBUG
    // spanDiv = document.getElementById('formQueryParamters');
    // spanDiv.innerHTML = JSON.stringify(formObject);
    let callType = "organizations/";
    callPetAPI(callType, formObject);
}

function orgDataLocation() { // Capture form parameters for City, State 
    let cityValue = document.getElementById("city").value;
    let stateValue = document.getElementById("state").value;
    let distanceValue = document.getElementById("slider").value;
    let formObject = {
        'location' : cityValue + ', ' + stateValue,
        'distance' : distanceValue
    }
    // console.log(formObject); // DEBUG
    // spanDiv = document.getElementById('formQueryParamters');
    // spanDiv.innerHTML = JSON.stringify(formObject);
    let callType = "organizations/";
    callPetAPI(callType, formObject);
}

// Load Information into the DOM through the API Call
function loadOrgData(data) {
    let orgAPI = data['organizations'];
    let length = orgAPI.length;
    console.log(orgAPI);
    
    for (let i = 0 ; i < length ; i++) {
        let displayDiv = document.getElementById("displayDiv");
        const rowDiv = document.createElement('div');

        // Checking to see if seperate containers are being created
        if (i % 2 === 0) {
            rowDiv.id = "grey";
        }
        // Creating column effect within each row
        displayDiv.append(rowDiv);
        const row2Div = document.createElement('div');
        row2Div.className = "div";
        displayDiv.append(row2Div)
        const row3Div = document.createElement('div');
        row3Div.className = "div";
        displayDiv.append(row3Div);

        let picArrayLength = orgAPI[i]['photos'].length;
            if (picArrayLength > 1) {
                picSrc = orgAPI[i]['photos'][0]['medium'];
            } else if (picArrayLength == 0) {
                picSrc = "./images/cat404.jpeg";
            } else {
                picSrc = orgAPI[i]['photos'][0]['medium'];
            }

            // TODO: If image doesn't load properly, then return a funny 404 image
            const imageDiv = document.createElement("img");
            imageDiv.className = "imagePet";
            imageDiv.src = picSrc;
            rowDiv.appendChild(imageDiv);

       
        
        let nameDiv = document.createElement("h5");
        nameDiv.innerHTML = orgAPI[i]['name'];
        console.log(orgAPI[i]['name']);
        row2Div.appendChild(nameDiv);

        let emailDiv = document.createElement("div");
        emailDiv.innerHTML = orgAPI[i]['email'];
        row2Div.appendChild(emailDiv);

        let phoneDiv = document.createElement("div");
        phoneDiv.innerHTML = orgAPI[i]['phone'];
        row2Div.appendChild(phoneDiv);

        // Created a button to link to URL
        let urlDiv = document.createElement("button");
        urlDiv.textContent = ("Push for More Info");
        urlDiv.addEventListener("click", function(){
            location = orgAPI[i]['url'];
        });
        row2Div.appendChild(urlDiv);

        // 
        let missionStatement = orgAPI[i]['mission_statement'];
        if (missionStatement == null) {
            mission = "No Statement Provided";
        } else {
            mission = orgAPI[i]['mission_statement'];
        }

        let msDiv = document.createElement("div");
        msDiv.innerHTML = mission;
        row3Div.appendChild(msDiv);

    }
}
    // Put DOM call in here
