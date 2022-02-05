<script>
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'

    const dispatch = createEventDispatcher();

    function prev() {
        dispatch('message', {
            text: 'prev'
        });
    }
    function sbmt() {
        dispatch('message', {
            text: 'sbmt'
        });
    }
</script>

<h1>Postgame</h1>
<p>Climb Rung:</p>
<input bind:value={$data.climbMethod} />
<p>Defended?:</p>
<input type=checkbox bind:checked={$data.defended} />
<p>Cargo Method:</p>
<input bind:value={$data.cargoMethod} />
<p>Defence Method:</p>
<input bind:value={$data.defenceMethod} />
<p>Other Notes:</p>
<input bind:value={$data.notes} />
<br>
<button on:click={prev}> prev </button>
<button on:click={sbmt}> submit </button>

