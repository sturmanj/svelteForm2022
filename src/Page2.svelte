<script>
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'
 
    const dispatch = createEventDispatcher();
 
    function next() {
        dispatch('message', {
            text: 'next'
        });
    }
    function prev() {
        dispatch('message', {
            text: 'prev'
        });
    }
</script>
 
<h1>Teleop</h1>
<p>Upper Score:</p>
<input type=number bind:value={$data.teleUpperScore} min=0 />
<p>Lower Score:</p>
<input type=number bind:value={$data.teleLowerScore} min=0 />
<p>Teleop Shoot Position:</p>
<input bind:value={$data.teleShootPos} />
<p> </p>
<button on:click={prev}> prev </button>
<button on:click={next}> next </button>