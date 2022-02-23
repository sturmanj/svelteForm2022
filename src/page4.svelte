<svelte:head>
	<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
</svelte:head>

<script>
    import { data } from "./stores.js";

    var status = "attempting to submit..."

    const submit = async () => {
        var error = false

        try {
            await fetch("http://10.105.154.118:5000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: $data,
                    scout: $data.scout,
                    teamNumber: $data.teamNum,
                    eventId: $data.eventId,
                })
            })
        }
        catch (err) {
            error = true
        }

        if (error) {
                document.querySelector("#loading").remove()
            genQR()
            status = "Failed to submit. Please contact a scout manager for assistance."
        }
        else {
            status = "Successfully Submitted! Please exit this page."
        }

        while(error) {
            try {
                return await fetch("http://10.105.154.118:5000/submit", {
                    method: "POST",
                    headers: {  "Content-Type": "application/json" },
                    body: JSON.stringify({
                    data: $data,
                    scout: $data.scout,
                    teamNumber: $data.teamNum,
                    eventId: $data.eventId,
                })});
            }
            catch (err) {}
        }
    };

    submit()

    function genQR() {
        var text = JSON.stringify({
        data: $data,
        scout: $data.scout,
        teamNumber: $data.teamNum,
        eventId: $data.eventId,
        })

        var qr = new QRCode("qrcode", {
            text: text,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ff7575",
            correctLevel : QRCode.CorrectLevel.H
		});
    };

</script>


<main>
    <img src="../favicon.png" alt="Loading Animation" id="loading"/>
    <div id="qrcode"></div>
    <h1>{status}</h1>
</main>

<style>
    img {
        width: 100%;
        height: 100%;
        animation: rotate 4s infinite cubic-bezier(.75,0,.25,1);
        padding: 2%;
    }

    h1 {
        text-align: center;
    }

    #qrcode {
        width: 100%;
        height: 100%;
        transform: translate(0%, 5%);
    }

    @keyframes rotate {
        from {
            transform: rotate(170deg);
        }
        to {
            transform: rotate(530deg);
        }
    }
</style>
