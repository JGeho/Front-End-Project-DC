// GET Request for token to use Petfinder API
function fetchPetFinderToken() {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: "grant_type=client_credentials&client_id=GgdPCSfEYCzLyJd1uLgeQLWjkCTOdVMUSSLD1omb029ymoadOB&client_secret=ii8uznG9qzjal2VUYn2zDiCW0sgaBVZPFwskL6h3",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
        .then(handleErrors) // Error Checking if get a bad connection
        .then(tokenResponse => {
            console.log('200');
            console.log(tokenResponse);
            return tokenResponse.json()
        }).then(tokenFormatted => {
            copyToken(tokenFormatted)
        });
}

function copyToken(token) {
    console.log(token);
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

fetchPetFinderToken;

