d3.json("Resources/data.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;

var cdata = [{
  type: 'scatter',
  x: data.map(row => row.PlantName),
  y: data.map(row => row.Season),
  mode: 'markers',
  transforms: [{
    type: 'groupby',
    groups: Season,
    styles: [
      {target: 'Spring', value: {marker: {color: 'blue'}}},
      {target: 'Summer', value: {marker: {color: 'red'}}},
      {target: 'Fall', value: {marker: {color: 'black'}}},
      {target: 'Winter', value: {marker: {color: 'green'}}}
    ]
  }]
}]

Plotly.newPlot('myDiv', cdata)