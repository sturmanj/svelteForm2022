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
 
<h1>Auto</h1>
<p>Upper Score:</p>
<input type=number bind:value={$data.autoUpperScore} min=0 />
<p>Lower Score:</p>
<input type=number bind:value={$data.autoLowerScore} min=0 />
<p>Moved?:</p>
<input type=checkbox bind:checked={$data.moved} />
<p>Auto Shoot Position:</p>
<input bind:value={$data.autoShootPos} />
<p> </p>
<button on:click={prev}> prev </button>
<button on:click={next}> next </button>