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

<h1>Auto</h1>
<p>Upper Score:</p>
<input type=number bind:value={$data.autoUpperScore} on:input={updateMax} min=0 />
<p>Lower Score:</p>
<input type=number bind:value={$data.autoLowerScore} on:input={updateMax} min=0 />
<p>Moved?:</p>
<input type=checkbox bind:checked={$data.moved} />
<p>Auto Shoot Position:</p>
<ImageMap width={600} height={338} bind:max={totalShots} bind:value={$data.autoShootPos} image={'./field.png'}></ImageMap>
<br>
<button on:click={prev}> prev </button>
<button on:click={next}> next </button>