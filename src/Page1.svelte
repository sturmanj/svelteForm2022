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
    function incUpp() {
        $data.autoUpperScore += 1
    }
    function decUpp() {
        if ($data.autoUpperScore == 0) return
        $data.autoUpperScore -= 1
    }
    function incLow() {
        $data.autoLowerScore += 1
    }
    function decLow() {
        if ($data.autoLowerScore == 0) return
        $data.autoLowerScore -= 1
    }

    $: totalShots = $data.autoUpperScore + $data.autoLowerScore
</script>

<main style="text-align: center;">
    <h1>Auto</h1>

    <h2>Upper Score:</h2>
    <div style="display: inline;">
    <button class="grow-button" on:click={decUpp}>-1</button>
    <input class="input-box" type=number bind:value={$data.autoUpperScore} min=0 />
    <button class="grow-button" on:click={incUpp}>+1</button>
    </div>

    <h2>Lower Score:</h2>
    <div style="display: inline;">
    <button class="grow-button" on:click={decLow}>-1</button>
    <input class="input-box" type=number bind:value={$data.autoLowerScore} min=0 />
    <button class="grow-button" on:click={incLow}>+1</button>
    </div>

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
    <ImageMap width={.8 * window.innerWidth} height={window.innerWidth * 0.35} bind:max={totalShots} bind:value={$data.autoShootPos} image={'./field.png'}></ImageMap>

    <br>
    <button on:click={prev}> prev </button>
    <button on:click={next}> next </button>
</main>

<style>
    .grow-button {
        font-size: 3em;
    }
    .input-box {
        width: 10%
    }
</style>