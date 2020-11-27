// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("Resources/data.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
  
    // let spring_season = data.filter(Season => {
    //   return Season[1] === "p";
    // });
    // console.log(spring_season)

    // var plant_type = data.map(data => data.PlantType[0]);
    // console.log(plant_type)

    let printseason=data.map(Season => {
      console.log(Season);
    }); 
    printseason;
  
    // let printtype=data.map(PlantType => {
    //   console.log(PlantType);
    // }); 
    // printtype;
  
    var trace1 = {
      x: printseason,
      y: data.map(row => row.PlantType),
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

      var trace4 = {
        x: data.map(row => row.PlantType),
        y: data.map(row => row.Season),
        xaxis: 'x4',
        yaxis: 'y4',
        type: 'bar'
      };
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {
      grid: {
          rows: 4,
          columns: 1,
          pattern: 'independent',
          roworder: 'bottom to top'}
      };
      
      Plotly.newPlot('plot', data, layout);
  });
  