<script lang="ts">
    import { onMount } from 'svelte';

    let res : Response;
    let td : any;
    let state : boolean = false;

    // HTMLElements
    let interruptorElement : HTMLElement;
    let ledOffElement : HTMLElement;
    let ledOnElement : HTMLElement;
    let lightOffElement : HTMLElement;
    let lightOnElement : HTMLElement;


    onMount(async() => {
        res = await fetch('http://localhost:9000/virtual/light_switch/light_switch');
        td = await res.json();
        interruptorElement = document.getElementById("switch")!;
        ledOffElement = document.getElementById("led_off")!;
        ledOnElement = document.getElementById("led_on")!;
        lightOffElement = document.getElementById("light_off")!;
        lightOnElement = document.getElementById("light_on")!;

        setInterval(
            () => {
                loop();
            }, 500
        )
    });

    const loop = async() => {
        state = !state;
        //Animation
        if(state){
          interruptorElement.style.setProperty('transform', 'rotate(180deg)');
          ledOffElement.style.setProperty('stroke', '#FF0000');
          lightOffElement.style.setProperty('fill', 'url(#off)');
          ledOnElement.style.setProperty('fill', '#797979');
          lightOnElement.style.setProperty('fill', 'none');
        }
        else{
          interruptorElement.style.setProperty('transform', 'none');
          ledOffElement.style.setProperty('stroke', '#797979');
          lightOffElement.style.setProperty('fill', 'none');
          ledOnElement.style.setProperty('fill', '#8AE28C');
          lightOnElement.style.setProperty('fill', 'url(#on)');
        }
    }

</script>

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1200 1200" style="enable-background:new 0 0 1200 1200;" xml:space="preserve">
	 <defs>
		<radialGradient id="off" cx="50%" cy="50%" r="50%">
			<stop stop-color="#FFCABF" offset="60%"/>
			<stop stop-color="white" offset="100%"/>
		</radialGradient>
		<radialGradient id="on" cx="50%" cy="50%" r="50%">
			<stop stop-color="#E1FBEE" offset="60%"/>
			<stop stop-color="white" offset="100%"/>
		</radialGradient>
	</defs>
	 <g>
		<path class="st0" d="M928.77,1119H271.23c-20.19,0-36.7-16.09-37.24-36.28c-4.59-170.07-6.75-340.15-6.48-510.22
			c0.24-151.41,2.4-302.81,6.48-454.22C234.53,98.09,251.03,82,271.22,82h657.55c20.17,0,36.69,16.05,37.24,36.21
			c4.24,157.43,6.4,314.85,6.49,472.29c0.09,164.09-2.07,328.19-6.49,492.29C965.47,1102.95,948.94,1119,928.77,1119z"/>
	</g>
	<g>
		<path class="st1" d="M900.04,1093H299.17c-18.45,0-33.53-15.27-34.03-34.42c-4.19-161.38-6.17-322.76-5.93-484.15
			c0.22-143.67,2.19-287.34,5.93-431c0.5-19.16,15.58-34.43,34.03-34.43h600.87c18.43,0,33.53,15.23,34.03,34.36
			c3.87,149.38,5.85,298.76,5.93,448.15c0.08,155.7-1.89,311.41-5.93,467.13C933.57,1077.77,918.47,1093,900.04,1093z"/>
	</g>
	<g>
		<path id="switch" class="st2" d="M892.1,1083l-584.89,0c-17.96,0-32.64-15-33.13-33.81c-3.76-145.86-12.26-247.05-5.77-475.51
			c6.85-240.99-71.51-405.08,2.18-448.18c13.12-7.67,26.86-9.05,36.71-8.95l584.89,0c9.14,0.42,23.52,2.35,37.4,10.95
			c77.6,48.12-7.61,214.27,1.5,462.96c7.96,217.51-2.12,316.53-5.77,458.79C924.74,1068.04,910.04,1083,892.1,1083z"/>
	</g>
	<path class="st2" d="M1054.5,284.5"/>
	<circle id="light_off" class="st3" cx="599.5" cy="369.5" r="230.5"/>
	<circle id="led_off" class="st4" cx="600.5" cy="372.5" r="164.5"/>
	<ellipse id="light_on" class="st5" cx="599.7" cy="879.32" rx="95.3" ry="180.32"/>
	<rect id="led_on" x="589" y="751" class="st6" width="21" height="257"/>
</svg>

<style>
    .st0{
    fill:#F2F2F2;
    }

    .st1{
        fill:#B3B3B3;
    }

    .st2{
        fill:#FFFFFF;
        transform-origin: center center;
        transform: rotate(180deg);
    }

    .st3{
        opacity:0.4;
        fill: url(#off);
    }

    .st4{
        fill:none;
        stroke:#FF0000;
        stroke-width:10;
        stroke-miterlimit:10;
    }

    .st5{
        opacity:0.4;
        fill: none;
    }

    .st6{
        fill:#797979;
    }
</style>