<script lang="ts" src="./script.ts">
	import { onMount } from 'svelte';

	let resCelsius: Response;
    let resFarenheit: Response;
	let tdCelsius: any;
    let tdFarenheit: any;
    let celsiusValue = 0;
    let fahrenheitValue = 0;

	onMount(async() =>{
        // Celsius
		resCelsius = await fetch('http://localhost:9000/virtual/temperature_sensor/temperature_celsius');
		tdCelsius = await resCelsius.json();
        // Farenheit
        resFarenheit = await fetch('http://localhost:9000/virtual/temperature_sensor/temperature_farenheit');
		tdFarenheit = await resFarenheit.json();
		setInterval(
			() => {
				loop()
			}, 2000
		)
	});

	const loop = async () => {
        let progressCelsius = document.getElementById("st0_fill");
        let progressFahrenheit = document.getElementById("st1_fill");

		let dataCelsius = await fetch(tdCelsius.properties.temperature.forms[0].href);
		let jsonCelsius = await dataCelsius.json();
		celsiusValue = Math.round(jsonCelsius.value);
		let dataFarenheit = await fetch(tdFarenheit.properties.temperature.forms[0].href);
		let jsonFarenheit = await dataFarenheit.json();
		fahrenheitValue = Math.round(jsonFarenheit.value);

        //Animation Celsius
        var initialStrokeCelsius = (celsiusValue + 30) * 24.44;
        var lastStrokeCelsius = 2200 - initialStrokeCelsius;
        progressCelsius?.style.setProperty('--initialStroke', `${initialStrokeCelsius} ${lastStrokeCelsius}`);

        // Animation Fahrenheit
		var initialStrokeFahrenheit = (fahrenheitValue + 22) * 13.58;
        var lastStrokeFahrenheit = 2200 - initialStrokeFahrenheit;
        progressFahrenheit?.style.setProperty('--initialStroke', `${initialStrokeFahrenheit} ${lastStrokeFahrenheit}`);
	}
</script>

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
	<defs>
		<linearGradient id="level_celsius" x1="0" y1="0" x2="0" y2="80%">
			<stop id="stop1" offset="0%" stop-color="red" />
			<stop id="stop2" offset="100%" stop-color="blue"/>
		</linearGradient>
		<linearGradient id="level_fahrenheit" x1="0" y1="0" x2="0" y2="75%">
			<stop id="stop1" offset="30%" stop-color="red" />
			<stop id="stop2" offset="100%" stop-color="blue"/>
		</linearGradient>
	</defs>
	<g id="celsius_path">
		<path class="st0_path" d="M491,889.5c-93.35,0-181.12-36.35-247.13-102.37S141.5,633.35,141.5,540c0-93.35,36.35-181.12,102.37-247.13
			S397.65,190.5,491,190.5s181.12,36.35,247.13,102.37S840.5,446.65,840.5,540c0,93.35-36.35,181.12-102.37,247.13
			S584.35,889.5,491,889.5z"/>
	</g>
	<g id="celsius_fill">
		<path id="st0_fill" class="st0_fill" d="M491,889.5c-93.35,0-181.12-36.35-247.13-102.37S141.5,633.35,141.5,540c0-93.35,36.35-181.12,102.37-247.13
			S397.65,190.5,491,190.5s181.12,36.35,247.13,102.37S840.5,446.65,840.5,540c0,93.35-36.35,181.12-102.37,247.13
			S584.35,889.5,491,889.5z"/>
	</g>
	<g id="fahrenheit_path">
		<path class="st1_path" d="M1422,889.5c-93.35,0-181.12-36.35-247.13-102.37S1072.5,633.35,1072.5,540
			c0-93.35,36.35-181.12,102.37-247.13S1328.65,190.5,1422,190.5s181.12,36.35,247.13,102.37
			c66.01,66.01,102.37,153.78,102.37,247.13c0,93.35-36.35,181.12-102.37,247.13C1603.12,853.15,1515.35,889.5,1422,889.5z"/>
	</g>
	<g id="fahrenheit_fill">
		<path id="st1_fill" class="st1_fill" d="M1422,889.5c-93.35,0-181.12-36.35-247.13-102.37C1108.85,721.12,1072.5,633.35,1072.5,540
			c0-93.35,36.35-181.12,102.37-247.13c66.01-66.01,153.78-102.37,247.13-102.37c93.35,0,181.12,36.35,247.13,102.37
			S1771.5,446.64,1771.5,540c0,93.35-36.35,181.12-102.37,247.13S1515.35,889.5,1422,889.5z"/>
	</g>
	<text id="celsiusValue" transform="matrix(1 0 0 1 289.01 589.0282)" class="st2 st3">
		{celsiusValue}
	</text>
	<text transform="matrix(1 0 0 1 533.8977 589.0272)" class="st2 st3">ºC</text>
	<text id="fahrenheitValue" transform="matrix(1 0 0 1 1203.5515 589.027)" class="st2 st3">
		{fahrenheitValue}
	</text>
	<text transform="matrix(1 0 0 1 1466.4392 589.026)" class="st2 st3">ºF</text>
</svg>

<style src="./style.css"></style>