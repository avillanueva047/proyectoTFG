<script lang="ts" src="./script.ts">
	import { onMount } from 'svelte';

	let resStatus: Response;
    let tdAlarm: any;
    let statusValue = false;
    let tdInterface: any;

	onMount(async() =>{
        // Alarm Status
		resStatus = await fetch('http://localhost:9000/virtual/alarm_controller/alarm_controller');
		tdAlarm = await resStatus.json();
        tdInterface= tdAlarm.properties.interface;
        setInterval(
			() => {
				loop()
			}, 500
		)
	});

	const loop = async () => {
        let dataAlarm= await fetch(tdAlarm.properties.status.forms[0].href);
        let jsonResponse= await dataAlarm.json();
        statusValue = jsonResponse.activated;
	}

    export async function activateAlarm(){
        if (!statusValue){
            const res = await fetch(tdAlarm.actions.activate.forms[0].href, {
                method: 'POST'
            })
        }
        else{
            const res = await fetch(tdAlarm.actions.deactivate.forms[0].href, {
                method: 'POST'
            })
        }
    }
</script>

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1200 1200" style="enable-background:new 0 0 1200 1200;" xml:space="preserve">
    <path id="Alarm" class={statusValue ? "st0" : "alarmOff"} on:click={() => activateAlarm()} role=presentation d="M895.71,643.66c-1.75-13.95-5.5-34.09-14.41-56.3c-20.39-50.85-53.91-77.93-72.92-92.88
        c-72.1-56.72-153.56-58.63-195.15-59.31c-41.48-0.67-132.96-2.16-203.48,60.43c-14.26,12.66-43.72,39.43-63.2,87.29
        c-9.34,22.95-13.51,43.71-15.56,58.19c-11.67,146.97-23.33,293.95-35,440.92c210.33,0,420.67,0,631,0
        C916.57,935.89,906.14,789.77,895.71,643.66z"/>
    <path id="Glow_4_" class={statusValue ? "st0" : "off"} d="M648,92l-71.73,0c5.91,84,11.82,168,17.73,252c12,0,24,0,36,0C636,260,642,176,648,92z"/>
    <path id="Glow_3_" class={statusValue ? "st0" : "off"} d="M358.4,139.95l-62.12,35.86c47.12,69.79,94.23,139.58,141.35,209.38c10.39-6,20.78-12,31.18-18
        C432,291.44,395.2,215.7,358.4,139.95z"/>
    <path id="Glow_2_" class={statusValue ? "st0" : "off"} d="M118.11,333.65l-35.86,62.12c75.7,36.88,151.4,73.77,227.1,110.65c6-10.39,12-20.78,18-31.18
        C257.61,428.04,187.86,380.84,118.11,333.65z"/>
    <path id="Glow_1_" class={statusValue ? "st0" : "off"} d="M940.58,175.72l-62.12-35.86c-36.88,75.7-73.77,151.4-110.65,227.1c10.39,6,20.78,12,31.18,18
        C846.19,315.22,893.39,245.47,940.58,175.72z"/>
    <path id="Glow" class={statusValue ? "st0" : "off"} d="M1140.49,396.26l-35.86-62.12c-69.79,47.12-139.58,94.23-209.38,141.35c6,10.39,12,20.78,18,31.18
        C989,469.87,1064.74,433.06,1140.49,396.26z"/>
    <g id="Base">
        <path class="st1" d="M1008,1151H217c10.82-24.33,21.64-48.67,32.47-73c242.58-0.33,485.17-0.67,727.75-1
            C987.48,1101.67,997.74,1126.33,1008,1151z"/>
    </g>
</svg>

<style>
    .st0{
    fill:red;
    animation: alarmActivated 0.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    }

    .st1{
        fill: #666666;
    }

    .off{
        fill: none;
    }

    .alarmOff{
        fill: tomato;
    }

    @keyframes alarmActivated {
        from { fill:red; }
        to { fill:tomato; }
    }
</style>