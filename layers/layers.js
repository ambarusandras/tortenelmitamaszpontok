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
var format_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1 = new ol.format.GeoJSON();
var features_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1 = format_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.readFeatures(json_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.addFeatures(features_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1);
var lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1, 
                style: style_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1,
                popuplayertitle: 'A honvéd emlékműbe illesztett Állami Térképészeti Intézeti csap (CsGy) ',
                interactive: true,
                title: '<img src="styles/legend/AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.png" /> A honvéd emlékműbe illesztett Állami Térképészeti Intézeti csap (CsGy) '
            });
var format_Eltntperemesvastbla_2 = new ol.format.GeoJSON();
var features_Eltntperemesvastbla_2 = format_Eltntperemesvastbla_2.readFeatures(json_Eltntperemesvastbla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eltntperemesvastbla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eltntperemesvastbla_2.addFeatures(features_Eltntperemesvastbla_2);
var lyr_Eltntperemesvastbla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eltntperemesvastbla_2, 
                style: style_Eltntperemesvastbla_2,
                popuplayertitle: 'Eltűnt peremes vastábla',
                interactive: true,
                title: '<img src="styles/legend/Eltntperemesvastbla_2.png" /> Eltűnt peremes vastábla'
            });
var format_LtezperemesvastblaCsGy_3 = new ol.format.GeoJSON();
var features_LtezperemesvastblaCsGy_3 = format_LtezperemesvastblaCsGy_3.readFeatures(json_LtezperemesvastblaCsGy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LtezperemesvastblaCsGy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LtezperemesvastblaCsGy_3.addFeatures(features_LtezperemesvastblaCsGy_3);
var lyr_LtezperemesvastblaCsGy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LtezperemesvastblaCsGy_3, 
                style: style_LtezperemesvastblaCsGy_3,
                popuplayertitle: 'Létező peremes vastábla (CsGy)',
                interactive: true,
                title: '<img src="styles/legend/LtezperemesvastblaCsGy_3.png" /> Létező peremes vastábla (CsGy)'
            });
var format_Eltntvasasztal_4 = new ol.format.GeoJSON();
var features_Eltntvasasztal_4 = format_Eltntvasasztal_4.readFeatures(json_Eltntvasasztal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eltntvasasztal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eltntvasasztal_4.addFeatures(features_Eltntvasasztal_4);
var lyr_Eltntvasasztal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eltntvasasztal_4, 
                style: style_Eltntvasasztal_4,
                popuplayertitle: 'Eltűnt vasasztal',
                interactive: true,
                title: '<img src="styles/legend/Eltntvasasztal_4.png" /> Eltűnt vasasztal'
            });
var format_Ltezvasasztal_5 = new ol.format.GeoJSON();
var features_Ltezvasasztal_5 = format_Ltezvasasztal_5.readFeatures(json_Ltezvasasztal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ltezvasasztal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ltezvasasztal_5.addFeatures(features_Ltezvasasztal_5);
var lyr_Ltezvasasztal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ltezvasasztal_5, 
                style: style_Ltezvasasztal_5,
                popuplayertitle: 'Létező vasasztal',
                interactive: true,
                title: '<img src="styles/legend/Ltezvasasztal_5.png" /> Létező vasasztal'
            });
var format_EltntvastblkMthJnoslersaalapjnKolkzI_6 = new ol.format.GeoJSON();
var features_EltntvastblkMthJnoslersaalapjnKolkzI_6 = format_EltntvastblkMthJnoslersaalapjnKolkzI_6.readFeatures(json_EltntvastblkMthJnoslersaalapjnKolkzI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EltntvastblkMthJnoslersaalapjnKolkzI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EltntvastblkMthJnoslersaalapjnKolkzI_6.addFeatures(features_EltntvastblkMthJnoslersaalapjnKolkzI_6);
var lyr_EltntvastblkMthJnoslersaalapjnKolkzI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EltntvastblkMthJnoslersaalapjnKolkzI_6, 
                style: style_EltntvastblkMthJnoslersaalapjnKolkzI_6,
                popuplayertitle: 'Eltűnt vastáblák Máthé János leírása alapján (KolközI)',
                interactive: false,
                title: '<img src="styles/legend/EltntvastblkMthJnoslersaalapjnKolkzI_6.png" /> Eltűnt vastáblák Máthé János leírása alapján (KolközI)'
            });
var format_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7 = new ol.format.GeoJSON();
var features_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7 = format_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.readFeatures(json_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.addFeatures(features_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7);
var lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7, 
                style: style_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7,
                popuplayertitle: 'A bőrgyógyászati klinika előadótermében bronztábla (KíKol)',
                interactive: false,
                title: '<img src="styles/legend/AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.png" /> A bőrgyógyászati klinika előadótermében bronztábla (KíKol)'
            });
var format_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8 = new ol.format.GeoJSON();
var features_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8 = format_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.readFeatures(json_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.addFeatures(features_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8);
var lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8, 
                style: style_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8,
                popuplayertitle: 'A kisbácsi bakterházon furatos tábla (alatta modern csap) (CsGy)',
                interactive: true,
                title: '<img src="styles/legend/AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.png" /> A kisbácsi bakterházon furatos tábla (alatta modern csap) (CsGy)'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.setVisible(true);lyr_Eltntperemesvastbla_2.setVisible(true);lyr_LtezperemesvastblaCsGy_3.setVisible(true);lyr_Eltntvasasztal_4.setVisible(true);lyr_Ltezvasasztal_5.setVisible(true);lyr_EltntvastblkMthJnoslersaalapjnKolkzI_6.setVisible(true);lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.setVisible(true);lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1,lyr_Eltntperemesvastbla_2,lyr_LtezperemesvastblaCsGy_3,lyr_Eltntvasasztal_4,lyr_Ltezvasasztal_5,lyr_EltntvastblkMthJnoslersaalapjnKolkzI_6,lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7,lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8];
lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'Fotó': 'Fotó', });
lyr_Eltntperemesvastbla_2.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_LtezperemesvastblaCsGy_3.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'fotó', });
lyr_Eltntvasasztal_4.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', });
lyr_Ltezvasasztal_5.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'fotó', });
lyr_EltntvastblkMthJnoslersaalapjnKolkzI_6.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', 'fotó': 'fotó', });
lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Fotó': 'ExternalResource', });
lyr_Eltntperemesvastbla_2.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', });
lyr_LtezperemesvastblaCsGy_3.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', });
lyr_Eltntvasasztal_4.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', });
lyr_Ltezvasasztal_5.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', });
lyr_EltntvastblkMthJnoslersaalapjnKolkzI_6.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', 'fotó': 'ExternalResource', });
lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGy_1.set('fieldLabels', {'ID': 'no label', 'Easting': 'hidden field', 'Northing': 'hidden field', 'Fotó': 'no label', });
lyr_Eltntperemesvastbla_2.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_LtezperemesvastblaCsGy_3.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', });
lyr_Eltntvasasztal_4.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_Ltezvasasztal_5.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', });
lyr_EltntvastblkMthJnoslersaalapjnKolkzI_6.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKol_7.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.set('fieldLabels', {'ID': 'no label', 'fotó': 'inline label - always visible', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGy_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});