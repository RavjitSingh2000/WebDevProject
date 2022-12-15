let destination = ["New York", "London", "Los Angeles", "NewArk", "New Delhi", "Tokyo", "Sydney", "Melbourne", "Miami", "San Fransisco", "Beijing", "Colombo", "Dubai", "Doha", "Riyadh", "Mumbai", "Kathmandu"];

let source = ["New York", "London", "Los Angeles", "NewArk", "New Delhi", "Tokyo", "Sydney", "Melbourne", "Miami", "San Fransisco", "Beijing", "Colombo", "Dubai", "Doha", "Riyadh", "Mumbai", "Kathmandu"];

function populateDestinationList(){
    let choices;
    destination.forEach(choiceMade => {
        choices += `<option value = "${choiceMade}">${choiceMade}</option>`
        document.getElementById('destination').innerHTML = choices;
    });
    document.getElementById('destination').innerHTML = choices;
}
populateDestinationList();

function populateSourceList(){
    let choices;
    source.forEach(choiceMade => {
        choices += `<option value = "${choiceMade}">${choiceMade}</option>`
    });
    document.getElementById('source').innerHTML = choices;
}
populateSourceList();

let fname = document.getElementById('firstName');
let lname = document.getElementById('lastName');

function submit(){
    if (fname == '' || lname == ''){
       let alt = alert("Please enter the Name field properly. They cannot be left empty.");
    }
    return alt;
}