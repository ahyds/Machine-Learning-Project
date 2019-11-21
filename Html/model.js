 var feature_importances = [[0.12478, 'duration_ms'],
 [0.12285209790467314, 'loudness'],
 [0.09632080010895092, 'energy'],
 [0.09198440751522265, 'speechiness'],
 [0.08849494707341848, 'valence'],
 [0.08747194565287432, 'tempo'],
 [0.08668254859095076, 'acousticness'],
 [0.08342223384926394, 'danceability'],
 [0.08271786691020827, 'liveness'],
 [0.06618094460422495, 'instrumentalness'],
 [0.05074415833211255, 'key'],
 [0.0136073681139339, 'mode'],
 [0.004736745940198093, 'time_signature']]

//  var per = feature_importances.forEach(item =>{
//         return(parseFloat(item[]));
//  });
 
 var weight = feature_importances.map(function(item, index) {
    return ((item[0]).toFixed(4)+'%');
  });

 console.log(weight);

 var feature = feature_importances.map(function(item, index) {
    return item[1];
  });

 console.log(feature);



//  function toPercent(number, float) {
//     var percent = parseFloat(number * 100).toFixed(float) + "%";
//     return percent;
//   }

var trace1 = {
      y: feature,
      x: weight,
      type: "bar",
      text: feature,
      orientation: "h"
    
    };

var layout = {
        title: "Feauture Importances",
        xaxis: { title: "Weights",tickformat: ',.2%'},
        yaxis: { title: "Features",autorange:"reversed"},
        
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }};
      
var dataforbar = [trace1];

    //plot the bar chart
Plotly.newPlot("feature_importances", dataforbar,layout);

// d3.csv("samples.json").then((data) => {
//     // get x y values for barchart
//     samples = data.samples;

// d3.csv("https://hyd123.s3.us-east-2.amazonaws.com/updated_data/1990data_cleaned.csv", function(data) {
//         console.log(data);
//     });

// d3.csv("1990data_redo.csv").then(function(data) {
//         console.log(data[0]);
//       });

d3.json("Resources/data1990.json").then((data) => {
    //  Create the Traces
    var trace1990 = {
      x: data.duration_ms,
      y: data.loudness,
      z: data.speechiness,

      mode: "markers",
      marker: {
        		size: 12,
        		line: {
        		color: 'rgba(217, 217, 217, 0.14)',
        		width: 0.5},
        		opacity: 0.8},
      name: "1990",
      type: 'scatter3d'
      };
    var data = [trace1990];
    var layout_3d = {margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    }};

    Plotly.newPlot('3d', data, layout_3d);
}
)
  
// var trace1990 = {
// 	x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
// 	mode: 'markers',
// 	marker: {
// 		size: 12,
// 		line: {
// 		color: 'rgba(217, 217, 217, 0.14)',
// 		width: 0.5},
// 		opacity: 0.8},
// 	type: 'scatter3d'
// };

// var trace2000 = {
// 	x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
// 	mode: 'markers',
// 	marker: {
// 		color: 'rgb(127, 127, 127)',
// 		size: 12,
// 		symbol: 'circle',
// 		line: {
// 		color: 'rgb(204, 204, 204)',
// 		width: 1},
// 		opacity: 0.8},
// 	type: 'scatter3d'};

// var data = [trace1990, trace2000];
// var layout_3d = {margin: {
// 	l: 0,
// 	r: 0,
// 	b: 0,
// 	t: 0
//   }};

// Plotly.newPlot('3d', data, layout_3d);




