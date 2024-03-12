// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`

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

    let ready = true;

    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if(validateInput(pilot) === "Not a Number") {
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    if(validateInput(copilot) === "Not a Number") {
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if(parseInt(fuelLevel) < 10000) {

        list.style.visibility = "visible";

        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch.";
        ready = false;

    }

    if(parseInt(fuelLevel) >= 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if(parseInt(cargoLevel) > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        ready = false;
    }

    if(parseInt(cargoLevel) <= 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if(validateInput(pilot) !== "Empty" &&
    validateInput(copilot) !== "Empty" &&
    validateInput(fuelLevel) === "Is a Number" &&
    validateInput(cargoLevel) === "Is a Number" && ready) {

        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch."
        list.style.visibility = "visible";
    }

 }

 async function myFetch() {
     let planetsReturned;

     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

     return planetsReturned;
 }

 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
 }

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet;
 module.exports.myFetch = myFetch;
