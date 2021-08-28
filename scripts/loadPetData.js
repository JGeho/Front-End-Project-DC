function animalDataForm() {
    let petValue = document.getElementById("animalselect").value;
    // console.log(petValue);
    let genderValue = document.querySelector('input[id="gender"]:checked').value;
    let zipValue = document.getElementById("zip").value;
    let sortValue = 'distance';
    let formObject = {
        'type': petValue,
        'gender' : genderValue,
        'location' : zipValue,
        'sort': sortValue
    }
    //Call api
    // console.log(formObject); // DEbug to rest return of object
    // Display search parameters to user
    spanDiv = document.getElementById('formQueryParamters');
    let sQuery = "";
    for (var key in formObject) {
        sQuery += key + " = " + formObject[key] + " ";
      }
    spanDiv.innerHTML = sQuery;
    
    // Call API data
    callPetAPI('animals/', formObject);
  }

// Loading Pet Information from API Call  
function loadPetData(data) {
  console.log('Pull data from API call');
  const animalsAPI = data['animals'];
  lenApi = animalsAPI.length;
  // console.log(animalsAPI);

  // Variable names for tabs
  const tabs = {"Information" : ['name','breeds','age','size','colors','distance'], 
                    "About" : ['personality','coat','house_trained','spayed_neutered','environment', 'description'], 
                    "Contact" : ['location','phone','email']};
  
  const gridDiv = document.getElementById("petResults");
  
  // Remove previous data 
  document.getElementById("petResults").innerHTML = '';
  
  for (let i = 0; i < lenApi; i++) {
    let apiLookup = {'name': animalsAPI[i]['name'],
                    'breeds': animalsAPI[i]['breeds']['primary'],
                    'age': animalsAPI[i]['age'],
                    'size': animalsAPI[i]['size'],
                    'colors': animalsAPI[i]['colors']['primary'],
                    'distance': miles(Math.round(animalsAPI[i]['distance'])),
                    'personality': personalityList(animalsAPI[i]['tags']),
                    'coat': animalsAPI[i]['coat'],
                    'house_trained': animalsAPI[i]['attributes']['house_trained'],
                    'spayed_neutered' : animalsAPI[i]['attributes']['spayed_neutered'],
                    'environment' : goodWith(animalsAPI[i]['environment']),
                    'description' : animalsAPI[i]['description'],
                    'location' : addressValue(animalsAPI[i]['contact']['address']),
                    'phone' : animalsAPI[i]['contact']['phone'],
                    'email' : animalsAPI[i]['contact']['email']
                  };

    // console.log(apiLookup);

    // Create Col
    const colDiv = document.createElement("div");
    colDiv.className = "col";
    gridDiv.appendChild(colDiv);

    // Create Card
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    colDiv.appendChild(cardDiv);

    // Append Image & Card Body to card class
    const imgDiv = document.createElement("img");
    imgDiv.className = "card-img-top";
    imgDiv.className = "imagePet";
    
    let image = animalsAPI[i]['primary_photo_cropped'];
    // Check image of pet
    imgDiv.src= checkImageValid(image);
    imgDiv.alt="Pet Image";
    cardDiv.append(imgDiv);
    // Append card body
    const cardBody = document.createElement("div")
    cardBody.className = "card-body";
    cardDiv.append(cardBody);

    const tabsKeys = Object.keys(tabs);
    // console.log(tabsKeys); DEBUG

    for (let k = 0; k < tabsKeys.length; k++) {
      const key = document.createElement("p");
      key.className = "title";
      key.innerHTML = tabsKeys[k];
      // console.log(tabsKeys[k]); // DEBUG
      cardBody.append(key);

      // Determine values within object[k]
      let tabsValues = Object.values(tabs[tabsKeys[k]]);
      for (let v = 0; v < tabsValues.length; v++){
        const ul = document.createElement("ul");
        key.append(ul);
        const value = document.createElement("li");
        value.className = "results";
        let APIvalue = checkNull(apiLookup[tabsValues[v]]);
        value.innerHTML = tabsValues[v] + ": " + APIvalue;
        ul.append(value);
        }
      }
    }
  }

  // Check if Pet has a valid picture, otherwise show image not available
  function checkImageValid (pet) {
    // console.log(pet);
    if (typeof(pet) === 'object') { // Check if pet image is an object
      src = pet['small'];
      // console.log(src);
    } else {
      src = "../images/imageNA.jpg";
    }
    return src
  } 

  function addressValue (api) { // Concatentate address from object
    // Check if street provided
    let addressString = ""
    let addressKey = Object.keys(api)
    for (j in addressKey) {
      if (api[addressKey[j]] != null && api[addressKey[j]] !== 'US') {
        addressString += api[addressKey[j]];
        addressString += " ";
      }
    }
    return addressString
  }

  function miles(value) { // Add miles to distance
    value += " miles";
    return value
  }

  function checkNull(value) { // Check if API query returns null, return as N/A
    let returnString = value;
    if (value == null) {
      returnString = 'N/A';
    }
    return returnString 
  }

  function personalityList(value) { // Make a list of personalities
    sPersonality = "";
    if (value === null) {
      sPersonality = 'N/A';
    } else {
      for (p in value) {
        sPersonality += value[p];
        len = value.length;
        if (p < (len - 1)) {
          sPersonality += ", ";
        }
      }
    }
    return sPersonality
  }

  function goodWith(value) {
    sReturn = "Good with ";
    valueResults = [value['cats'], value['children'], value['dogs']];
    // console.log(valueResults);
    return sReturn
}

