const symbols = ['🍒', '🍋', '🍉', '🍊', '🍓', '🍍'];
const multipliers = {
    '🍒': 2,
    '🍋': 3,
    '🍉': 4,
    '🍊': 5,
    '🍓': 6,
    '🍍': 10
};

let totalWinnings = 0;

function spinReels() {
    const reels = [
        document.getElementById('reel1'),
        document.getElementById('reel2'),
        document.getElementById('reel3')
    ];
    const result = document.getElementById('result');
    const coinValue = parseInt(document.getElementById('coinInput').value);

    result.textContent = '';
    result.style.color = '#333';

    const winSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    function spinSingleReel(reel, delay) {
        setTimeout(() => {
            reel.classList.add('spinning');
            let interval = setInterval(() => {
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                reel.textContent = randomSymbol;
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
                reel.textContent = winSymbol;
                reel.classList.remove('spinning');
            }, 3000);
        }, delay);
    }

    spinSingleReel(reels[0], 0);
    spinSingleReel(reels[1], 3500);
    spinSingleReel(reels[2], 7000);

    setTimeout(() => {
        result.textContent = `🎉 You hit ${winSymbol}!`;
        result.style.color = 'green';

        const multiplier = multipliers[winSymbol];
        const winnings = coinValue * multiplier;
        totalWinnings += winnings;

        document.getElementById('winnings').textContent = `Total Winnings: ${totalWinnings}`;
    }, 10500);
}

document.getElementById('spinBtn').addEventListener('click', spinReels);

