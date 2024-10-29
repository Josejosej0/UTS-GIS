var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kelurahan_1 = new ol.format.GeoJSON();
var features_Kelurahan_1 = format_Kelurahan_1.readFeatures(json_Kelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_1.addFeatures(features_Kelurahan_1);
var lyr_Kelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_1, 
                style: style_Kelurahan_1,
                popuplayertitle: "Kelurahan",
                interactive: true,
    title: 'Kelurahan<br />\
    <img src="styles/legend/Kelurahan_1_0.png" /> Bakalankrajan<br />\
    <img src="styles/legend/Kelurahan_1_1.png" /> Bandulan<br />\
    <img src="styles/legend/Kelurahan_1_2.png" /> Bandungrejosari<br />\
    <img src="styles/legend/Kelurahan_1_3.png" /> Ciptomulyo<br />\
    <img src="styles/legend/Kelurahan_1_4.png" /> Gadang<br />\
    <img src="styles/legend/Kelurahan_1_5.png" /> Karangbesuki<br />\
    <img src="styles/legend/Kelurahan_1_6.png" /> Kebonsari<br />\
    <img src="styles/legend/Kelurahan_1_7.png" /> Mulyorejo<br />\
    <img src="styles/legend/Kelurahan_1_8.png" /> Pisangcandi<br />\
    <img src="styles/legend/Kelurahan_1_9.png" /> Sukun<br />\
    <img src="styles/legend/Kelurahan_1_10.png" /> Tanjungrejo<br />'
        });
var format_TempatIbadah_2 = new ol.format.GeoJSON();
var features_TempatIbadah_2 = format_TempatIbadah_2.readFeatures(json_TempatIbadah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_2.addFeatures(features_TempatIbadah_2);
var lyr_TempatIbadah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_2, 
                style: style_TempatIbadah_2,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
    title: 'Tempat Ibadah<br />\
    <img src="styles/legend/TempatIbadah_2_0.png" /> christian<br />\
    <img src="styles/legend/TempatIbadah_2_1.png" /> muslim<br />\
    <img src="styles/legend/TempatIbadah_2_2.png" /> hindu<br />'
        });
var format_highway_motorway_highway_motorway_link_3 = new ol.format.GeoJSON();
var features_highway_motorway_highway_motorway_link_3 = format_highway_motorway_highway_motorway_link_3.readFeatures(json_highway_motorway_highway_motorway_link_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_motorway_highway_motorway_link_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_motorway_highway_motorway_link_3.addFeatures(features_highway_motorway_highway_motorway_link_3);
var lyr_highway_motorway_highway_motorway_link_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_motorway_highway_motorway_link_3, 
                style: style_highway_motorway_highway_motorway_link_3,
                popuplayertitle: "highway_motorway_highway_motorway_link",
                interactive: true,
                title: '<img src="styles/legend/highway_motorway_highway_motorway_link_3.png" /> highway_motorway_highway_motorway_link'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Kelurahan_1,lyr_TempatIbadah_2,lyr_highway_motorway_highway_motorway_link_3,],
                                fold: "open",
                                title: "group1"});

lyr_OSMStandard_0.setVisible(true);lyr_Kelurahan_1.setVisible(true);lyr_TempatIbadah_2.setVisible(true);lyr_highway_motorway_highway_motorway_link_3.setVisible(true);
var layersList = [group_group1];
lyr_Kelurahan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_TempatIbadah_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'amenity': 'amenity', 'religion': 'religion', 'addr:full': 'addr:full', 'loc_name': 'loc_name', 'official_name': 'official_name', 'alt_name': 'alt_name', 'short_name': 'short_name', 'place_of_worship': 'place_of_worship', 'building': 'building', 'access': 'access', 'website': 'website', 'name:id': 'name:id', 'barrier': 'barrier', 'subdenomination': 'subdenomination', 'designation': 'designation', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'name': 'name', 'denomination': 'denomination', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bicycle_road': 'bicycle_road', 'junction': 'junction', 'service': 'service', 'bicycle': 'bicycle', 'maxweight:signed': 'maxweight:signed', 'maxweight': 'maxweight', 'maxheight:signed': 'maxheight:signed', 'except': 'except', 'addr:postcode': 'addr:postcode', 'comment': 'comment', 'bus': 'bus', 'parking:lane:right': 'parking:lane:right', 'maxspeed:advisory': 'maxspeed:advisory', 'incline': 'incline', 'FID': 'FID', 'oneway:4wd': 'oneway:4wd', 'paving_stones:shape': 'paving_stones:shape', 'destination:symbol': 'destination:symbol', 'construction': 'construction', 'junction:ref': 'junction:ref', 'structure': 'structure', 'operator': 'operator', 'minspeed': 'minspeed', 'int_ref': 'int_ref', 'hgv': 'hgv', 'toll': 'toll', 'sidewalk:left:surface': 'sidewalk:left:surface', 'tunnel': 'tunnel', 'tracktype': 'tracktype', 'wheelchair': 'wheelchair', 'locked': 'locked', 'cycleway:both': 'cycleway:both', 'covered': 'covered', 'est_width': 'est_width', 'oneway:motor_cycle': 'oneway:motor_cycle', 'oneway:bicycle': 'oneway:bicycle', 'description': 'description', 'motorroad': 'motorroad', 'source:width': 'source:width', 'vehicle': 'vehicle', 'maxheight': 'maxheight', 'addr:city': 'addr:city', 'oneway:moped': 'oneway:moped', 'ford': 'ford', 'motorcycle:conditional': 'motorcycle:conditional', 'restriction': 'restriction', 'bridge:name': 'bridge:name', 'access_control': 'access_control', 'destination:ref': 'destination:ref', 'destination': 'destination', 'condition': 'condition', 'name:abbr': 'name:abbr', 'name:short_name': 'name:short_name', 'access:conditional': 'access:conditional', 'sidewalk': 'sidewalk', 'short_name': 'short_name', 'car': 'car', 'noname': 'noname', 'vehicles': 'vehicles', 'smoothness': 'smoothness', 'lit': 'lit', 'name:zh': 'name:zh', 'oneway:conditional': 'oneway:conditional', 'oneway:motorcar': 'oneway:motorcar', 'old_ref': 'old_ref', 'alt_name': 'alt_name', 'shoulder': 'shoulder', 'name:id': 'name:id', 'import': 'import', 'motor_vehicle': 'motor_vehicle', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'razed:name': 'razed:name', 'railway': 'railway', 'cycleway': 'cycleway', 'width': 'width', 'layer': 'layer', 'bridge': 'bridge', 'horse': 'horse', 'foot': 'foot', 'area': 'area', 'motorcar:conditional': 'motorcar:conditional', 'moped': 'moped', 'mofa': 'mofa', 'old_name': 'old_name', 'ref': 'ref', 'postal_code': 'postal_code', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'surface': 'surface', 'name:nl': 'name:nl', 'name:en': 'name:en', 'lane_markings': 'lane_markings', 'access': 'access', 'oneway': 'oneway', 'name': 'name', });
lyr_Kelurahan_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_TempatIbadah_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'amenity': '', 'religion': '', 'addr:full': '', 'loc_name': '', 'official_name': '', 'alt_name': '', 'short_name': '', 'place_of_worship': '', 'building': '', 'access': '', 'website': '', 'name:id': '', 'barrier': '', 'subdenomination': '', 'designation': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'name': '', 'denomination': '', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bicycle_road': '', 'junction': '', 'service': '', 'bicycle': '', 'maxweight:signed': '', 'maxweight': '', 'maxheight:signed': '', 'except': '', 'addr:postcode': '', 'comment': '', 'bus': '', 'parking:lane:right': '', 'maxspeed:advisory': '', 'incline': '', 'FID': '', 'oneway:4wd': '', 'paving_stones:shape': '', 'destination:symbol': '', 'construction': '', 'junction:ref': '', 'structure': '', 'operator': '', 'minspeed': '', 'int_ref': '', 'hgv': '', 'toll': '', 'sidewalk:left:surface': '', 'tunnel': '', 'tracktype': '', 'wheelchair': '', 'locked': '', 'cycleway:both': '', 'covered': '', 'est_width': '', 'oneway:motor_cycle': '', 'oneway:bicycle': '', 'description': '', 'motorroad': '', 'source:width': '', 'vehicle': '', 'maxheight': '', 'addr:city': '', 'oneway:moped': '', 'ford': '', 'motorcycle:conditional': '', 'restriction': '', 'bridge:name': '', 'access_control': '', 'destination:ref': '', 'destination': '', 'condition': '', 'name:abbr': '', 'name:short_name': '', 'access:conditional': '', 'sidewalk': '', 'short_name': '', 'car': '', 'noname': '', 'vehicles': '', 'smoothness': '', 'lit': '', 'name:zh': '', 'oneway:conditional': '', 'oneway:motorcar': '', 'old_ref': '', 'alt_name': '', 'shoulder': '', 'name:id': '', 'import': '', 'motor_vehicle': '', 'motorcycle': '', 'motorcar': '', 'razed:name': '', 'railway': '', 'cycleway': '', 'width': '', 'layer': '', 'bridge': '', 'horse': '', 'foot': '', 'area': '', 'motorcar:conditional': '', 'moped': '', 'mofa': '', 'old_name': '', 'ref': '', 'postal_code': '', 'maxspeed': '', 'lanes': '', 'surface': '', 'name:nl': '', 'name:en': '', 'lane_markings': '', 'access': '', 'oneway': '', 'name': '', });
lyr_Kelurahan_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_TempatIbadah_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'amenity': 'no label', 'religion': 'no label', 'addr:full': 'no label', 'loc_name': 'no label', 'official_name': 'no label', 'alt_name': 'no label', 'short_name': 'no label', 'place_of_worship': 'no label', 'building': 'no label', 'access': 'no label', 'website': 'no label', 'name:id': 'no label', 'barrier': 'no label', 'subdenomination': 'no label', 'designation': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'name': 'no label', 'denomination': 'no label', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bicycle_road': 'no label', 'junction': 'no label', 'service': 'no label', 'bicycle': 'no label', 'maxweight:signed': 'no label', 'maxweight': 'no label', 'maxheight:signed': 'no label', 'except': 'no label', 'addr:postcode': 'no label', 'comment': 'no label', 'bus': 'no label', 'parking:lane:right': 'no label', 'maxspeed:advisory': 'no label', 'incline': 'no label', 'FID': 'no label', 'oneway:4wd': 'no label', 'paving_stones:shape': 'no label', 'destination:symbol': 'no label', 'construction': 'no label', 'junction:ref': 'no label', 'structure': 'no label', 'operator': 'no label', 'minspeed': 'no label', 'int_ref': 'no label', 'hgv': 'no label', 'toll': 'no label', 'sidewalk:left:surface': 'no label', 'tunnel': 'no label', 'tracktype': 'no label', 'wheelchair': 'no label', 'locked': 'no label', 'cycleway:both': 'no label', 'covered': 'no label', 'est_width': 'no label', 'oneway:motor_cycle': 'no label', 'oneway:bicycle': 'no label', 'description': 'no label', 'motorroad': 'no label', 'source:width': 'no label', 'vehicle': 'no label', 'maxheight': 'no label', 'addr:city': 'no label', 'oneway:moped': 'no label', 'ford': 'no label', 'motorcycle:conditional': 'no label', 'restriction': 'no label', 'bridge:name': 'no label', 'access_control': 'no label', 'destination:ref': 'no label', 'destination': 'no label', 'condition': 'no label', 'name:abbr': 'no label', 'name:short_name': 'no label', 'access:conditional': 'no label', 'sidewalk': 'no label', 'short_name': 'no label', 'car': 'no label', 'noname': 'no label', 'vehicles': 'no label', 'smoothness': 'no label', 'lit': 'no label', 'name:zh': 'no label', 'oneway:conditional': 'no label', 'oneway:motorcar': 'no label', 'old_ref': 'no label', 'alt_name': 'no label', 'shoulder': 'no label', 'name:id': 'no label', 'import': 'no label', 'motor_vehicle': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'razed:name': 'no label', 'railway': 'no label', 'cycleway': 'no label', 'width': 'no label', 'layer': 'no label', 'bridge': 'no label', 'horse': 'no label', 'foot': 'no label', 'area': 'no label', 'motorcar:conditional': 'no label', 'moped': 'no label', 'mofa': 'no label', 'old_name': 'no label', 'ref': 'no label', 'postal_code': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'surface': 'no label', 'name:nl': 'no label', 'name:en': 'no label', 'lane_markings': 'no label', 'access': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_highway_motorway_highway_motorway_link_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});