function handleClick() {
    console.log("A button was clicked!");
}

var states=['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
      'New Jersey', 'New Mexico', 'New york', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 
      'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
      'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var sun_needs=['Partial Shade', 'Full Sun or Partial Shade', 'Full Sun',
       'Partial Shade or Full Shade', 'All Sun Types',
       'Full Sun or Partial Shade or Full Shade', 'Flexible'];
var soil_needs=['Well-drained', 'Well-drained, High fertility', 'Damp',
       'Well-drained, Damp', 'Dry', 'Droughty', 'Flexible'];
var plant_types=['Flower', 'Animal Feed', 'Fruit', 'Other', 'Vegetable',
       'Grain or Nut'];
var features=['Tolerates heat', 'Tolerates frost',
       'Non-invasive', 'Good for pressed flowers', 'Good for cut flowers',
       'Deer resistant', 'Attracts bees', 'Attracts butterflies',
       'Attracts beneficial insects', 'Attracts hummingbirds', 'None'];
var seasons=['Summer', 'Spring', 'Fall', 'Fall and Winter', 'Spring and Summer',
       'Winter', 'All']; 
// button.on("click", handleClick);

var statesSel=d3.select('#StatesSelection');
var soilNeedsSel=d3.select('#Soil-needs');
var sunNeedsSel=d3.select('#Sun-Needs');
var plantTypesSel=d3.select('#PlantType');
var featuresSel=d3.select('#features');
var seasonsSel=d3.select('#SeasonsSelection');


var button = d3.select('#button');
var output = d3.select(".output");

var inputs =[{'dom': statesSel, 'list': states}, 
			{'dom': sunNeedsSel, 'list': sun_needs, 'header': 'Sun Needs_'}, 
			{'dom': soilNeedsSel, 'list': soil_needs, 'header': 'Soil Needs_'}, 
			{'dom': plantTypesSel, 'list': plant_types, 'header': 'Plant Type_'}, 
			{'dom': seasonsSel, 'list': seasons, 'header': 'Season_'}, 
			{'dom': featuresSel, 'list': features}];

inputs.forEach(input=>{
	input['list'].forEach(inputChoice=>{
		if (input['header']){ 
			input['dom'].append('option')
				.property('value', input['header']+inputChoice)
				.text(inputChoice);
		} else {
			input['dom'].append('option')
				.property('value', inputChoice)
				.text(inputChoice);
		};
	});
});

d3.select('#go').on('click', function() {
	var rec=d3.select('#recommendation');
	rec.html('');
	// rec.html(statesSel.property('value')+soilNeedsSel.property('value')+sunNeedsSel.property('value'))
	input_str=statesSel.property('value')+'&'+
		plantTypesSel.property('value')+'&'+
		soilNeedsSel.property('value')+'&'+
		sunNeedsSel.property('value')+'&'+
		featuresSel.property('value')+'&'+
		seasonsSel.property('value')
	d3.json('/predict/'+input_str).then(results=>{
		rec.html(results);
	});
});
