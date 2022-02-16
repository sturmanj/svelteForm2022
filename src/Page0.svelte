<script>
    import ImageMap from './ImageMap.svelte'
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
    <ImageMap width={.8 * window.innerWidth} height={window.innerWidth * 0.35} max={1} bind:value={$data.autoStartPos} image={'./field.png'}></ImageMap>
    <button on:click={next}> next </button>
</main>

