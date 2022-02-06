<script>
	//http://localhost:8080/?scout=2j39cd&eventId=FRC2022&matchNum=7&teamNum=1540
	import { fly } from 'svelte/transition';
	import Page0 from './Page0.svelte';
	import Page1 from './Page1.svelte';
	import Page2 from './Page2.svelte';
	import Page3 from './Page3.svelte';
	import { data } from './stores'

	var start = 0;
	var fin = 0;
	const pages = [Page0, Page1, Page2, Page3];
	let page = 0;

	var autoVal = location.search
		.slice(1)
		.split('&')
		.map(p => p.split('='))
		.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
	$data.scout = autoVal.scout
	$data.eventId = autoVal.eventId
	$data.matchNum = autoVal.matchNum
	$data.teamNum = autoVal.teamNum

	function handleMessage(event) {
		if (event.detail.text == 'next') {
			start = document.body.offsetHeight;
			fin = -1 * document.body.offsetHeight;
			page += 1;
			window.scrollTo(0,0)
		}
		if (event.detail.text == 'prev') {
			start = -1 * document.body.offsetHeight;
			fin = document.body.offsetHeight;
			page -= 1;
			window.scrollTo(0,0)
		}
		if (event.detail.text == 'sbmt') {
			console.log({data: $data, scout: $data.scout,teamNumber: $data.teamNum, eventId: $data.eventId})
			/*
			fetch("http://localhost:5000/submit", {
	  			method: "POST",
  				headers: {
					'Content-Type': "application/json",
				},
				body: JSON.stringify({data: $data, scout: $data.scout,teamNumber: $data.teamNum, eventId: $data.eventId})
			})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.error(err);
			});
			*/
		}
	}
</script>

<main>
	{#key page}
		<div style="display: inline-block; position: absolute;" in:fly={{ y: start, duration: 1000, delay:100 }}
		out:fly={{ y: fin, duration: 1000 }}>
  			<svelte:component this={pages[page]} on:message={handleMessage}/>
		</div>
	{/key}
</main>
