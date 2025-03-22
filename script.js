// Countdown Timer for this weekend
function countdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + (6 - targetDate.getDay()));
    targetDate.setHours(23, 59, 59);

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Presale ended!";
    }
}

setInterval(countdown, 1000);

// Automatic BHIKX Calculation
document.getElementById('usdtInput').addEventListener('input', () => {
    const usdt = parseFloat(document.getElementById('usdtInput').value) || 0;
    const bhikx = usdt / 0.001;  
    document.getElementById('bhikxOutput').value = bhikx.toFixed(0);
});

// Wallet Connect Simulation
function connectWallet() {
    alert("Wallet connection simulated.");
}

function buyWithBNB() {
    alert("Buy with BNB clicked.");
}

function buyWithUSDT() {
    alert("Buy with USDT clicked.");
}
