
function selectCurrency(currency) {
    alert(`Currency selected: ${currency.toUpperCase()}`);
}

function buyToken() {
    const amount = document.getElementById('pay').value;
    if (amount <= 0) {
        alert('Enter a valid amount');
        return;
    }
    alert(`You are buying ${amount} BHIKX tokens!`);
}

// Countdown Timer
const countdown = new Date("2025-12-31T23:59:59").getTime();
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdown - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
