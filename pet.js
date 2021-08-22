var org = document.getElementById("org-form");

org.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('Get', 'https://api.petfinder.com/v2/organizations/');
    ourRequest.append("")
    ourRequest.onload = function(){
        var orgData = JSON.parse(ourRequest.responseText);
        renderHTML(orgData);
        };
        ourRequest.send(data);
    });



    