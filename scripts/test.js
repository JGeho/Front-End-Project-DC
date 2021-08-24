let petValue = 'cat';
let genderValue = 'male';
let zipValue = 94040;

let formObject = {
    'type': petValue,
    'gender' : genderValue,
    'location' : zipValue
};

let sQuery = "";
let len_form = Object.keys(formObject).length;
console.log(len_form);

for (var key in formObject) {
    sQuery += key + " = " + formObject[key] + " ";
    console.log(sQuery);
}
