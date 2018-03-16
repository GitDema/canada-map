/*
*
*	parsing https://www.latlong.net/
*
*/


var cities = [
/*for example*/
"BROCKWAY, NB",
"BRODERICK, SK"
],
citiesL = cities.length,

cityInput = document.getElementById("Fe3643"), // need get from tag (always update)
searchButton = document.querySelector("#Fe3643 + button"), // need get from tag (always update)
tArea = document.getElementById("cities-output"); // need add to HTML code for convenience

var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

function countDown(i) {
	return promise = new Promise( (resolve, reject) => {

  //put value to city input
  cityInput.value = cities[--i] + ', CA';

	//btn click
	simulateClick(searchButton);

	setTimeout( () => {
		var cityLat = document.getElementById("lat");
		var cityLng = document.getElementById("lng");
		//get coordinates (lat+lng) and put coordinates to array
		//citiesCoordinates.unshift(cityLat.value + ' ' + cityLng.value);
		var oldV = tArea.value;
		tArea.value = cities[i] +' = '+cityLat.value + ' ' + cityLng.value + '\n' + oldV;
	}, 1000);


	if (i > 0) {
		setTimeout( () => {
			countDown(i).then(resolve);
		}, 2000);
	} else {
		resolve(console.log('=== END ==='));
	}

});

}

var counter = countDown(citiesL);
counter.then( (msg) => {
	console.log(msg);
});

