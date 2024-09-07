var wms_layers = [];


        var lyr_GoogleMapsSatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Google Maps Satellite Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Bihar_1 = new ol.format.GeoJSON();
var features_Bihar_1 = format_Bihar_1.readFeatures(json_Bihar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bihar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bihar_1.addFeatures(features_Bihar_1);
var lyr_Bihar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bihar_1, 
                style: style_Bihar_1,
                popuplayertitle: "Bihar",
                interactive: true,
                title: '<img src="styles/legend/Bihar_1.png" /> Bihar'
            });
var format_Vaishali_2 = new ol.format.GeoJSON();
var features_Vaishali_2 = format_Vaishali_2.readFeatures(json_Vaishali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vaishali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vaishali_2.addFeatures(features_Vaishali_2);
var lyr_Vaishali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vaishali_2, 
                style: style_Vaishali_2,
                popuplayertitle: "Vaishali",
                interactive: true,
                title: '<img src="styles/legend/Vaishali_2.png" /> Vaishali'
            });
var format_Muzaffarpur_3 = new ol.format.GeoJSON();
var features_Muzaffarpur_3 = format_Muzaffarpur_3.readFeatures(json_Muzaffarpur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muzaffarpur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muzaffarpur_3.addFeatures(features_Muzaffarpur_3);
var lyr_Muzaffarpur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Muzaffarpur_3, 
                style: style_Muzaffarpur_3,
                popuplayertitle: "Muzaffarpur",
                interactive: true,
                title: '<img src="styles/legend/Muzaffarpur_3.png" /> Muzaffarpur'
            });
var format_Samastipur_4 = new ol.format.GeoJSON();
var features_Samastipur_4 = format_Samastipur_4.readFeatures(json_Samastipur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Samastipur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Samastipur_4.addFeatures(features_Samastipur_4);
var lyr_Samastipur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Samastipur_4, 
                style: style_Samastipur_4,
                popuplayertitle: "Samastipur",
                interactive: true,
                title: '<img src="styles/legend/Samastipur_4.png" /> Samastipur'
            });
var format_UP_5 = new ol.format.GeoJSON();
var features_UP_5 = format_UP_5.readFeatures(json_UP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UP_5.addFeatures(features_UP_5);
var lyr_UP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UP_5, 
                style: style_UP_5,
                popuplayertitle: "UP",
                interactive: true,
                title: '<img src="styles/legend/UP_5.png" /> UP'
            });
var format_Bahraich_6 = new ol.format.GeoJSON();
var features_Bahraich_6 = format_Bahraich_6.readFeatures(json_Bahraich_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bahraich_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bahraich_6.addFeatures(features_Bahraich_6);
var lyr_Bahraich_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bahraich_6, 
                style: style_Bahraich_6,
                popuplayertitle: "Bahraich",
                interactive: true,
                title: '<img src="styles/legend/Bahraich_6.png" /> Bahraich'
            });
var format_Balrampur_7 = new ol.format.GeoJSON();
var features_Balrampur_7 = format_Balrampur_7.readFeatures(json_Balrampur_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balrampur_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balrampur_7.addFeatures(features_Balrampur_7);
var lyr_Balrampur_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balrampur_7, 
                style: style_Balrampur_7,
                popuplayertitle: "Balrampur",
                interactive: true,
                title: '<img src="styles/legend/Balrampur_7.png" /> Balrampur'
            });
var format_Gondakml_8 = new ol.format.GeoJSON();
var features_Gondakml_8 = format_Gondakml_8.readFeatures(json_Gondakml_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gondakml_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gondakml_8.addFeatures(features_Gondakml_8);
var lyr_Gondakml_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gondakml_8, 
                style: style_Gondakml_8,
                popuplayertitle: "Gonda.kml",
                interactive: true,
                title: '<img src="styles/legend/Gondakml_8.png" /> Gonda.kml'
            });
var format_LakhimpurKheri_9 = new ol.format.GeoJSON();
var features_LakhimpurKheri_9 = format_LakhimpurKheri_9.readFeatures(json_LakhimpurKheri_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakhimpurKheri_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LakhimpurKheri_9.addFeatures(features_LakhimpurKheri_9);
var lyr_LakhimpurKheri_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LakhimpurKheri_9, 
                style: style_LakhimpurKheri_9,
                popuplayertitle: "Lakhimpur Kheri",
                interactive: true,
                title: '<img src="styles/legend/LakhimpurKheri_9.png" /> Lakhimpur Kheri'
            });
var format_Shravasti_10 = new ol.format.GeoJSON();
var features_Shravasti_10 = format_Shravasti_10.readFeatures(json_Shravasti_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shravasti_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shravasti_10.addFeatures(features_Shravasti_10);
var lyr_Shravasti_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shravasti_10, 
                style: style_Shravasti_10,
                popuplayertitle: "Shravasti",
                interactive: true,
                title: '<img src="styles/legend/Shravasti_10.png" /> Shravasti'
            });
var format_SidharthNagar_11 = new ol.format.GeoJSON();
var features_SidharthNagar_11 = format_SidharthNagar_11.readFeatures(json_SidharthNagar_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SidharthNagar_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SidharthNagar_11.addFeatures(features_SidharthNagar_11);
var lyr_SidharthNagar_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SidharthNagar_11, 
                style: style_SidharthNagar_11,
                popuplayertitle: "Sidharth Nagar",
                interactive: true,
                title: '<img src="styles/legend/SidharthNagar_11.png" /> Sidharth Nagar'
            });
var format_Sitapur_12 = new ol.format.GeoJSON();
var features_Sitapur_12 = format_Sitapur_12.readFeatures(json_Sitapur_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitapur_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitapur_12.addFeatures(features_Sitapur_12);
var lyr_Sitapur_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitapur_12, 
                style: style_Sitapur_12,
                popuplayertitle: "Sitapur",
                interactive: true,
                title: '<img src="styles/legend/Sitapur_12.png" /> Sitapur'
            });
var format_OperationalUpcomingSites_13 = new ol.format.GeoJSON();
var features_OperationalUpcomingSites_13 = format_OperationalUpcomingSites_13.readFeatures(json_OperationalUpcomingSites_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OperationalUpcomingSites_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OperationalUpcomingSites_13.addFeatures(features_OperationalUpcomingSites_13);
var lyr_OperationalUpcomingSites_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OperationalUpcomingSites_13, 
                style: style_OperationalUpcomingSites_13,
                popuplayertitle: "Operational & Upcoming Sites",
                interactive: true,
                title: '<img src="styles/legend/OperationalUpcomingSites_13.png" /> Operational & Upcoming Sites'
            });
var format_BufferMeters_14 = new ol.format.GeoJSON();
var features_BufferMeters_14 = format_BufferMeters_14.readFeatures(json_BufferMeters_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferMeters_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferMeters_14.addFeatures(features_BufferMeters_14);
var lyr_BufferMeters_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferMeters_14, 
                style: style_BufferMeters_14,
                popuplayertitle: "Buffer-Meters",
                interactive: true,
    title: 'Buffer-Meters<br />\
    <img src="styles/legend/BufferMeters_14_0.png" /> 500<br />\
    <img src="styles/legend/BufferMeters_14_1.png" /> 1000<br />\
    <img src="styles/legend/BufferMeters_14_2.png" /> 1500<br />\
    <img src="styles/legend/BufferMeters_14_3.png" /> 2000<br />\
    <img src="styles/legend/BufferMeters_14_4.png" /> 3000<br />\
    <img src="styles/legend/BufferMeters_14_5.png" /> 4000<br />\
    <img src="styles/legend/BufferMeters_14_6.png" /> 5000<br />\
    <img src="styles/legend/BufferMeters_14_7.png" /> 6000<br />\
    <img src="styles/legend/BufferMeters_14_8.png" /> 7000<br />\
    <img src="styles/legend/BufferMeters_14_9.png" /> 8000<br />\
    <img src="styles/legend/BufferMeters_14_10.png" /> 9000<br />\
    <img src="styles/legend/BufferMeters_14_11.png" /> 11000<br />\
    <img src="styles/legend/BufferMeters_14_12.png" /> <br />'
        });
var format_GaushalLocations_15 = new ol.format.GeoJSON();
var features_GaushalLocations_15 = format_GaushalLocations_15.readFeatures(json_GaushalLocations_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaushalLocations_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaushalLocations_15.addFeatures(features_GaushalLocations_15);
var lyr_GaushalLocations_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GaushalLocations_15, 
                style: style_GaushalLocations_15,
                popuplayertitle: "Gaushal Locations",
                interactive: true,
                title: '<img src="styles/legend/GaushalLocations_15.png" /> Gaushal Locations'
            });

lyr_GoogleMapsSatelliteImagery_0.setVisible(true);lyr_Bihar_1.setVisible(true);lyr_Vaishali_2.setVisible(true);lyr_Muzaffarpur_3.setVisible(true);lyr_Samastipur_4.setVisible(true);lyr_UP_5.setVisible(true);lyr_Bahraich_6.setVisible(true);lyr_Balrampur_7.setVisible(true);lyr_Gondakml_8.setVisible(true);lyr_LakhimpurKheri_9.setVisible(true);lyr_Shravasti_10.setVisible(true);lyr_SidharthNagar_11.setVisible(true);lyr_Sitapur_12.setVisible(true);lyr_OperationalUpcomingSites_13.setVisible(true);lyr_BufferMeters_14.setVisible(true);lyr_GaushalLocations_15.setVisible(true);
var layersList = [lyr_GoogleMapsSatelliteImagery_0,lyr_Bihar_1,lyr_Vaishali_2,lyr_Muzaffarpur_3,lyr_Samastipur_4,lyr_UP_5,lyr_Bahraich_6,lyr_Balrampur_7,lyr_Gondakml_8,lyr_LakhimpurKheri_9,lyr_Shravasti_10,lyr_SidharthNagar_11,lyr_Sitapur_12,lyr_OperationalUpcomingSites_13,lyr_BufferMeters_14,lyr_GaushalLocations_15];
lyr_Bihar_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Vaishali_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', });
lyr_Muzaffarpur_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Samastipur_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_UP_5.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Bahraich_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Balrampur_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Gondakml_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_LakhimpurKheri_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Shravasti_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_SidharthNagar_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Sitapur_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_OperationalUpcomingSites_13.set('fieldAliases', {'Site Name': 'Site Name', 'Plant Status': 'Plant Status', 'Existing /New': 'Existing /New', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'District Name': 'District Name', });
lyr_BufferMeters_14.set('fieldAliases', {'Dist Name': 'Dist Name', 'Site Name': 'Site Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'buffer_dis': 'buffer_dis', });
lyr_GaushalLocations_15.set('fieldAliases', {'State': 'State', 'District': 'District', 'Gaushala Location': 'Gaushala Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Bihar_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Vaishali_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', });
lyr_Muzaffarpur_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Samastipur_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_UP_5.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Bahraich_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Balrampur_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Gondakml_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_LakhimpurKheri_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Shravasti_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_SidharthNagar_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Sitapur_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_OperationalUpcomingSites_13.set('fieldImages', {'Site Name': 'TextEdit', 'Plant Status': 'TextEdit', 'Existing /New': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'District Name': 'TextEdit', });
lyr_BufferMeters_14.set('fieldImages', {'Dist Name': 'TextEdit', 'Site Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'buffer_dis': 'TextEdit', });
lyr_GaushalLocations_15.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Gaushala Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Bihar_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Vaishali_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', });
lyr_Muzaffarpur_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Samastipur_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_UP_5.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Bahraich_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Balrampur_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Gondakml_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_LakhimpurKheri_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Shravasti_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_SidharthNagar_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Sitapur_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_OperationalUpcomingSites_13.set('fieldLabels', {'Site Name': 'no label', 'Plant Status': 'no label', 'Existing /New': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'District Name': 'no label', });
lyr_BufferMeters_14.set('fieldLabels', {'Dist Name': 'no label', 'Site Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'buffer_dis': 'no label', });
lyr_GaushalLocations_15.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Gaushala Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_GaushalLocations_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});