# leaflet-challenge
The JS and CSS code to format the legend was found at https://codepen.io/haakseth/pen/KQbjdO. All other code in this repository is my own.

## Data displayed
The data used for this assignment can be downloaded from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
Currently, the map displays all Earthquakes for the last 24 hours from 11:06 AM EST 2/22/2024
To change what Earthquake data is displayed, load in a different json from the link above.
Warning: Some of the jsons contain so many Earthquakes that the code cannot render them on the map without crashing.

## Index.html
index.html contains the HTML code necessary to display the map and all its features

## static
The static folder contains both the CSS and JS code. 
The CSS code was modified with the CSS code found at https://codepen.io/haakseth/pen/KQbjdO to provide formatting for the legend.
The JS code uses the D3 library to obtain the data from the json and the leaflet library to create the map. 

## Github pages
The github page for this repository can be found at https://kylekohlmeyer.github.io/leaflet-challenge/
