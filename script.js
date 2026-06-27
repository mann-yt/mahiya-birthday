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
    alert("🎉 Next we'll show the animated birthday cake!");
}
