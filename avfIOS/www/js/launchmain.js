// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);
console.log("a");
// onSuccess Geolocation
//
function onSuccess(position) {
	console.log("pos");
	var element = document.getElementById('geoinputText');
	var elementObj = new Object ();
	elementObj.lat = position.coords.latitude;
	elementObj.lon = position.coords.longitude;
	element.innerHTML =
	'Latitude: '           + position.coords.latitude              + '<br />' +
	'Longitude: '          + position.coords.longitude             + '<br />' +
	'Altitude: '           + position.coords.altitude              + '<br />' +
	'Accuracy: '           + position.coords.accuracy              + '<br />' +
	'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
	'Heading: '            + position.coords.heading               + '<br />' +
	'Speed: '              + position.coords.speed                 + '<br />' +
	'Timestamp: '          +                                   position.timestamp          + '<br />';
	/*var latlon = new google.maps.LatLng(lat, lon);
    var mapholder=document.getElementById('geoinputMap');
    mapholder.style.height='250px';
    mapholder.style.width='500px';
	console.log(elementObj);*/
	function initialize() {
		console.log("opt");
        var mapOptions = {
		center: new google.maps.LatLng(-34.397, 150.644),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
									  mapOptions);
	}
}

// onError Callback receives a PositionError object
//
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
	console.log("d");
}
// Cordova is ready
//
function onDeviceReady() {
	console.log("ready");
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

