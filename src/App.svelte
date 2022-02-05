<script>
	//http://localhost:8080/?scout=2j39cd&eventId=FRC2022&matchNum=7&teamNum=1540
	import Page0 from './Page0.svelte';
	import Page1 from './Page1.svelte';
	import Page2 from './Page2.svelte';
	import Page3 from './Page3.svelte';
	import { data } from './stores'
   
	var autoVal = location.search
		.slice(1)
		.split('&')
		.map(p => p.split('='))
		.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
	$data.scout = autoVal.scout
	$data.eventId = autoVal.eventId
	$data.matchNum = autoVal.matchNum
	$data.teamNum = autoVal.teamNum 
	
	const pages = [Page0, Page1, Page2, Page3];
   
	let page = 0;
   
	  function handleMessage(event) {
		if (event.detail.text == 'next') {
		  page += 1;
		}
		if (event.detail.text == 'prev') {
		  page -= 1;
		}
		if (event.detail.text == 'sbmt') {
			console.log({$data, scout: $data.scout,teamNumber: $data.teamNum, eventId: $data.eventId})
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
		}
	  }
  </script>
   
  <svelte:component this={pages[page]} on:message={handleMessage}/>
  
  