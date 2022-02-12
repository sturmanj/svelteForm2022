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
</script>

<main style="text-align: center;">
    <h1>Teleop</h1>

    <h2>Upper Score:</h2>
    <div style="display: inline;">
    <button on:click={decUpp}>-1</button>
    <input type=number bind:value={$data.teleUpperScore} on:input={updateMax} min=0 />
    <button on:click={incUpp}>+1</button>
    </div>

    <h2>Lower Score:</h2>
    <div style="display: inline;">
        <button on:click={decLow}>-1</button>
        <input type=number bind:value={$data.teleLowerScore} on:input={updateMax} min=0 />
        <button on:click={incLow}>+1</button>
        </div>
    <h2>Teleop Shoot Position:</h2>
    <ImageMap width={600} height={266} bind:max={totalShots} bind:value={$data.teleShootPos} image={'./field.png'}></ImageMap>

    <br>
    <button on:click={prev}> prev </button>
    <button on:click={next}> next </button>
</main>