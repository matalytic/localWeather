$(document).ready(function(){
	var long = "";
	var lat = "";
	var api = "";
	//Cache geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			long = position.coords.longitude;
			lat = position.coords.latitude;
		//var api = "http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1";
		api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +long+"&APPID=0ac5820a2902185aa65ce403cdf3d30b";

		//Api call, and retrieve data
		$.getJSON(api, function(data){
			var name = data.name;
			var kelvin = data.main.temp;
			var fahr = Math.floor(kelvin * (9/5) - 459.67);
			var celsius = Math.floor(kelvin - 273.15);
			var weather = data.weather[0].main;
		    var cod = data.weather[0].id;

			// name = "Brooklyn";
			// fahr = "57";
			// weather = "Drizzle";


			// create class based on weather code
			var iconCode;
			if (cod <= 232) {
				// thunder icon
				iconCode = "wi-thunderstorm";
			}
			else if (cod <=321) {
				// drizzle icon
				iconCode = "wi-sprinkle" ;
			}
			else if (cod <=531) {
				//rain icon
				iconCode = "wi-rain";
			}
			else if (cod<=622) {
				//snow icon
				iconCode = "wi-snowflake-cold";
			}
			else if (cod <= 781) {
				// atmosphere
				iconCode = "wi-dust";
			}
			else if (cod === 800) {
				// clear
				iconCode ="wi-day-sunny" ;
			}
			else if (cod <=804) {
				// clouds
				iconCode ="wi-cloudy" ;
			}
			else if (cod<=902) {
				// extreme storm
				iconCode ="wi-cloudy-gusts" ;
			}
			else if (cod===903) {
				// cold
				iconCode ="wi-snowflake-cold" ;
			}
			else if (cod===904) {
				//hot
				iconCode = "wi-hot" ;
			}
			else if (cod===905) {
				// windy
				iconCode ="wi-strong-wind" ;
			}
			else if (cod===906) {
				//hail
				iconCode = "wi-hail" ;
			}
			else if (cod <= 959) {
				// breeze
				iconCode ="wi-cloudy-gusts" ;
			}
			else if (cod<=962) {
				//extreme storm
				iconCode ="wi-hurricane" ;
			}

			var current = true;
			$("#name").html(name);
			$("#temp").html(fahr+"<i class='wi wi-fahrenheit'></i>");
			$("#weather").html(weather);
			$("#cod").addClass(iconCode);

			//Toggle Fahrenheit and celsius
			
			$("#temp").on("click", function() {
				console.log("clicked");
				if (current){
					$("#temp").html(celsius+"<i class='wi wi-celsius'></i>");
					current = false;
					console.log(current);
				}
				else {
					$("#temp").html(fahr+"<i class='wi wi-fahrenheit'></i>");
					current = "fahr";                                                                                                                                                                                                                                                                                       
				}
			})

			console.log(name, Math.floor(fahr), weather, cod);
			})
		// var name, fahr, weather, cod;
		// name = "Brooklyn";
		// fahr = 57;
		// weather = "Drizzle";
		// var cod = 200;


		// $("#name").html(name);
		// $("#temp").html(fahr);
		// $("#weather").html(weather);
		






		});
	}
});