// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("Resources/data.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
  
    // Sort the data array using the greekSearchResults value
    data.sort(function(a, b) {
      return parseFloat(b.PlantName) - parseFloat(a.Season);
    });
  
    // Slice the first 10 objects for plotting
    // data = data.slice(0, 10);
  
    // Reverse the array due to Plotly's defaults
    // data = data.reverse();
  
    // Trace1 for the Greek Data
    var trace1 = {
      x: data.map(row => row.PlantType),
      y: data.map(row => row.Season),
      text: data.map(row => row.Season),
      name: "Greek",
      type: "bar",
      orientation: "h"
    };
      
    var trace2 = {
        x: data.map(row => row.PlantType),
        y: data.map(row => row.Season),
        text: data.map(row => row.Season),
        name: "Greek",
        type: "bar",
        orientation: "h"
    };
      
      var data = [trace1, trace2];
      
      var layout = {barmode: 'stack'};
      
      Plotly.newPlot('plot', data, layout);
  });
  