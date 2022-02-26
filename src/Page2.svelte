<script>
    import BetterImageMap from './BetterImageMap.svelte'
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

    function incUpp() {
        $data.teleUpperScore += 1
    }
    function decUpp() {
        if ($data.teleUpperScore == 0) return
        $data.teleUpperScore -= 1
    }
    function incLow() {
        $data.teleLowerScore += 1
    }
    function decLow() {
        if ($data.teleLowerScore == 0) return
        $data.teleLowerScore -= 1
    }

    $: totalShots = $data.teleUpperScore + $data.teleLowerScore
</script>

<main style="text-align: center;">
    <h1>Teleop</h1>

    <h2>Upper Score:</h2>
    <div style="display: inline;">
    <button class="grow-button" on:click={decUpp}>-1</button>
    <input class="input-box" type=number bind:value={$data.teleUpperScore} min=0 />
    <button class="grow-button" on:click={incUpp}>+1</button>
    </div>

    <h2>Lower Score:</h2>
    <div style="display: inline;">
        <button class="grow-button" on:click={decLow}>-1</button>
        <input class="input-box" type=number bind:value={$data.teleLowerScore} min=0 />
        <button class="grow-button" on:click={incLow}>+1</button>
        </div>
    <h2>Teleop Shoot Position:</h2>
    <BetterImageMap scale={0.9} aspectRat={(600/266)} max={totalShots} bind:value={$data.teleShootPos} image={'./field.png'}></BetterImageMap>
    <br>
    <button on:click={prev}> prev </button>
    <button on:click={next}> next </button>
</main>

<style>
    .grow-button {
        font-size: 4.5em;
    }
    .input-box {
        width: 10%;
    }
</style>