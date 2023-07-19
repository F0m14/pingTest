const pingValue = document.getElementById("ping-value");

function updatePing() {
    const startTime = Date.now();
    fetch("https://f0m14.github.io/pingTest/")
        .then((response) => {
            const endTime = Date.now();
            const ping = endTime - startTime;
            pingValue.innerText = ping;
        })
        .catch((error) => {
            pingValue.innerText = "Error";
        });
}

setInterval(updatePing, 1000);