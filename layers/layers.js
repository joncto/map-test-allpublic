var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_enheter_offentlig_flattenedgeocoded_1 = new ol.format.GeoJSON();
var features_enheter_offentlig_flattenedgeocoded_1 = format_enheter_offentlig_flattenedgeocoded_1.readFeatures(json_enheter_offentlig_flattenedgeocoded_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_enheter_offentlig_flattenedgeocoded_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enheter_offentlig_flattenedgeocoded_1.addFeatures(features_enheter_offentlig_flattenedgeocoded_1);
var lyr_enheter_offentlig_flattenedgeocoded_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_enheter_offentlig_flattenedgeocoded_1, 
                style: style_enheter_offentlig_flattenedgeocoded_1,
                interactive: true,
                title: '<img src="styles/legend/enheter_offentlig_flattenedgeocoded_1.png" /> enheter_offentlig_flattened-geocoded'
            });

lyr_OSMStandard_0.setVisible(true);lyr_enheter_offentlig_flattenedgeocoded_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_enheter_offentlig_flattenedgeocoded_1];
lyr_enheter_offentlig_flattenedgeocoded_1.set('fieldAliases', {'organisasjonsnummer': 'organisasjonsnummer', 'navn': 'navn', 'organisasjonsform': 'organisasjonsform', 'institusjonellSektorkode': 'institusjonellSektorkode', 'hjemmeside': 'hjemmeside', 'forretningsadresse_adresse': 'forretningsadresse_adresse', 'forretningsadresse_poststed': 'forretningsadresse_poststed', 'forretningsadresse_land': 'forretningsadresse_land', 'maalform': 'maalform', 'forretningsadresse_geocode': 'forretningsadresse_geocode', 'latitude-y': 'latitude-y', 'longitude-x': 'longitude-x', });
lyr_enheter_offentlig_flattenedgeocoded_1.set('fieldImages', {'organisasjonsnummer': 'Range', 'navn': 'TextEdit', 'organisasjonsform': 'TextEdit', 'institusjonellSektorkode': 'TextEdit', 'hjemmeside': 'TextEdit', 'forretningsadresse_adresse': 'Hidden', 'forretningsadresse_poststed': 'Hidden', 'forretningsadresse_land': 'Hidden', 'maalform': 'TextEdit', 'forretningsadresse_geocode': 'Hidden', 'latitude-y': 'Hidden', 'longitude-x': 'Hidden', });
lyr_enheter_offentlig_flattenedgeocoded_1.set('fieldLabels', {'organisasjonsnummer': 'no label', 'navn': 'no label', 'organisasjonsform': 'no label', 'institusjonellSektorkode': 'no label', 'hjemmeside': 'no label', 'maalform': 'no label', });
lyr_enheter_offentlig_flattenedgeocoded_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});