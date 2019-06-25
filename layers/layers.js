var wms_layers = [];
var format_CCAA_0 = new ol.format.GeoJSON();
var features_CCAA_0 = format_CCAA_0.readFeatures(json_CCAA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCAA_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CCAA_0.addFeatures(features_CCAA_0);var lyr_CCAA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCAA_0, 
                style: style_CCAA_0,
                title: '<img src="styles/legend/CCAA_0.png" /> CCAA'
            });var format_PROVINCIA_1 = new ol.format.GeoJSON();
var features_PROVINCIA_1 = format_PROVINCIA_1.readFeatures(json_PROVINCIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIA_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PROVINCIA_1.addFeatures(features_PROVINCIA_1);var lyr_PROVINCIA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIA_1, 
                style: style_PROVINCIA_1,
                title: '<img src="styles/legend/PROVINCIA_1.png" /> PROVINCIA'
            });var format_CASASPRUEBA_2 = new ol.format.GeoJSON();
var features_CASASPRUEBA_2 = format_CASASPRUEBA_2.readFeatures(json_CASASPRUEBA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASASPRUEBA_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CASASPRUEBA_2.addFeatures(features_CASASPRUEBA_2);var lyr_CASASPRUEBA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CASASPRUEBA_2, 
                style: style_CASASPRUEBA_2,
    title: 'CASAS PRUEBA<br />\
    <img src="styles/legend/CASASPRUEBA_2_0.png" /> NEGOCIOS<br />\
    <img src="styles/legend/CASASPRUEBA_2_1.png" /> TIERRAS<br />\
    <img src="styles/legend/CASASPRUEBA_2_2.png" /> VIVIENDAS<br />'
        });

lyr_CCAA_0.setVisible(true);lyr_PROVINCIA_1.setVisible(true);lyr_CASASPRUEBA_2.setVisible(true);
var layersList = [lyr_CCAA_0,lyr_PROVINCIA_1,lyr_CASASPRUEBA_2];
lyr_CCAA_0.set('fieldAliases', {'NAMEUNIT': 'NAMEUNIT', });
lyr_PROVINCIA_1.set('fieldAliases', {'NAMEUNIT': 'NAMEUNIT', 'VIVENDAS': 'VIVENDAS', 'NEGOCIOS': 'NEGOCIOS', 'TIERRAS': 'TIERRAS', });
lyr_CASASPRUEBA_2.set('fieldAliases', {'id': 'id', 'Provincia': 'Provincia', 'CCAA': 'CCAA', 'BANCO': 'BANCO', 'REGIMEN': 'REGIMEN', });
lyr_CCAA_0.set('fieldImages', {'NAMEUNIT': 'TextEdit', });
lyr_PROVINCIA_1.set('fieldImages', {'NAMEUNIT': 'TextEdit', 'VIVENDAS': 'Range', 'NEGOCIOS': 'Range', 'TIERRAS': 'Range', });
lyr_CASASPRUEBA_2.set('fieldImages', {'id': 'TextEdit', 'Provincia': 'TextEdit', 'CCAA': 'TextEdit', 'BANCO': 'TextEdit', 'REGIMEN': 'TextEdit', });
lyr_CCAA_0.set('fieldLabels', {'NAMEUNIT': 'no label', });
lyr_PROVINCIA_1.set('fieldLabels', {'NAMEUNIT': 'no label', 'VIVENDAS': 'no label', 'NEGOCIOS': 'no label', 'TIERRAS': 'no label', });
lyr_CASASPRUEBA_2.set('fieldLabels', {'id': 'inline label', 'Provincia': 'inline label', 'CCAA': 'inline label', 'BANCO': 'inline label', 'REGIMEN': 'inline label', });
lyr_CASASPRUEBA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});