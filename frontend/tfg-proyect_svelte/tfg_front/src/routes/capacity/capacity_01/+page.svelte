<script lang="ts" src="./script.ts">
    import { onMount } from 'svelte';

    let title = "CAPACITY";
    let maxCapacity = 0;
    let currCapacity = 0;
    let res: Response;
    let td: any;

    onMount(async() => {
        res = await fetch('http://localhost:9000/virtual/capacity_sensor/capacity_cinema');
        td = await res.json();
        maxCapacity = td.properties.capacity.properties.value.maximum;
        setInterval(
            () => {
                loop();
            }, 5000
        )
    });

    const loop = async () => {
        let currCapacityResponse = await fetch (td.properties.capacity.forms[0].href);
        let currJsonResponse = await currCapacityResponse.json();
        currCapacity = currJsonResponse.value;

        let titleElement = document.getElementById("title");
        let slashElement = document.getElementById("slash");
        let stateElement = document.getElementById("state");
        let currElement = document.getElementById("Current");
        let limitElement = document.getElementById("Limit");

        switch (currCapacity.toString().length){
            case(1):
            currElement?.setAttribute("transform", "matrix(1 0 0 1 320 745)");
            break;
            case(2):
            currElement?.setAttribute("transform", "matrix(1 0 0 1 260 745)");
            break;
            case(3):
            currElement?.setAttribute("transform", "matrix(1 0 0 1 200 745)");
            break;
            case(4):
            currElement?.setAttribute("transform", "matrix(1 0 0 1 120 745)");
            break;
        }
        
        switch(maxCapacity.toString().length){
            case(1):
            limitElement?.setAttribute("transform", "matrix(1 0 0 1 780 745)");
            break;
            case(2):
            limitElement?.setAttribute("transform", "matrix(1 0 0 1 730 745)");
            break;
            case(3):
            limitElement?.setAttribute("transform", "matrix(1 0 0 1 670 745)");
            break;
            case(4):
            limitElement?.setAttribute("transform", "matrix(1 0 0 1 630 745)");
            break;
        }

        //Animation
        if (currCapacity == maxCapacity){
            titleElement?.style.setProperty("fill", "red");
            currElement?.style.setProperty("fill", "red");
            slashElement?.style.setProperty("fill", "red");
            limitElement?.style.setProperty("fill", "red");
            stateElement?.style.setProperty("fill", "red");
        }
    }

</script>

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1200 1200" style="enable-background:new 0 0 1200 1200;" xml:space="preserve">
    <g>
        <path id="state" class="st0" d="M1124.5,983H84.5c-16.57,0-30-13.43-30-30V413c0-16.57,13.43-30,30-30h1040c16.57,0,30,13.43,30,30v540
            C1154.5,969.57,1141.07,983,1124.5,983z"/>
    </g>
    <g id="Info">
        <path class="st1" d="M1074,931H134c-16.57,0-30-13.43-30-30V461c0-16.57,13.43-30,30-30h940c16.57,0,30,13.43,30,30v440
            C1104,917.57,1090.57,931,1074,931z"/>
    </g>
    <text id="slash" transform="matrix(1 0 0 1 575 745)" class="st0 st2 st3">/</text>
    <text id="Current" transform="matrix(1 0 0 1 240 745)" class="st0 st2 st3">{currCapacity}</text>
    <text id="Limit" transform="matrix(1 0 0 1 670 745)" class="st0 st2 st3">{maxCapacity}</text>
    <text id="title" transform="matrix(1 0 0 1 245 340)" class="st0 st2 st5">{title}</text>
</svg>

<style src="./style.css"></style>