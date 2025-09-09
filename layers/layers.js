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
var format_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1 = new ol.format.GeoJSON();
var features_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1 = format_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.readFeatures(json_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.addFeatures(features_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1);
var lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1, 
                style: style_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1,
                popuplayertitle: 'A honvéd emlékműbe illesztett Állami Térképészeti Intézeti csap (CsGy)/Reperul tubular încastrat în monumentul eroilor de către Oficiul Cartografic de Stat (ÁTI)',
                interactive: true,
                title: '<img src="styles/legend/AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.png" /> A honvéd emlékműbe illesztett Állami Térképészeti Intézeti csap (CsGy)/Reperul tubular încastrat în monumentul eroilor de către Oficiul Cartografic de Stat (ÁTI)'
            });
var format_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2 = new ol.format.GeoJSON();
var features_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2 = format_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.readFeatures(json_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.addFeatures(features_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2);
var lyr_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2, 
                style: style_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2,
                popuplayertitle: 'Eltűnt peremes vastábla/Plăcuță cu margine superioară de nivelment dispărută',
                interactive: true,
                title: '<img src="styles/legend/EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.png" /> Eltűnt peremes vastábla/Plăcuță cu margine superioară de nivelment dispărută'
            });
var format_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3 = new ol.format.GeoJSON();
var features_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3 = format_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.readFeatures(json_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.addFeatures(features_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3);
var lyr_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3, 
                style: style_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3,
                popuplayertitle: 'Létező peremes vastábla (CsGy)/Plăcuță cu margine superioară de nivelment existentă',
                interactive: true,
                title: '<img src="styles/legend/LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.png" /> Létező peremes vastábla (CsGy)/Plăcuță cu margine superioară de nivelment existentă'
            });
var format_EltntvasasztalMasdenivelmentdisprut_4 = new ol.format.GeoJSON();
var features_EltntvasasztalMasdenivelmentdisprut_4 = format_EltntvasasztalMasdenivelmentdisprut_4.readFeatures(json_EltntvasasztalMasdenivelmentdisprut_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EltntvasasztalMasdenivelmentdisprut_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EltntvasasztalMasdenivelmentdisprut_4.addFeatures(features_EltntvasasztalMasdenivelmentdisprut_4);
var lyr_EltntvasasztalMasdenivelmentdisprut_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EltntvasasztalMasdenivelmentdisprut_4, 
                style: style_EltntvasasztalMasdenivelmentdisprut_4,
                popuplayertitle: 'Eltűnt vasasztal/ Masă de nivelment dispărută',
                interactive: true,
                title: '<img src="styles/legend/EltntvasasztalMasdenivelmentdisprut_4.png" /> Eltűnt vasasztal/ Masă de nivelment dispărută'
            });
var format_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5 = new ol.format.GeoJSON();
var features_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5 = format_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.readFeatures(json_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.addFeatures(features_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5);
var lyr_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5, 
                style: style_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5,
                popuplayertitle: '1999-ben még meglévő vasasztalok/Mesele de nivelment care încă existau în 1999',
                interactive: true,
                title: '<img src="styles/legend/1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.png" /> 1999-ben még meglévő vasasztalok/Mesele de nivelment care încă existau în 1999'
            });
var format_LtezvasasztalMasdenivelmentexistent_6 = new ol.format.GeoJSON();
var features_LtezvasasztalMasdenivelmentexistent_6 = format_LtezvasasztalMasdenivelmentexistent_6.readFeatures(json_LtezvasasztalMasdenivelmentexistent_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LtezvasasztalMasdenivelmentexistent_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LtezvasasztalMasdenivelmentexistent_6.addFeatures(features_LtezvasasztalMasdenivelmentexistent_6);
var lyr_LtezvasasztalMasdenivelmentexistent_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LtezvasasztalMasdenivelmentexistent_6, 
                style: style_LtezvasasztalMasdenivelmentexistent_6,
                popuplayertitle: 'Létező vasasztal/Masă de nivelment existentă',
                interactive: true,
                title: '<img src="styles/legend/LtezvasasztalMasdenivelmentexistent_6.png" /> Létező vasasztal/Masă de nivelment existentă'
            });
var format_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7 = new ol.format.GeoJSON();
var features_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7 = format_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.readFeatures(json_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.addFeatures(features_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7);
var lyr_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7, 
                style: style_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7,
                popuplayertitle: 'Eltűnt vastáblák Máthé János leírása alapján (KolközI)/Plăcuță cu margine superioară dispărută pe baza descrierii lui Máthé János',
                interactive: true,
                title: '<img src="styles/legend/EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.png" /> Eltűnt vastáblák Máthé János leírása alapján (KolközI)/Plăcuță cu margine superioară dispărută pe baza descrierii lui Máthé János'
            });
var format_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8 = new ol.format.GeoJSON();
var features_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8 = format_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.readFeatures(json_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.addFeatures(features_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8);
var lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8, 
                style: style_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8,
                popuplayertitle: 'A bőrgyógyászati klinika előadótermében bronztábla (KíKol)/Plăcuță de bronz în sala de lectură a clinicii dermatologice',
                interactive: true,
                title: '<img src="styles/legend/AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.png" /> A bőrgyógyászati klinika előadótermében bronztábla (KíKol)/Plăcuță de bronz în sala de lectură a clinicii dermatologice'
            });
var format_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9 = new ol.format.GeoJSON();
var features_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9 = format_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.readFeatures(json_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.addFeatures(features_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9);
var lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9, 
                style: style_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9,
                popuplayertitle: 'A kisbácsi bakterházon furatos tábla (alatta modern csap) (CsGy)/Plăcuța cu șuruburi la casa de pază feroviară în Baciu (sub ea reper modern)',
                interactive: true,
                title: '<img src="styles/legend/AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.png" /> A kisbácsi bakterházon furatos tábla (alatta modern csap) (CsGy)/Plăcuța cu șuruburi la casa de pază feroviară în Baciu (sub ea reper modern)'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.setVisible(true);lyr_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.setVisible(true);lyr_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.setVisible(true);lyr_EltntvasasztalMasdenivelmentdisprut_4.setVisible(true);lyr_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.setVisible(true);lyr_LtezvasasztalMasdenivelmentexistent_6.setVisible(true);lyr_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.setVisible(true);lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.setVisible(true);lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1,lyr_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2,lyr_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3,lyr_EltntvasasztalMasdenivelmentdisprut_4,lyr_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5,lyr_LtezvasasztalMasdenivelmentexistent_6,lyr_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7,lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8,lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9];
lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'Fotó': 'Fotó', });
lyr_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'fotó', });
lyr_EltntvasasztalMasdenivelmentdisprut_4.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', });
lyr_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', });
lyr_LtezvasasztalMasdenivelmentexistent_6.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'foto1': 'fotó', });
lyr_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.set('fieldAliases', {'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', 'fotó': 'fotó', });
lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Fotó': 'ExternalResource', });
lyr_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', });
lyr_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', });
lyr_EltntvasasztalMasdenivelmentdisprut_4.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', });
lyr_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', });
lyr_LtezvasasztalMasdenivelmentexistent_6.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'foto1': 'ExternalResource', });
lyr_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.set('fieldImages', {'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'Hidden', 'Easting': 'Hidden', 'fotó': 'ExternalResource', });
lyr_AhonvdemlkmbeillesztettllamiTrkpszetiIntzeticsapCsGyReperultubularncastratnmonumentuleroilordectreOficiulCartograficdeStatTI_1.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Fotó': 'no label', });
lyr_EltntperemesvastblaPlcucumarginesuperioardenivelmentdisprut_2.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_LtezperemesvastblaCsGyPlcucumarginesuperioardenivelmentexistent_3.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', });
lyr_EltntvasasztalMasdenivelmentdisprut_4.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_1999benmgmeglvvasasztalokMeseledenivelmentcarencexistaun1999_5.set('fieldLabels', {'ID': 'no label', });
lyr_LtezvasasztalMasdenivelmentexistent_6.set('fieldLabels', {'ID': 'inline label - always visible', 'foto1': 'inline label - always visible', });
lyr_EltntvastblkMthJnoslersaalapjnKolkzIPlcucumarginesuperioardisprutpebazadescrieriiluiMthJnos_7.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_AbrgygyszatiklinikaeladtermbenbronztblaKKolPlcudebronznsaladelecturacliniciidermatologice_8.set('fieldLabels', {'ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.set('fieldLabels', {'ID': 'inline label - always visible', 'fotó': 'no label', });
lyr_AkisbcsibakterhzonfuratostblaalattamoderncsapCsGyPlcuacuuruburilacasadepazferoviarnBaciusubearepermodern_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});