// Creating the map object
let myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

// Adding tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// setting link to the JSON that will be read in
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Read in the Json data and save the features of each disaster to a variable
d3.json(link).then(function(response) {
    features = response.features;

    // Create a for loop to loop through each disaster in feature
    for (let i = 0; i < features.length; i++) {

      // Get the key information for each disaster from the features variable
      let location = features[i].geometry;
      let mag = features[i].properties.mag;
      let depth = location.coordinates[2];
      let radius = mag * 25000;
        
        // Color conditionals based on depth
        let color = "";
        if (depth < 10) {
            color = "green";
          }
        else if (depth > 90) {
            color = "Darkred";
        }
        else if (depth > 70) {
            color = "red";
        }
        else if (depth > 50) {
            color = "coral";
        }
        else if (depth  > 30) {
              color = "orange";
        }
        else if (depth  > 10) {
              color = "yellow";
        }
            
        else {
            color = "green";
        }

        // Making the circles for each disaster at the coordinates
        L.circle([location.coordinates[1], location.coordinates[0]], {

            color: "black",
            fillColor: color,
            fillOpacity: 0.5,
            radius: radius
            
        // Creating popup for each disaster     
        }).bindPopup(`<h1>Earthquake Stats\</h1> <hr> <h3>Magnitude: ${mag}</h3> <h3>Depth: ${depth}</h3>`).addTo(myMap);
            //}).bindPopup(`<h1>${location.coordinates[3]}</h1> <hr> <h3>Magnitude: ${magnitude}</h3>`).addTo(myMap);
      
    }});
   


  // Set up the legend.
  let legend = L.control({ position: "bottomright" });

  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");

    // Nice Legend formatting found at https://codepen.io/haakseth/pen/KQbjdO
    // The CSS to get this to work was also found there
    div.innerHTML += "<h4>Depth</h4>";
    div.innerHTML += '<i style="background: #008000"></i><span>\ <10  </span><br>';
    div.innerHTML += '<i style="background: #FFFF00"></i><span>10-30</span><br>';
    div.innerHTML += '<i style="background: #FFA500"></i><span>30-50</span><br>';
    div.innerHTML += '<i style="background: #FF7F50"></i><span>50-70</span><br>';
    div.innerHTML += '<i style="background: #FF0000"></i><span>70-90</span><br>';
    div.innerHTML += '<i style="background: #8B0000"></i><span>90+</span><br>';
    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);

