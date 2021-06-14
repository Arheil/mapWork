let map2 = new ol.Map({
	target: 'map',
	layers: [
	  new ol.layer.Tile({
		source: new ol.source.OSM()
	  })
	],
	view: new ol.View({
	  center: [51977096992930860, 7514699.37875006],
	  zoom: 11
	})
  });