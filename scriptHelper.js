// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }

 function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(parseInt(testInput))) {
        return "Not a Number";
    } else if(typeof(parseInt(testInput)) == "number"){
        return "Is a Number";
    }
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

    if(validateInput(pilot) === "Not a Number") {
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `${pilot} Pilot Ready`;
    }

    if(validateInput(copilot) === "Not a Number") {
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `${copilot} Copilot Ready`;
    }

    if(parseInt(fuelLevel) < 10000) {
        faultyItems.style.visibility = "visible";
        let fuelStatus = document.getElementById("fuelStatus");
        fuelStatus.innerHTML = "Not enough fuel for the journey.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }

    if(parseInt(cargoLevel) > 10000) {
        faultyItems.style.visibility = "visible";
        let cargoStatus = document.getElementById("cargoStatus");
        cargoStatus.innerHTML = "Too much mass for the shuttle to take off.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }

    if(validateInput(pilot) !== "Empty" &&
    validateInput(copilot) !== "Empty" &&
    validateInput(fuelLevel) === "Is a Number" &&
    validateInput(cargoLevel) === "Is a Number") {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch."
    }

 }

 async function myFetch() {
     let planetsReturned;

     planetsReturned = await fetch().then( function(response) {
         });

     return planetsReturned;
 }

 function pickPlanet(planets) {
 }

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet;
 module.exports.myFetch = myFetch;
