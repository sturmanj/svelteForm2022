<script>
    import ImageMap from './ImageMap.svelte'
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'

    const dispatch = createEventDispatcher();
    var totalShots = $data.autoUpperScore + $data.autoLowerScore

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
        totalShots = $data.autoUpperScore + $data.autoLowerScore
    }
</script>

<main>
    <h1>Auto</h1>

    <h2>Upper Score:</h2>
    <input type=number bind:value={$data.autoUpperScore} on:input={updateMax} min=0 />

    <h2>Lower Score:</h2>
    <input type=number bind:value={$data.autoLowerScore} on:input={updateMax} min=0 />

    <h2>Moved?</h2>
    <label>
        <input type=checkbox bind:checked={$data.moved} />
        {#if $data.moved}
        Yes, team {$data.teamNum} <strong>DID</strong> move.
        {:else}
        No, team {$data.teamNum} did <strong>NOT</strong> move.
        {/if}
    </label>

    <h2>Auto Shoot Position:</h2>
    <ImageMap width={600} height={338} bind:max={totalShots} bind:value={$data.autoShootPos} image={'./field.png'}></ImageMap>

    <br>
    <button on:click={prev}> prev </button>
    <button on:click={next}> next </button>
</main>