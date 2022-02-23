<script>
	//http://localhost:8080/?scout=2j39cd&eventId=FRC2022&matchNum=7&teamNum=1540
	import { fly } from 'svelte/transition';
	import Page0 from './Page0.svelte';
	import Page1 from './Page1.svelte';
	import Page2 from './Page2.svelte';
	import Page3 from './Page3.svelte';
	import page4 from './Page4.svelte';
	import { data } from './stores'

	var start = 0;
	var fin = 0;
	const pages = [Page0, Page1, Page2, Page3, page4];
	let page = 4;
	const params = new URLSearchParams(location.search);

	$data.scout = params.get('scout')
	$data.eventId = params.get('eventId')
	$data.matchNum = params.get('matchNum')
	$data.teamNum = params.get('teamNum')

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

		}
	}
</script>

<main>
	{#key page}
		<div in:fly={{ y: start, duration: 1000, delay:250 }}
		out:fly={{ y: fin, duration: 1000 }}>
  			<svelte:component this={pages[page]} on:message={handleMessage}/>
		</div>
	{/key}
</main>

<style>
	div {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}
</style>