<script>
    import ImageMap from './ImageMap.svelte'
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'

    const dispatch = createEventDispatcher();
    var totalShots = $data.teleUpperScore + $data.teleLowerScore

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

    function updateMax() {
        totalShots = $data.teleUpperScore + $data.teleLowerScore
    }
</script>

<main>
    <h1>Teleop</h1>

    <h2>Upper Score:</h2>
    <input type=number bind:value={$data.teleUpperScore} on:input={updateMax} min=0 />

    <h2>Lower Score:</h2>
    <input type=number bind:value={$data.teleLowerScore} on:input={updateMax} min=0 />

    <h2>Teleop Shoot Position:</h2>
    <ImageMap width={600} height={338} bind:max={totalShots} bind:value={$data.teleShootPos} image={'./field.png'}></ImageMap>

    <br>
    <button on:click={prev}> prev </button>
    <button on:click={next}> next </button>
</main>