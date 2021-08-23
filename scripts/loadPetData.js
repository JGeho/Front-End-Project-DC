const { stringify } = require("querystring");

function animalDataForm() {
    let petValue = document.getElementById("animalselect").value;
    console.log(petValue);
    let genderValue = document.querySelector('input[id="gender"]:checked').value;
    let zipValue = document.getElementById("zip").value;
    let formObject = {
        'type': petValue,
        'gender' : genderValue,
        'location' : zipValue
    }
    //Call api
    console.log(formObject); // DEbug to rest return of object
    // Display search parameters to user
    spanDiv = document.getElementById('formQueryParamters');
    spanDiv.innerHTML = JSON.stringify(formObject);
    
    callPetAPI('animals/', formObject);
  }

// Loading Pet Information from API Call  
function loadPetData(data) {
  console.log('Pull data from API call');
  let animalsAPI = data['animals'];
  let length = animalsAPI.length;
  console.log(animalsAPI);
  // Remove previous data 
  // document.getElementById("gridDv").innerHTML = "";
  let gridDv = document.getElementById("gridDiv");
  // Iterate ober API Query, show information
  // TODO: Confirm that image works and doesn't 404 when loaded
  for (let i = 0; i < length; i++) {
    let picArrayLength = animalsAPI[i]['photos'].length;
    if (picArrayLength > 1) {
      picSrc = animalsAPI[i]['photos'][0]['small'];
    } else if (picArrayLength == 0) {
      picSrc = "../images/imageNA.jpg";
    } else {
      picSrc = animalsAPI[i]['photos']['small'];
    }

    // TODO: If image doesn't load properly, then return a "image not available" tag
    const imageDiv = document.createElement("img");
    imageDiv.id = "imagePet";
    imageDiv.src = picSrc;
    // TODO: If image fails to load, trouble shoot 4040
    // imageDiv.onerror = imageError(imageDiv);
    gridDv.appendChild(imageDiv);

    // Load information about pet
    
    let infoArray = ["name", "age", "size", "gender"]
    for (let j = 0; j < infoArray.length; j++) {
      const infoDiv = document.createElement("div");
      infoDiv.innerHTML = String(infoArray[j]) + ": " + animalsAPI[i][infoArray[j]];
      gridDv.appendChild(infoDiv);
    }
  }
}

function imageError(imageDiv) {
  imageDiv.src = "../images/imageNA.jpg";
}
    /*
    const nameDiv = document.createElement("name");
    nameDiv.innerHTML = animalsAPI[i]["name"];
    gridDv.appendChild(nameDiv); */

    // Load Information
  // console.log(animalsAPI[0]['photos']);