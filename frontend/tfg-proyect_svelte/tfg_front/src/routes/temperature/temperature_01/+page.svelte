<script lang="ts" src="./script.ts">
	import { onMount } from 'svelte';

	let res: Response;
	let td: any;
	let value = 0;
	let type = ' ';

	onMount(async() =>{
		res = await fetch('http://localhost:9000/virtual/temperature_sensor/temperature_celsius');
		td = await res.json();
		type = td.properties.temperature.properties.value["@type"];
		setInterval(
			() => {
				loop()
			}, 2000
		)
	});

	const loop = async () => {
		let data = await fetch(td.properties.temperature.forms[0].href);
		let json = await data.json();
		value = Math.round(json.value);
		console.log(value);
		document.getElementById("stop3")?.setAttribute("offset", (Math.round(value + 30 * 1.11))+"%");
		document.getElementById("stop4")?.setAttribute("offset", (Math.round(value + 30 * 1.11))+"%");
	}
</script>

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
	 <defs>
		<linearGradient id="mercurio" x1="0" y1="0" x2="100%" y2="0">
			<stop id="stop1" offset="0%" stop-color="blue" />
			<stop id="stop2" offset="70%" stop-color="red" style="stop-opacity:1" />
		</linearGradient>
		<linearGradient id="off" x1="0" y1="0" x2="100%" y2="0">
			<stop id="stop3" offset="0%" stop-color="white" style="stop-opacity:0"/>
			<stop id="stop4" offset="0%" stop-color="white" style="stop-opacity:1"/>
		</linearGradient>
	</defs>
	<g id="Color">
		<path class="st0" d="M960.5,988.5H62C62,495.6,467.6,90,960.5,90S1859,495.6,1859,988.5H960.5z"/>
	</g>
	<g id="Off">
		<path class="st1" d="M959.6,988.5H61.1C61.1,495.6,466.7,90,959.6,90s898.5,405.6,898.5,898.5H959.6z"/>
	</g>
	<g>
		<path class="st2" d="M960.5,989h-700c0-384,316-700,700-700s700,316,700,700H960.5z"/>
	</g>
	<g id="text_container">
		<text id="Value" transform="matrix(1.0653 0 0 1 388.6919 931.001)" class="st3 st4">
			{value}
		</text>
	</g>
	<g>
		<path d="M960.5,91c60.5,0,121,6.2,179.9,18.4c57.4,11.9,113.9,29.6,168,52.6c53.1,22.6,104.4,50.6,152.4,83.2
			c47.6,32.2,92.3,69.2,133,110c40.7,40.7,77.7,85.5,110,133c32.6,48,60.5,99.3,83.2,152.4c23.1,54.1,40.8,110.6,52.6,168
			c12.1,58.6,18.3,118.8,18.4,178.9H960.5H63c0.1-60.1,6.3-120.3,18.4-178.9c11.9-57.4,29.6-113.9,52.6-168
			c22.6-53.1,50.6-104.4,83.2-152.4c32.2-47.6,69.2-92.3,110-133s85.5-77.7,133-110c48-32.6,99.3-60.5,152.4-83.2
			c54.1-23.1,110.6-40.8,168-52.6C839.5,97.2,900,91,960.5,91 M960.5,90C467.6,90,62,495.6,62,988.5h898.5H1859
			C1859,495.6,1453.4,90,960.5,90L960.5,90z"/>
	</g>
	<g>
		<path d="M960.1,290.5c93.8,0,185,18.6,271,55.3c41.4,17.7,81.3,39.4,118.7,64.8c37.1,25.1,71.9,53.9,103.7,85.7
			c31.7,31.7,60.6,66.6,85.7,103.7c25.4,37.4,47.1,77.4,64.8,118.7c36.6,85.8,55.2,176.6,55.3,269.9H960.1H260.9
			c0.1-93.3,18.7-184.2,55.3-269.9c17.7-41.4,39.4-81.3,64.8-118.7c25.1-37.1,53.9-71.9,85.7-103.7c31.7-31.7,66.6-60.6,103.7-85.7
			c37.4-25.4,77.4-47.1,118.7-64.8C775.2,309.2,866.4,290.5,960.1,290.5 M960.1,289.3c-384.2,0-700.4,316.2-700.4,700.4h700.4h700.4
			C1660.5,605.5,1344.3,289.3,960.1,289.3L960.1,289.3z"/>
	</g>
	<text id="Type" transform="matrix(1 0 0 1 1116.8193 940.6804)" class="st3 st4">
		{type}
	</text>
	<text transform="matrix(1 0 0 1 1027.1699 776.2529)" class="st3 st4">
		º
	</text>
	<rect x="260.9" y="985" class="st2" width="1398.4" height="44.3"/>
</svg>

<style src="./style.css"></style>