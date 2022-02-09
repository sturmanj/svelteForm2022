<script>
    import { createEventDispatcher } from 'svelte';
    import { data } from './stores'

    const dispatch = createEventDispatcher();
    const rungs = [
        'not attemped',
		'fell',
        'low',
		'mid',
		'high',
		'traversal'
	];
    const defenseMethods = [
        'did not defend',
        "blocked opposing alliance's launch pad",
		"stored opposing alliance's balls in indexer",
		'trapped balls agaist corner/wall',
        "launched opposing alliance's balls away",
		'shoved opposing robots around',
        'messed with opposing robots while they shot'
	]

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

<main style="text-align: center;">
    <h1>Postgame</h1>

    <h2>Climb Rung:</h2>
    {#each rungs as rung}
	<label>
		<input type="radio" bind:group={$data.climbMethod} value={rung}>
		{rung}
	</label>
    {/each}

    <h2>Defended?</h2>
    <label>
        <input type="checkbox" bind:checked={$data.defended} />
        {#if $data.defended}
        Yes, team {$data.teamNum} <strong>WAS</strong> defended by other robots.
        {:else}
        No, team {$data.teamNum} was <strong>NOT</strong> defended by other robots.
        {/if}
    </label>

    <h2>Defense Method:</h2>
    {#each defenseMethods as method}
	<label>
		<input type="checkbox" bind:group={$data.defenseMethod} value={method}>
		{method}
	</label>
    {/each}

    <h2>Other Notes:</h2>
    <textarea bind:value={$data.notes}></textarea>

    <br>
    <button on:click={prev}> prev </button>
    <button on:click={sbmt}> submit </button>
</main>
