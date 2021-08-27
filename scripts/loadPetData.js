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
  const animalsAPI = data['animals'];
  console.log(animalsAPI);

  // Variable names for tabs
  const tabs = {"Information" : ['Name','Breed','Age','Size','Color','Distance'], 
                    "About" : ['Characteristics','Coat_length','House_trained','Health','Good_with'], 
                    "Story" : ['Story'],
                    "Contact" : ['Organization','Location','Phone','Email']};
  const gridDiv = document.getElementById("petResults");
  
  // Remove previous data 
  // TODO: document.getElementById("petResults").innerHTML = '';
  
  for (let i = 0; i < 3; i++) {
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
    
    let PetImages = animalsAPI[i]['photos'];
    // Check image of pet
    imgDiv.src= checkImage(PetImages)
    imgDiv.alt="Pet Image";
    cardDiv.append(imgDiv);
    // Append card body
    const cardBody = document.createElement("div")
    cardBody.className = "card-body";
    cardDiv.append(cardBody);

    const tabsKeys = Object.keys(tabs);
    console.log(tabsKeys);

    for (let k = 0; k < tabsKeys.length; k++) {
      const key = document.createElement("p");
      key.innerHTML = tabsKeys[k];
      console.log(tabsKeys[k]);
      cardBody.append(key);

      // Determine values within object[k]
      let tabsValues = Object.values(tabs[tabsKeys[k]]);
      for (let v = 0; v < tabsValues.length; v++){
        const ul = document.createElement("ul");
        key.append(ul);
        const value = document.createElement("li");
        value.innerHTML = tabsValues[v];
        ul.append(value);
        }
      }
    }
  }

  function checkImage (Image) {
        // Check that photo exist for animal
        let picLength = Object.keys(Image).length;
        // console.log(picLength);
        if (picLength >= 1) { // If more than one photo exists
            let src = animalsAPI[i]['primary_photo_cropped']['small'];
            console.log(photos['small']);
          } else {
            let src = "../images/imageNA.jpg";
          }
        return src
        // imageDiv.onerror = imageError(imageDiv); //  TODO: If image fails to load, trouble shoot 4040
  }
    /* 
    // Create Bootstrap Accordion 
    
    // Create Accordion tabs and Information
    var acHolder = document.createElement("div");
    acHolder.className = "accordion";
    acHolder.id = "Pet";
    cardBody.append(acHolder);

    // Create Accordion item + header
    var acItem = document.createElement("div");
    acItem.className = "accordion-item";
    var ach2 = document.createElement("h2");
    ach2.className = "accordion-header";
    ach2.id = "headingOne";
    acDiv.append(acItem, ach2);

    // Create button
    var acButton = document.createElement("button");
    acButton.className = "accordion-button";
    acButton.type = "button";
    acButton.setAttribute('data-bs-toggle="collapse" ');
    acButton.setAttribute('aria-expanded="true" ');
    acButton.setAttribute('aria-controls="collapseOne" ');
    acButton.innerHTML = "Information";
    ach2.appendChild(acButton);

    // Create info box
    var acCollapse = document.createElement("div");
    acCollapse.id = "collapseOne";
    acCollapse.className = "accordion-collapse collapse show";
    acCollapse.setAttribute('aria-labelledby="headingOne" ');
    acCollapse.setAttribute('data-bs-parent="#accordionExample" ');
    acDiv.append(acCollapse);

    // Create info children
    acBody = document.createElement("div");
    acBody.className = "accordion-body";
    acBody.innerHTML = "test";
    
    */

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

  /* Old code for making Tabs in jQuery 
      // Create tabs
    const divTabs = document.createElement("div");
    divTabs.id = "tabs";
    divTabs.className = "tabs";
    cardBody.appendChild(divTabs);

    // Create list of tabs 
    const ulDiv = document.createElement("ul");
    divTabs.appendChild(ulDiv);
    for (j in tabKeys) {
      var a = document.createElement("a");
      var liDiv = document.createElement("li");
      a.textContent = tabKeys[j];
      let tabName = "#tabs-" + String([j]);
      a.setAttribute("href", tabName);
      liDiv.appendChild(a);
      ulDiv.appendChild(liDiv); 
    }

    // Input tab values
    for (k in tabKeys) {
      var innerTab = document.createElement("div");
      let tabName = "tabs-" + String(k);
      innerTab.id = tabName;
      innerTab.className = "tabs"
      divTabs.append(innerTab)
      var tabItem = document.createElement("p");
      tabItem.innerHTML = String(k);
      innerTab.append(tabItem);
      }
      */