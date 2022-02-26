<script>
    //Required imports
    import { onMount } from 'svelte'
    import { Canvas, Layer } from "svelte-canvas"

    //Component Parameters
    export let scale = .9 //temp fix
    export let aspectRat = 1
    export let image = ''
    export let value = []
    export let max = 1

    //Declare variables
    let width = (window.innerWidth) * scale
    let height = (width / aspectRat)
    let canvasComponent
    let canvas
    let left = max

    //Set up canvas and click event
    onMount(() => {
        canvas = canvasComponent.getCanvas()
        canvas.addEventListener("mousedown", function(e) {
            handleClick(canvas, e)
        })
    })

    //Load and set image
    let img = new Image()
    let w, h
    img.onload = function() {
        w = width
        h = height
    }
    img.src = image

    //Click event
    function handleClick(canvas, event) {
        if (value.length < max) {
            let rect = canvas.getBoundingClientRect()
            let x = (event.clientX - rect.left)/width;
            let y = (event.clientY - rect.top)/height;
            value.push([x,y])
        }
        canvasComponent.redraw()
    }

    //Undo function
    function undo() {
        if (left >= 0 && value.length > 0) {
            value.pop()
            canvasComponent.redraw()
        }
    }

    //Render canvas with svelte-canvas
    $: render = ({ context }) => {
        context.drawImage(img, 0, 0, w, h)
        while(value.length > max) {
            value.pop()
        }
        for (let i = 0; i < value.length; i++) {
            let x = value[i][0] * width;
            let y = value[i][1] * height;
            context.fillStyle = 'red'
            context.beginPath()
            context.arc(x, y, (height / 50), 0, Math.PI * 2)
            context.fill()
        }
        left = max - value.length
    }
</script>

<main>
    <div style={`width:${width}px;`}>
        <Canvas bind:this={canvasComponent} width={width} height={height}>
            <Layer {render} />
        </Canvas>
    </div>
    <div>
        <button style="display: inline-block;" on:click={undo}>Undo</button>
        <p style="display: inline-block;" >Positions left to plot: {left} </p>
    </div>
</main>

<style>
    div {
		margin: 0 auto;
        /* width: 50%; */
	}
    button {
        width: 50px;
    }
</style>