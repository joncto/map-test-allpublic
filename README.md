# Map of Norwegian Governmental Entities
This map presents Norwegian Governmental Entities, based on the location of their (main) office.

Data is derived from the Norwegian Entity Register. Geo-coordinates have been parsed from the street address, using Google's geocoding API.

It is produced with QGIS 3.24, and the [qgis2web](https://github.com/tomchadwin/qgis2web) plugin, with some post-editing of the html-, css- and js-files.

## How to use the map?
The map is currently not available from a web server, but you can [run the map in html preview](http://htmlpreview.github.io/?https://github.com/joncto/map-test-allpublic/blob/main/index.html)

You can of course also down the files in this repo and run it locally.
After downloading, run 'index.html' in your browser.

All entities are represented with a point on the map. Clicking on it will display a pop-up window with the entity's:
a) organisation number, b) entity name, c) organisation form code, annd d) institutional sector code.

## Future development
In the future, we will implement links to our replay engine, allowing to inspect the historical websites of these institutions.
