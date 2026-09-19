var wms_layers = [];

var format_LimiteMunicipal_0 = new ol.format.GeoJSON();
var features_LimiteMunicipal_0 = format_LimiteMunicipal_0.readFeatures(json_LimiteMunicipal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_0.addFeatures(features_LimiteMunicipal_0);
var lyr_LimiteMunicipal_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_0, 
                style: style_LimiteMunicipal_0,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_0.png" /> Limite Municipal'
            });
var format_RMRJLocaldeVotacao_1 = new ol.format.GeoJSON();
var features_RMRJLocaldeVotacao_1 = format_RMRJLocaldeVotacao_1.readFeatures(json_RMRJLocaldeVotacao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RMRJLocaldeVotacao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RMRJLocaldeVotacao_1.addFeatures(features_RMRJLocaldeVotacao_1);
var lyr_RMRJLocaldeVotacao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RMRJLocaldeVotacao_1, 
                style: style_RMRJLocaldeVotacao_1,
                popuplayertitle: 'RMRJ Local de Votacao',
                interactive: true,
                title: '<img src="styles/legend/RMRJLocaldeVotacao_1.png" /> RMRJ Local de Votacao'
            });
var format_Municipio_2 = new ol.format.GeoJSON();
var features_Municipio_2 = format_Municipio_2.readFeatures(json_Municipio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipio_2.addFeatures(features_Municipio_2);
var lyr_Municipio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipio_2, 
                style: style_Municipio_2,
                popuplayertitle: 'Municipio',
                interactive: false,
                title: '<img src="styles/legend/Municipio_2.png" /> Municipio'
            });

lyr_LimiteMunicipal_0.setVisible(true);lyr_RMRJLocaldeVotacao_1.setVisible(true);lyr_Municipio_2.setVisible(true);
var layersList = [lyr_LimiteMunicipal_0,lyr_RMRJLocaldeVotacao_1,lyr_Municipio_2];
lyr_LimiteMunicipal_0.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'Município', 'Municipios_Populacao': 'População', 'Municipios_Eleitores': 'Eleitores', 'Municipios_Votos AP_2022': 'Votos AP 2022 Município', 'Região': 'Região', 'Municipio_cxalta': 'Municipio_cxalta', });
lyr_RMRJLocaldeVotacao_1.set('fieldAliases', {'fid': 'fid', 'LOCAL': 'Local de votação', 'ENDERECO': 'Endereço', 'ZONA': 'Z.E.', 'SECAO': 'SECAO', 'Votos_AP2022': 'Votos_AP2022', 'Votos_AP2022_Local': 'Votos AP2022 Local de Votação', 'NM_MUN': 'Município', 'Municipios_Populacao': 'População', 'Municipios_Eleitores': 'Eleitores', 'Municipios_Votos AP_2022': 'Votos Adilson Pires no município', 'Região': 'Região', });
lyr_Municipio_2.set('fieldAliases', {'fid': 'fid', 'NM_MUN': 'Município', 'Populacao': 'População', 'Eleitores': 'Eleitores', 'Votos AP_2': 'Votos AP 2022 Município', 'Região': 'Região', });
lyr_LimiteMunicipal_0.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'Municipios_Populacao': 'TextEdit', 'Municipios_Eleitores': 'TextEdit', 'Municipios_Votos AP_2022': 'TextEdit', 'Região': 'TextEdit', 'Municipio_cxalta': 'TextEdit', });
lyr_RMRJLocaldeVotacao_1.set('fieldImages', {'fid': 'TextEdit', 'LOCAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'ZONA': 'TextEdit', 'SECAO': 'TextEdit', 'Votos_AP2022': 'TextEdit', 'Votos_AP2022_Local': 'TextEdit', 'NM_MUN': 'TextEdit', 'Municipios_Populacao': 'TextEdit', 'Municipios_Eleitores': 'TextEdit', 'Municipios_Votos AP_2022': 'TextEdit', 'Região': 'TextEdit', });
lyr_Municipio_2.set('fieldImages', {'fid': 'TextEdit', 'NM_MUN': 'TextEdit', 'Populacao': 'TextEdit', 'Eleitores': 'TextEdit', 'Votos AP_2': 'TextEdit', 'Região': 'TextEdit', });
lyr_LimiteMunicipal_0.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'inline label - always visible', 'Municipios_Populacao': 'inline label - always visible', 'Municipios_Eleitores': 'inline label - always visible', 'Municipios_Votos AP_2022': 'inline label - always visible', 'Região': 'inline label - always visible', 'Municipio_cxalta': 'hidden field', });
lyr_RMRJLocaldeVotacao_1.set('fieldLabels', {'fid': 'hidden field', 'LOCAL': 'no label', 'ENDERECO': 'inline label - always visible', 'ZONA': 'hidden field', 'SECAO': 'hidden field', 'Votos_AP2022': 'hidden field', 'Votos_AP2022_Local': 'inline label - always visible', 'NM_MUN': 'hidden field', 'Municipios_Populacao': 'hidden field', 'Municipios_Eleitores': 'hidden field', 'Municipios_Votos AP_2022': 'hidden field', 'Região': 'hidden field', });
lyr_Municipio_2.set('fieldLabels', {'fid': 'no label', 'NM_MUN': 'no label', 'Populacao': 'no label', 'Eleitores': 'no label', 'Votos AP_2': 'no label', 'Região': 'no label', });
lyr_Municipio_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});