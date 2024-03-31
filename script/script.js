let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhopura", "Kashmir"];

for (let i  = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("originalTextBox").innerHTML += num + ')' + cities[i] + '&emsp;';
}
function showOutput(Output) {
    document.getElementById("Output").innerHTML = Output;
}

function simpleAlert(){
    alert("I'm an alert")
}


function printMyName(){

    let myName = document.getElementById("inputText").value;

    if (!myName){
    alert("Please type your name")
    return
    }
    document.getElementById("Output").innerHTML = myName
}

function printAllcities(){
    document.getElementById("Output").innerHTML = ""

    for (let i  = 0; i < cities.length; i++) {
        let num = i + 1;

        // document.getElementById("Output").innerHTML += index + city + "<br />" 
        document.getElementById("Output").innerHTML += num + ')' + cities[i] + "<br />" + '&emsp;';
    }
}
function addYourCityInList(){
    let city = document.getElementById("inputText").value;

    if(!city){
        alert('Please type your city name.')
        return
    }
    cities.push(city);
    document.getElementById('Output').innerHTML = '<span style="color: green; font-size: 20px;">"'+ city +'"</span>has been successfully added into list.';
}
function generateTable(){
    let number = document.getElementById("inputText").value;

    if(!number){
        alert('Please type your number.')
        return
    }
    let limit = +prompt("Give a number")

    document.getElementById("Output").innerHTML = ""

    for (let index  = 1; index <= limit; index++) {

        document.getElementById("Output").innerHTML += number + '*' + index + "=" + number * index + "<br />";
    }
}
document.getElementById("clearOutLineButton").onclick = function(){
    document.getElementById("Output").innerHTML = ""
}
