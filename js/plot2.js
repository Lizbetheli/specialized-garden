// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("Resources/data.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
  
    // Sort the data array using the greekSearchResults value
    // data.sort(function(a, b) {
    //   return parseFloat(b.PlantName) - parseFloat(a.Season);
    // });

    var trace1 = {
      x: data.map(row => row.PlantType),
      y: data.map(row => row.Season),
      // text: data.map(row => row.Season),
      name: "Greek",
      type: "bar",
      orientation: "h"
    };
      
    var trace2 = {
        x: data.map(row => row.PlantType),
        y: data.map(row => row.Season),
        // text: data.map(row => row.Season),
        name: "Season",
        type: "bar",
        orientation: "h"
    };
      
      var data = [trace1, trace2];
      
      var layout = {barmode: 'stack'};
      
      Plotly.newPlot('plot', data, layout);
  });
  