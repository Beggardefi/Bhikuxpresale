// Countdown Timer
const countdownDate = new Date("2025-03-30T23:59:59").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Presale Ended!";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);

// USDT to BHIKX Auto Calculation
document.getElementById("usdt").addEventListener("input", function () {
    const usdtAmount = parseFloat(this.value);
    const bhikxAmount = usdtAmount / 0.001;  
    document.getElementById("bhikx").value = bhikxAmount.toFixed(0);
});

// Dummy Buy Functions
function buyWithBNB() {
    alert("BNB Payment Initiated!");
}

function buyWithUSDT() {
    alert("USDT Payment Initiated!");
}
