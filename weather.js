var search = document.querySelector('.search input');
var btn = document.querySelector('button');
btn.addEventListener('click', () => {
	fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+search.value+'.json?access_token=pk.eyJ1IjoiYW5jaGl0YWdhcndhbCIsImEiOiJjazluOTI5NXcwNHFkM2dwY3lzYnBnaXhoIn0.LyMxtcAV03F9eqQCMc4PyQ&unit=1').then((res) => {
		return res.json();
		}).then((data) => {
		const long = data.features[0].center[0];
		const lat = data.features[0].center[1];
		console.log(data.features[0].place_name);
		var name = document.querySelector('#name');
		name.textContent = data.features[0].place_name;
		console.log(long, lat);
		fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=ac7c75b9937a495021393024d0a90c44&unit=metric').then((res) => {
		return res.json();
	}).then((data) => {
		console.log(data.weather[0].description);
		console.log(data.main.temp - 272.15);
		console.log(data.main.humidity);
		console.log(data.main.pressure);
		console.log(data);
	})	
})
	})
