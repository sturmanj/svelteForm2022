<script>
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'
 
    const dispatch = createEventDispatcher();
 
    function next() {
        dispatch('message', {
            text: 'next'
        });
    }
</script>
 
<h1>Prematch</h1>
<p>Auto Start Position:</p>
<input bind:value={$data.autoStartPos} />
<p> </p>
<button on:click={next}> next </button>

