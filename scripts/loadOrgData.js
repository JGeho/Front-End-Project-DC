function orgDataZip() { // Capture form parameters for Location Zip
    let zipValue = document.getElementById("zip").value;
    let distanceValue = document.getElementById("distanceZip").value;
    let formObject = {
        'location' : zipValue,
        'distance' : distanceValue
    }
    // console.log(formObject); // DEBUG
    let callType = "animals/";
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
    let callType = "animals/";
    // console.log(formObject); // DEBUG
    callPetAPI(callType, formObject);
}

// Load Information into the DOM through the API Call

