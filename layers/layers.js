var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Eltntvastbla_1 = new ol.format.GeoJSON();
var features_Eltntvastbla_1 = format_Eltntvastbla_1.readFeatures(json_Eltntvastbla_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eltntvastbla_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eltntvastbla_1.addFeatures(features_Eltntvastbla_1);
var lyr_Eltntvastbla_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eltntvastbla_1, 
                style: style_Eltntvastbla_1,
                popuplayertitle: 'Eltűnt vastábla',
                interactive: true,
                title: '<img src="styles/legend/Eltntvastbla_1.png" /> Eltűnt vastábla'
            });
var format_Ltezvastbla_2 = new ol.format.GeoJSON();
var features_Ltezvastbla_2 = format_Ltezvastbla_2.readFeatures(json_Ltezvastbla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ltezvastbla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ltezvastbla_2.addFeatures(features_Ltezvastbla_2);
var lyr_Ltezvastbla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ltezvastbla_2, 
                style: style_Ltezvastbla_2,
                popuplayertitle: 'Létező vastábla',
                interactive: true,
                title: '<img src="styles/legend/Ltezvastbla_2.png" /> Létező vastábla'
            });
var format_Eltntvasasztal_3 = new ol.format.GeoJSON();
var features_Eltntvasasztal_3 = format_Eltntvasasztal_3.readFeatures(json_Eltntvasasztal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eltntvasasztal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eltntvasasztal_3.addFeatures(features_Eltntvasasztal_3);
var lyr_Eltntvasasztal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eltntvasasztal_3, 
                style: style_Eltntvasasztal_3,
                popuplayertitle: 'Eltűnt vasasztal',
                interactive: true,
                title: '<img src="styles/legend/Eltntvasasztal_3.png" /> Eltűnt vasasztal'
            });
var format_Ltezvasasztal_4 = new ol.format.GeoJSON();
var features_Ltezvasasztal_4 = format_Ltezvasasztal_4.readFeatures(json_Ltezvasasztal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ltezvasasztal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ltezvasasztal_4.addFeatures(features_Ltezvasasztal_4);
var lyr_Ltezvasasztal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ltezvasasztal_4, 
                style: style_Ltezvasasztal_4,
                popuplayertitle: 'Létező vasasztal',
                interactive: true,
                title: '<img src="styles/legend/Ltezvasasztal_4.png" /> Létező vasasztal'
            });
var format_EltntvastblkMthJnoslersaalapjn_5 = new ol.format.GeoJSON();
var features_EltntvastblkMthJnoslersaalapjn_5 = format_EltntvastblkMthJnoslersaalapjn_5.readFeatures(json_EltntvastblkMthJnoslersaalapjn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EltntvastblkMthJnoslersaalapjn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EltntvastblkMthJnoslersaalapjn_5.addFeatures(features_EltntvastblkMthJnoslersaalapjn_5);
var lyr_EltntvastblkMthJnoslersaalapjn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EltntvastblkMthJnoslersaalapjn_5, 
                style: style_EltntvastblkMthJnoslersaalapjn_5,
                popuplayertitle: 'Eltűnt vastáblák Máthé János leírása alapján',
                interactive: true,
                title: '<img src="styles/legend/EltntvastblkMthJnoslersaalapjn_5.png" /> Eltűnt vastáblák Máthé János leírása alapján'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Eltntvastbla_1.setVisible(true);lyr_Ltezvastbla_2.setVisible(true);lyr_Eltntvasasztal_3.setVisible(true);lyr_Ltezvasasztal_4.setVisible(true);lyr_EltntvastblkMthJnoslersaalapjn_5.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Eltntvastbla_1,lyr_Ltezvastbla_2,lyr_Eltntvasasztal_3,lyr_Ltezvasasztal_4,lyr_EltntvastblkMthJnoslersaalapjn_5];
lyr_Eltntvastbla_1.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Ltezvastbla_2.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'fotó', });
lyr_Eltntvasasztal_3.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', });
lyr_Ltezvasasztal_4.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'fotó', });
lyr_EltntvastblkMthJnoslersaalapjn_5.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Eltntvastbla_1.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', });
lyr_Ltezvastbla_2.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', });
lyr_Eltntvasasztal_3.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', });
lyr_Ltezvasasztal_4.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', });
lyr_EltntvastblkMthJnoslersaalapjn_5.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_Eltntvastbla_1.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_Ltezvastbla_2.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', });
lyr_Eltntvasasztal_3.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_Ltezvasasztal_4.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', });
lyr_EltntvastblkMthJnoslersaalapjn_5.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_EltntvastblkMthJnoslersaalapjn_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});