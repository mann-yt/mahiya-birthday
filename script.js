document.getElementById("startBtn").addEventListener("click", function () {
    document.body.style.transition = "1s";
    document.body.style.background = "linear-gradient(135deg,#8e44ad,#ff6ec7,#ffd166)";

    document.querySelector(".container").innerHTML = `
        <h1>🎂 Happy Birthday Mahiya ❤️</h1>

        <h2>✨ Your magical surprise is loading... ✨</h2>

        <p>
            Get ready for something made especially for you 💖
        </p>

        <button onclick="nextPage()">
            Continue ➜
        </button>
    `;
});

function nextPage() {

        document.querySelector(".container").innerHTML = `
                <h1>🕯️ Happy Birthday Mahiya ❤️</h1>

                        <h2>Make a Wish</h2>

                                <div style="font-size:120px;margin:20px;">🕯️</div>

                                        <p>Tap the candle to blow it out 🎂</p>

                                                <button onclick="blowCandle()">🕯️ Blow Candle</button>
                                                    `;
                                                    }

                                                    function blowCandle() {

                                                        document.querySelector(".container").innerHTML = `
                                                                <h1>🎉 YAYYYY!! 🎉</h1>

                                                                        <h2>Happy Birthday Mahiya ❤️</h2>

                                                                                <div style="font-size:100px;">🎆🎉❤️</div>

                                                                                        <p>Your celebration has begun...</p>

                                                                                                <button onclick="showLetter()">
                                                                                                            Continue ❤️
                                                                                                                    </button>
                                                                                                                        `;
                                                                                                                        }

                                                                                                                        function showLetter() {

                                                                                                                            document.querySelector(".container").innerHTML = `
                                                                                                                                    <h1>💌 A Letter For You</h1>

                                                                                                                                            <p style="font-size:20px;line-height:1.8;">
                                                                                                                                                    Happy Birthday Mahiya ❤️<br><br>

                                                                                                                                                            Wishing you endless happiness, good health,
                                                                                                                                                                    beautiful memories and success in everything you do.

                                                                                                                                                                            May your smile always shine as brightly as it does today. ✨🎂❤️
                                                                                                                                                                                    </p>

                                                                                                                                                                                            <button onclick="location.reload()">
                                                                                                                                                                                                        Start Again 🎁
                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                    `;
                                                                                                                                                                                                                    }
}
