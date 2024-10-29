var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
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
    <img src="styles/legend/TempatIbadah_2_0.png" /> hindu<br />\
    <img src="styles/legend/TempatIbadah_2_1.png" /> kristen<br />\
    <img src="styles/legend/TempatIbadah_2_2.png" /> muslim<br />'
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
lyr_TempatIbadah_2.set('fieldAliases', {'religi': 'religi', 'tempat': 'tempat', 'alamat': 'alamat', 'kode_pos': 'kode_pos', 'kelurahan': 'kelurahan', 'nama': 'nama', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bicycle_ro': 'bicycle_ro', 'junction': 'junction', 'service': 'service', 'bicycle': 'bicycle', 'maxweight_': 'maxweight_', 'maxweight': 'maxweight', 'maxheight_': 'maxheight_', 'except': 'except', 'addr_postc': 'addr_postc', 'comment': 'comment', 'bus': 'bus', 'parking_la': 'parking_la', 'maxspeed_a': 'maxspeed_a', 'incline': 'incline', 'FID': 'FID', 'oneway_4wd': 'oneway_4wd', 'paving_sto': 'paving_sto', 'destinatio': 'destinatio', 'constructi': 'constructi', 'junction_r': 'junction_r', 'structure': 'structure', 'operator': 'operator', 'minspeed': 'minspeed', 'int_ref': 'int_ref', 'hgv': 'hgv', 'toll': 'toll', 'sidewalk_l': 'sidewalk_l', 'tunnel': 'tunnel', 'tracktype': 'tracktype', 'wheelchair': 'wheelchair', 'locked': 'locked', 'cycleway_b': 'cycleway_b', 'covered': 'covered', 'est_width': 'est_width', 'oneway_mot': 'oneway_mot', 'oneway_bic': 'oneway_bic', 'descriptio': 'descriptio', 'motorroad': 'motorroad', 'source_wid': 'source_wid', 'vehicle': 'vehicle', 'maxheight': 'maxheight', 'addr_city': 'addr_city', 'oneway_mop': 'oneway_mop', 'ford': 'ford', 'motorcycle': 'motorcycle', 'restrictio': 'restrictio', 'bridge_nam': 'bridge_nam', 'access_con': 'access_con', 'destinat_1': 'destinat_1', 'destinat_2': 'destinat_2', 'condition': 'condition', 'name_abbr': 'name_abbr', 'name_short': 'name_short', 'access_c_1': 'access_c_1', 'sidewalk': 'sidewalk', 'short_name': 'short_name', 'car': 'car', 'noname': 'noname', 'vehicles': 'vehicles', 'smoothness': 'smoothness', 'lit': 'lit', 'name_zh': 'name_zh', 'oneway_con': 'oneway_con', 'oneway_m_1': 'oneway_m_1', 'old_ref': 'old_ref', 'alt_name': 'alt_name', 'shoulder': 'shoulder', 'name_id': 'name_id', 'import': 'import', 'motor_vehi': 'motor_vehi', 'motorcyc_1': 'motorcyc_1', 'motorcar': 'motorcar', 'razed_name': 'razed_name', 'railway': 'railway', 'cycleway': 'cycleway', 'width': 'width', 'layer': 'layer', 'bridge': 'bridge', 'horse': 'horse', 'foot': 'foot', 'area': 'area', 'motorcar_c': 'motorcar_c', 'moped': 'moped', 'mofa': 'mofa', 'old_name': 'old_name', 'ref': 'ref', 'postal_cod': 'postal_cod', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'surface': 'surface', 'name_nl': 'name_nl', 'name_en': 'name_en', 'lane_marki': 'lane_marki', 'access': 'access', 'oneway': 'oneway', 'name': 'name', });
lyr_Kelurahan_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_TempatIbadah_2.set('fieldImages', {'religi': '', 'tempat': '', 'alamat': '', 'kode_pos': '', 'kelurahan': '', 'nama': '', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bicycle_ro': '', 'junction': '', 'service': '', 'bicycle': '', 'maxweight_': '', 'maxweight': '', 'maxheight_': '', 'except': '', 'addr_postc': '', 'comment': '', 'bus': '', 'parking_la': '', 'maxspeed_a': '', 'incline': '', 'FID': '', 'oneway_4wd': '', 'paving_sto': '', 'destinatio': '', 'constructi': '', 'junction_r': '', 'structure': '', 'operator': '', 'minspeed': '', 'int_ref': '', 'hgv': '', 'toll': '', 'sidewalk_l': '', 'tunnel': '', 'tracktype': '', 'wheelchair': '', 'locked': '', 'cycleway_b': '', 'covered': '', 'est_width': '', 'oneway_mot': '', 'oneway_bic': '', 'descriptio': '', 'motorroad': '', 'source_wid': '', 'vehicle': '', 'maxheight': '', 'addr_city': '', 'oneway_mop': '', 'ford': '', 'motorcycle': '', 'restrictio': '', 'bridge_nam': '', 'access_con': '', 'destinat_1': '', 'destinat_2': '', 'condition': '', 'name_abbr': '', 'name_short': '', 'access_c_1': '', 'sidewalk': '', 'short_name': '', 'car': '', 'noname': '', 'vehicles': '', 'smoothness': '', 'lit': '', 'name_zh': '', 'oneway_con': '', 'oneway_m_1': '', 'old_ref': '', 'alt_name': '', 'shoulder': '', 'name_id': '', 'import': '', 'motor_vehi': '', 'motorcyc_1': '', 'motorcar': '', 'razed_name': '', 'railway': '', 'cycleway': '', 'width': '', 'layer': '', 'bridge': '', 'horse': '', 'foot': '', 'area': '', 'motorcar_c': '', 'moped': '', 'mofa': '', 'old_name': '', 'ref': '', 'postal_cod': '', 'maxspeed': '', 'lanes': '', 'surface': '', 'name_nl': '', 'name_en': '', 'lane_marki': '', 'access': '', 'oneway': '', 'name': '', });
lyr_Kelurahan_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_TempatIbadah_2.set('fieldLabels', {'religi': 'no label', 'tempat': 'no label', 'alamat': 'no label', 'kode_pos': 'no label', 'kelurahan': 'no label', 'nama': 'no label', });
lyr_highway_motorway_highway_motorway_link_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bicycle_ro': 'no label', 'junction': 'no label', 'service': 'no label', 'bicycle': 'no label', 'maxweight_': 'no label', 'maxweight': 'no label', 'maxheight_': 'no label', 'except': 'no label', 'addr_postc': 'no label', 'comment': 'no label', 'bus': 'no label', 'parking_la': 'no label', 'maxspeed_a': 'no label', 'incline': 'no label', 'FID': 'no label', 'oneway_4wd': 'no label', 'paving_sto': 'no label', 'destinatio': 'no label', 'constructi': 'no label', 'junction_r': 'no label', 'structure': 'no label', 'operator': 'no label', 'minspeed': 'no label', 'int_ref': 'no label', 'hgv': 'no label', 'toll': 'no label', 'sidewalk_l': 'no label', 'tunnel': 'no label', 'tracktype': 'no label', 'wheelchair': 'no label', 'locked': 'no label', 'cycleway_b': 'no label', 'covered': 'no label', 'est_width': 'no label', 'oneway_mot': 'no label', 'oneway_bic': 'no label', 'descriptio': 'no label', 'motorroad': 'no label', 'source_wid': 'no label', 'vehicle': 'no label', 'maxheight': 'no label', 'addr_city': 'no label', 'oneway_mop': 'no label', 'ford': 'no label', 'motorcycle': 'no label', 'restrictio': 'no label', 'bridge_nam': 'no label', 'access_con': 'no label', 'destinat_1': 'no label', 'destinat_2': 'no label', 'condition': 'no label', 'name_abbr': 'no label', 'name_short': 'no label', 'access_c_1': 'no label', 'sidewalk': 'no label', 'short_name': 'no label', 'car': 'no label', 'noname': 'no label', 'vehicles': 'no label', 'smoothness': 'no label', 'lit': 'no label', 'name_zh': 'no label', 'oneway_con': 'no label', 'oneway_m_1': 'no label', 'old_ref': 'no label', 'alt_name': 'no label', 'shoulder': 'no label', 'name_id': 'no label', 'import': 'no label', 'motor_vehi': 'no label', 'motorcyc_1': 'no label', 'motorcar': 'no label', 'razed_name': 'no label', 'railway': 'no label', 'cycleway': 'no label', 'width': 'no label', 'layer': 'no label', 'bridge': 'no label', 'horse': 'no label', 'foot': 'no label', 'area': 'no label', 'motorcar_c': 'no label', 'moped': 'no label', 'mofa': 'no label', 'old_name': 'no label', 'ref': 'no label', 'postal_cod': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'surface': 'no label', 'name_nl': 'no label', 'name_en': 'no label', 'lane_marki': 'no label', 'access': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_highway_motorway_highway_motorway_link_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});