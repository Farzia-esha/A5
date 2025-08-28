
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// heart btn functionality
const heartIcons = document.getElementsByClassName("heart-btn");
for (let card of heartIcons) {
    card.addEventListener("click", function () {
        const heartCount = getElement("heart-count");
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    });
}

// call btn functionality
const callButtons = document.getElementsByClassName("bg-green-500");
for (let call of callButtons) {
    call.addEventListener("click", function () {
        let coin = getElement("coin-count");
        let coinCount = parseInt(coin.innerText);

        if (coinCount < 20) {
            alert("Insufficient coins! you need at least 20 coins to make a call");
            return;
        }
        coinCount -= 20;
        coin.innerText = coinCount;

        const serviceName = call.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = call.parentNode.parentNode.children[1].children[2].innerText;
        alert(`Calling ${serviceName} (${serviceNumber}).....`);

        const historyList = getElement("history-list");
        const historyDiv = document.createElement("li");
        historyDiv.innerHTML = `
            <div class="flex justify-between items-center bg-gray-100 rounded-[15px] mt-3 p-3">
                <div>
                    <h1 class="text-sm font-bold">${serviceName}</h1>
                    <p class="text-gray-500">${serviceNumber}</p>
                </div>
                <p>${new Date().toLocaleTimeString("en-US", { hour12: true, hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dhaka" })}</p>
            </div>
        `;
        historyList.appendChild(historyDiv);
    });
}

// Clear history btn functionality
document.getElementById("clear-history").addEventListener("click", function () {
    const historyList = getElement("history-list");
    historyList.innerHTML = "";
    getElement("heart-count").innerText = 0;
    getElement("coin-count").innerText = 100;
});

// Copy button functionality
const copyButtons = document.getElementsByClassName("border-2");
for (let copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        const serviceNumber = copyButton.parentNode.parentNode.children[1].children[2].innerText;
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied: ${serviceNumber}`);
                const copyCount=getElement("copy-count");
                copyCount.innerText=parseInt(copyCount.innerText)+1;
            })
            .catch(err => {
                alert("Failed to copy: " + err);
            });
    });
}

