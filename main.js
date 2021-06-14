webix.ui({

	container: "sidebar",
	height: 720,

	rows: [{
	cols: [
		{
			template: `<div class="menu">
			<h2>Города</h2>
			  <label for="Moscow">
				<input class="input" type="checkbox" name="Moscow" id="Moscow">Москва
			  </label>
			  <br>
			  <label for="Tomsk">
				<input class="input" type="checkbox" name="Tomsk" id="Tomsk">Томск
			  </label>
			  <br>
			  <label for="Kazan">
				<input class="input" type="checkbox" name="Kazan" id="Kazan">Казань
			  </label>
		  </div>
		  <a class="link" href=""><h2>Карты</h2></a>`, width: 300 
		}
	]
	}]
});

