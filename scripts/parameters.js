/*
 Test function for loading parameters into API request
Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

Goal: Convert object of parameters into string to be called by API

Example: 

Object = {'limit': 100, 'location': 94040, 'distance': 50}
Return result = ?limit=100&location=94040&distance=25

*/

function parameters(objects) {
    console.log(objects);

    arrayObject = Object.entries(objects) // Convert list of object into array of arrays
    let l = arrayObject.length; // Size of arrayObject
    parametersString = "?"; // Intialize value

    for (i in arrayObject) { // Iterate paramets into string to be used in the API
        // TODO: Check if objet is empty (has no value with key)
        //  If no value, then skip to next nobject
        parametersString += arrayObject[i][0] + "=" + arrayObject[i][1];
        if (i < (l - 1)) { // If not at the end of the parameters, add a & the end of the string
            parametersString += "&";
        }
    }
    return console.log(parametersString);
}

const objects = {'limit': 100, 'street': '','location': 94040,'distance': 50};

parameters(objects);