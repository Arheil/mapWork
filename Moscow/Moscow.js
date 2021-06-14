let map = new ol.Map({
	target: 'map',
	layers: [
	  new ol.layer.Tile({
		source: new ol.source.OSM()
	  })
	],
	view: new ol.View({
	  center: [51977096991643940, 7498721.968373951],
	  zoom: 10
	})
  });
