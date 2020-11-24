// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("Resources/data.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
  
    // Sort the data array using the greekSearchResults value
    data.sort(function(a, b) {
      return parseFloat(b.PlantName) - parseFloat(a.Season);
    });
  
    var trace1 = {
        x: data.map(row => row.PlantType),
        y: data.map(row => row.Season),
        type: 'bar'
      };
      
      var trace2 = {
        x: data.map(row => row.PlantType),
        y: data.map(row => row.Season),
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'bar'
      };
      
      var trace3 = {
        x: data.map(row => row.PlantType),
        y: data.map(row => row.Season),
        xaxis: 'x3',
        yaxis: 'y3',
        type: 'bar'
      };
      
      var data = [trace1, trace2, trace3];
      
      var layout = {
      grid: {
          rows: 3,
          columns: 1,
          pattern: 'independent',
          roworder: 'bottom to top'}
      };
      
      Plotly.newPlot('plot', data, layout);
  });
  