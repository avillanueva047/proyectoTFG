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
		if(value < -30){
              document.getElementById("stop1")?.setAttribute("offset", (0)+"%");
              document.getElementById("stop2")?.setAttribute("offset", (0)+"%");
        }else{
            document.getElementById("stop1")?.setAttribute("offset", (value+40)*1.1111+"%");
            document.getElementById("stop2")?.setAttribute("offset", (value+40)*1.1111+"%");
            if(value > 99){
            document.getElementById("top-level")?.setAttribute("fill", "red");
            }
            else{
            document.getElementById("top-level")?.setAttribute("fill", "white");
            }
        }
	}
</script>

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 750 1080" style="enable-background:new 0 0 750 1080;" xml:space="preserve">
	 <defs>
		<linearGradient id="mercurio" x1="0" y1="100%" x2="0" y2="0">
			<stop id="stop1" offset="45%" stop-color="red" style="stop-opacity:1"/>
			<stop id="stop2" offset="45%" stop-color="transparent" style="stop-opacity:0"/>
		</linearGradient>
	</defs>
	<g id="Base">
		<ellipse class="st1" cx="384.8" cy="934.5" rx="80.9" ry="79.5"/>
	</g>
	<g id="Top">
		<ellipse id="top-level" fill="white" cx="384.3" cy="220.8" rx="64.2" ry="37.8"/>
	</g>
	<g id="Level">
		<rect class="st0" x="320.1" y="217.8" width="128.5" height="703.8"/>
	</g>
	<rect x="448.5" y="836.3" width="101.2" height="7.8"/>
	<rect x="448.5" y="759.3" width="101.2" height="7.8"/>
	<rect x="448.5" y="682.1" width="101.2" height="7.8"/>
	<rect x="448.5" y="605" width="101.2" height="7.8"/>
	<rect x="448.5" y="526.3" width="101.2" height="7.8"/>
	<rect x="448.5" y="449.2" width="101.2" height="7.8"/>
	<rect x="448.5" y="373.6" width="101.2" height="7.8"/>
	<rect x="448.5" y="296.4" width="101.2" height="7.8"/>
	<rect x="448.5" y="217.8" width="101.2" height="7.8"/>
	<rect x="448.5" y="256.4" width="50.6" height="7.8"/>
	<rect x="448.5" y="335" width="50.6" height="7.8"/>
	<rect x="448.5" y="410.6" width="50.6" height="7.8"/>
	<rect x="448.5" y="487.7" width="50.6" height="7.8"/>
	<rect x="448.5" y="643.6" width="50.6" height="7.8"/>
	<rect x="448.5" y="564.8" width="50.6" height="7.8"/>
	<rect x="448.5" y="720.7" width="50.6" height="7.8"/>
	<rect x="448.5" y="797.8" width="50.6" height="7.8"/>
	<rect x="218.3" y="827.8" width="101.2" height="8.6"/>
	<rect x="218.3" y="741.8" width="101.2" height="8.6"/>
	<rect x="218.3" y="655.8" width="101.2" height="8.6"/>
	<rect x="218.3" y="569.8" width="101.2" height="8.6"/>
	<rect x="218.3" y="482.1" width="101.2" height="8.5"/>
	<rect x="218.3" y="396.1" width="101.2" height="8.5"/>
	<rect x="218.3" y="311.8" width="101.2" height="8.5"/>
	<rect x="218.3" y="225.8" width="101.2" height="8.5"/>
	<rect x="243.1" y="268.9" width="75.9" height="8.5"/>
	<rect x="243.1" y="353.2" width="75.9" height="8.5"/>
	<rect x="243.1" y="439.1" width="75.9" height="8.5"/>
	<rect x="243.1" y="612.8" width="75.9" height="8.6"/>
	<rect x="243.1" y="525.1" width="75.9" height="8.6"/>
	<rect x="243.1" y="698.8" width="75.9" height="8.6"/>
	<rect x="243.1" y="784.8" width="75.9" height="8.6"/>
	<rect x="268.3" y="245.6" width="50.6" height="8.6"/>
	<rect x="268.3" y="332.1" width="50.6" height="8.5"/>
	<rect x="268.3" y="416.9" width="50.6" height="8.5"/>
	<rect x="268.3" y="589.5" width="50.6" height="8.6"/>
	<rect x="268.3" y="501.8" width="50.6" height="8.5"/>
	<rect x="268.3" y="675.5" width="50.6" height="8.6"/>
	<rect x="268.3" y="761.5" width="50.6" height="8.6"/>
	<rect x="268.3" y="290" width="50.6" height="8.5"/>
	<rect x="268.3" y="375.3" width="50.6" height="8.5"/>
	<rect x="268.3" y="460.1" width="50.6" height="8.5"/>
	<rect x="268.3" y="633.8" width="50.6" height="8.6"/>
	<rect x="268.3" y="546.1" width="50.6" height="8.6"/>
	<rect x="268.3" y="719.8" width="50.6" height="8.6"/>
	<rect x="268.3" y="805.8" width="50.6" height="8.6"/>
	<text transform="matrix(1.0177 0 0 1 661.4737 200.2482)" class="st2 st3">C</text>
	<text transform="matrix(1.0177 0 0 1 57.7369 200.2482)" class="st2 st3">F</text>
	<text transform="matrix(1.0177 0 0 1 34.0738 165.7584)" class="st2 st3">º</text>
	<text transform="matrix(1.0177 0 0 1 646.2989 165.7579)" class="st2 st3">º</text>
	<text transform="matrix(1.0177 0 0 1 557.7833 241.653)" class="st2 st3">50</text>
	<text transform="matrix(1.0177 0 0 1 557.7833 320.464)" class="st2 st3">40</text>
	<text transform="matrix(1.0177 0 0 1 557.7833 400.4308)" class="st2 st3">30</text>
	<text transform="matrix(1.0177 0 0 1 557.7833 477.8761)" class="st2 st3">20</text>
	<text transform="matrix(1.0177 0 0 1 557.7833 554.7448)" class="st2 st3">10</text>
	<text transform="matrix(1.0431 0 0 1 557.7835 631.9902)" class="st2 st3">0</text>
	<text transform="matrix(1.0431 0 0 1 557.7835 701.4775)" class="st2 st3">-10</text>
	<text transform="matrix(1.0431 0 0 1 557.7835 775.6211)" class="st2 st3">-20</text>
	<text transform="matrix(1.0431 0 0 1 557.7835 852.2402)" class="st2 st3	">-30</text>
	<text transform="matrix(1.0177 0 0 1 104.1841 850.3219)" class="st2 st3">-20</text>
	<text transform="matrix(1.0177 0 0 1 168.9473 765.0309)" class="st2 st3">0</text>
	<text transform="matrix(1.0177 0 0 1 128.439 417.6676)" class="st2 st3">80</text>
	<text transform="matrix(1.0177 0 0 1 129.4507 504.5284)" class="st2 st3">60</text>
	<text transform="matrix(1.0177 0 0 1 128.439 593.2272)" class="st2 st3">40</text>
	<text transform="matrix(1.0177 0 0 1 128.439 678.8795)" class="st2 st3">20</text>
	<text transform="matrix(1.0177 0 0 1 94.1299 248.9098)" class="st2 st3">120</text>
	<text transform="matrix(1.0177 0 0 1 94.1299 335.295)" class="st2 st3">100</text>
	<text id="Value" transform="matrix(0.9783 0 0 1 303.8675 159.9553)" class="st2 st3">
		{value}
	</text>
	<text id="Type" transform="matrix(0.9783 0 0 1 407.9185 159.9552)" class="st2 st3">
        {type}
	</text>
	<text transform="matrix(0.9783 0 0 1 393.3316 125.4655)" class="st2 st3">º</text>
</svg>

<style src="./style.css"></style>