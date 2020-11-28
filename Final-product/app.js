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