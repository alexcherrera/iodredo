//Geolocation API:
alert("lib");
var getGeoLocal = function () {
	alert("1");
	var onSuccess = function(position) {
		var myLatitude = position.coords.latitude;
	    //localStorage.setItem("latitude",myLatitude);
		alert("latitude" + myLatitude);
	};

	// onError Callback receives a PositionError object
	function onError(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	};

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
};
	/*var onSuccess = function(position) {
		alert("2");
		var lat      = position.coords.latitude;
		var lon      = position.coords.longitude;
		var alti     = position.coords.altitude;
		var acc      = position.coords.accuracy;
		var altacc   = position.coords.altitudeAccuracy;
		var head     = position.coords.heading;
		var spd      = position.coords.speed;
		var timeStp  = new Date(position.timestamp);

		var latLS = localStorage.setItem("Latitude", lat);
		alert(latLS);
		localStorage.setItem("Longitude", lon);
		alert(localStorage.setItem(onjInArry[0], JSON.stringify(allStats)));
	} */
		//viewLS(onjInArry);
}


