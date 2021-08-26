function animalDataForm() {
    let petValue = document.getElementById("animalselect").value;
    console.log(petValue);
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
    console.log(formObject); // DEbug to rest return of object
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
  let animalsAPI = data['animals'];
  console.log(animalsAPI);

  // Variable names for tabs
  const tabs = {"Information" : ['Breed', 'Age','Size','Color','Distance'], 
                    "About" : ['Characteristics','Coat_length','House_trained','Health','Good_with'], 
                    "Story" : 'Story',
                    "Contact" : ['Organization','Location','Phone','Email']};
  const tabKeys = Object.keys(tabs);
  console.log(tabKeys);
  const gridDiv = document.getElementById("petResults");
  
  // Remove previous data 
  // TODO: document.getElementById("petResults").innerHTML = '';
  
  // Iterate over the results
  for (let i = 0; i < 1; i ++) {
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
    imgDiv.src="./images/cat404.jpeg"
    imgDiv.alt="Card image cap";
    const cardBody = document.createElement("div")
    cardBody.className = "card-body";
    cardDiv.append(imgDiv, cardBody); // Append both divs to the card div
    
    // Create tabs
    const divTabs = document.createElement("div");
    divTabs.id = "tabs";
    divTabs.className = "tabs";
    cardBody.appendChild(divTabs);

    // Create tab names
    const ulDiv = document.createElement("ul");
    tabList.class = "list-group list-group-flush";
    divTabs.appendChild(ulDiv);
    for (j in tabKeys) {
      var a = document.createElement("a");
      var liDiv = document.createElement("li");
      a.textContent = tabKeys[j];
      let tabName = "tab-" + String([j]);
      a.setAttribute("href", tabName);
      liDiv.appendChild(a);
      ulDiv.appendChild(liDiv); 
    }

    var tabDiv = document.createElement("div");
    let tabName = "tab-" + String([0]);
    tabDiv.id = tabName;
    divTabs.append(tabDiv)

    for (let m = 0; m < 4; m++) {
      var tabItem = document.createElement("li");
      tabItem.class = "list-group-item";
      tabItem.innerHTML = String([m]);
      tabList.append(tabItem);
    }
    tabDiv.appendChild(tabList);
  }
}

    /* Fill tab information
    for (k in tabKeys) {
      var tabDiv = document.createElement("div");
      let tabName = "tab-" + String([j]);
      tabDiv.id = tabName;
      var tabList = document.createElement("ul");
      for (l in (Object.values(tabs[k]))) {
        var tabItem = document.createElement("li");
        tabItem.class = "list-group-item";
        tabItem.innerHTML = tabs[k][l] + ": ";
        tabList.append(tabItem);
      }
      tabDiv.appendChild(tabList);
      */

  
    // const ul = document.createElement("ul");
    // ul.appendChild(divTabs);
    // const li = document.createElement("li");
    // const a = document.createElement("a");
    // a.

  // Iterate over API Query, show information
  // TODO: Confirm that image works and doesn't 404 when loaded
  
  /* Keep old code for now, confirm that template will work 
  for (let i = 0; i < length; i++) { // TODO: Show full pictures (length)
    const rowDiv = document.createElement("row");
    gridDv.appendChild(rowDiv);

    let colDiv = document.createElement("col");
    rowDiv.appendChild(colDiv);
    
    const imageDiv = document.createElement("img");
    imageDiv.id = "imagePet";
    // Check that photo exist for animal
    let photos = animalsAPI[i]['photos'];
    let picLength = Object.keys(photos).length;
    // console.log(picLength);
    if (picLength >= 1) { // If more than one photo exists
        imageDiv.src = animalsAPI[i]['primary_photo_cropped']['small'];
        console.log(photos['small']);
      } else {
        imageDiv.src = "../images/imageNA.jpg";
      }
    // imageDiv.onerror = imageError(imageDiv); //  TODO: If image fails to load, trouble shoot 4040
    colDiv.appendChild(imageDiv);
    // Load information about pet
    const colDiv = document.createElement("col");  
    let infoArray = ["name", "age", "size", "gender", "distance"]
    for (let j = 0; j < infoArray.length; j++) {
      let infoDiv = document.createElement("div");
      infoDiv.innerHTML = String(infoArray[j]) + ": " + animalsAPI[i][infoArray[j]];
      colDiv1.appendChild(infoDiv);
    }
  }
  
}

function imageError(imageDiv) {
  // On error for loading for the image, set image to "not availabe at this time"
  imageDiv.src = "../images/image404Na.png";
}
    
    const nameDiv = document.createElement("name");
    nameDiv.innerHTML = animalsAPI[i]["name"];
    gridDv.appendChild(nameDiv); */

    // Load Information
  // console.log(animalsAPI[0]['photos']);