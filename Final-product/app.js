var statesSel=d3.select('#StatesSelection');
var soilNeedsSel=d3.select('#Soil-needs');
var sunNeedsSel=d3.select('#Sun-Needs');
var plantTypesSel=d3.select('#PlantType');
var featuresSel=d3.select('#features');
var seasonsSel=d3.select('#SeasonsSelection');


var button = d3.select('#button');
var output = d3.select(".output");

var inputField = d3.select("#input-field");

function handleClick() {
    console.log("A button was clicked!");
}

button.on("click", handleClick);

function

// button.on("click", runEnter);

// function runEnter() {
//     d3.event.preventDefault();

//     // var inputElement = d3.select('#stateSelection');
//     // var inputValue = inputElement.property('value');
//     d3.select("h1>span").text(inputValue);
   
//