var search = document.querySelector('.search input');
var btn = document.querySelector('button');
btn.addEventListener('click', () => {
	fetch('http://api.weatherstack.com/current?access_key=8344ce2e5e07a7caca0f134d704e7ef5&query='+search.value).then((res) => {
		return res.json();
	}).then((data) => {
		var name = document.querySelector('#name');
		name.textContent = data.location.country + ', ' + data.location.region;
		var temp = document.querySelector('#temp');
		temp.textContent = data.current.temperature;
		var desc = document.querySelector('#desc');
		desc.textContent = data.current.weather_descriptions[0];
		var humid = document.querySelector('#humid');
		humid.textContent = data.current.humidity;
		var ws = document.querySelector('#ws');
		ws.textContent = data.current.wind_speed;
		var isd = document.querySelector('#isd');
		if(data.current.is_day === 'yes')
		{
			isd.textContent = 'day';
		}
		else
		{
			isd.textContent = 'night';
		}
		
		var ps = document.querySelector('#ps');
		ps.textContent = data.current.precip;
		var prs = document.querySelector('#prs');
		prs.textContent = data.current.pressure;
	})
})
