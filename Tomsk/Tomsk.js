let map1 = new ol.Map({//Tomsk
	target: 'map',
	layers: [
	  new ol.layer.Tile({
		source: new ol.source.OSM()
	  })
	],
	view: new ol.View({
	  center: [51977096996917850, 7656650.572495011],
	  zoom: 12
	})
  });