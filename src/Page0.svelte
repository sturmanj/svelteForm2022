<script>
    import BetterImageMap from './BetterImageMap.svelte'
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'

    const dispatch = createEventDispatcher();

    function next() {
        dispatch('message', {
            text: 'next'
        });
    }
</script>

<main style="text-align: center;">
    <h1>Prematch</h1>
    <p>Auto Start Position:</p>
    <BetterImageMap scale={0.9} aspectRat={(600/266)} max={1} bind:value={$data.autoStartPos} image={'./field.png'}></BetterImageMap>
    <button on:click={next}> next </button>
</main>

