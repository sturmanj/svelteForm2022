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

<main>
    <h1>Prematch</h1>
    <p>Auto Start Position:</p>
    <ImageMap width={600} height={338} max={1} bind:value={$data.autoStartPos} image={'./field.png'}></ImageMap>
    <button on:click={next}> next </button>
</main>

