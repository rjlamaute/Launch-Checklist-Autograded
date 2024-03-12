// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector('form');
    form.addEventListener("submit", function(event){
        //window.alert("submitted");
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        formSubmission(document, document.getElementById("faultyItems"), pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });



 });
