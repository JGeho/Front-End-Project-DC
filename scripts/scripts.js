/* fetPetFinderToken will call the PetFinder Api and ask for a token, which is only
available for 1 hr.
function arguments:
callType: the petFinderAPI can accept two major categories of query, "animals" and "organization". 
This argument helps the function determine what call it should be making to the API

parameters: These are the parameters passed from the front end web form the user will be filling out. Once 
the user has made there selections, it will be passed as an objet type that will be called as 
part of the apiInfo() function call
*/

const fetch = require("node-fetch"); // load fetch via Package.json - lock file

function callPetAPI(callType, formObject) {
    key = 'GgdPCSfEYCzLyJd1uLgeQLWjkCTOdVMUSSLD1omb029ymoadOB'; // Key for API call
    secret = 'ii8uznG9qzjal2VUYn2zDiCW0sgaBVZPFwskL6h3'; // Secrete Key for API call
    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (resp) {
        return resp.json(); // Return API response as JSON
    }).then(function (data) {
        console.log('token', data); // console.log the API data
        // Second API callback to retreive results the server
        apiInfo(callType, data, formObject); // Second API to get data
    }).catch(function (err) {
        console.log('something went wrong, token call -- ', err); // console.log the errors if any
    });
}

function apiInfo(callType, data, formObject) {
    /* TODO: Loop through multiple pages of results due to API pagination
    limit = 100 to ensure maxinum results request from API per page
    */
    let parameters = convertParaToString(formObject); 
    url = 'https://api.petfinder.com/v2/';
    return fetch(url + callType + parameters, {
        headers: {
            'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(function(resp) {
        // return the api response as JSON
        return resp.json();
    }).then(function(data) {
        return data; // 
        // JSON.name = callAPI(input);
    }).catch(function(err) {
        // Log any errors
        console.log('something went wrong API Call --', err);
    });
}

function convertParaToString (formObject) {
    arrayObject = Object.entries(formObject) // Convert list of object into array of arrays
    let l = arrayObject.length; // Size of arrayObject
    parametersString = "?"; // Intialize value
    /* TODO: Catch empty objects to prevent being 
    included in the parameter string */
    for (i in arrayObject) { // Iterate paramets into string to be used in the API
        parametersString += arrayObject[i][0] + "=" + arrayObject[i][1]; // Add each object to the string
        if (i < (l - 1)) { // If not at the end of the parameters, add a & the end of the string
            parametersString += "&";
        }
    }
    return parametersString;
}

//Test calls
// var formObject = {'limit': 10, 'location' : 94040, 'distance': 100};
// callPetAPI('organizations/', formObject);
