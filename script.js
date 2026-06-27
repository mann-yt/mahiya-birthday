document.getElementById("startBtn").addEventListener("click", function () {

  const music = document.getElementById("bgMusic");
  music.play();

 document.body.style.transition = "1s";
 document.body.style.background =
 "linear-gradient(135deg,#8e44ad,#ff6ec7,#ffd166)";

  document.querySelector(".container").innerHTML = `
     <h1>🎁 Happy Birthday Mahiya ❤️</h1>

     <h2>✨ Your magical surprise is loading... ✨</h2>

      <p>
     Get ready for something made especially for you 💖
     </p>

     <button onclick="nextPage()">
      Continue ➡️
       </button>
                `;
                 });

    function nextPage() {
          document.querySelector(".container").innerHTML = `
             <h1>🕯️ Happy Birthday Mahiya ❤️</h1>
                                                                                                                    
              <h2>Make a Wish</h2>
                                                                                                                            
             <div style="font-size:120px;margin:20px;">🕯️</div>
                                                                                                                                    
             <p>Tap the candle to blow it out 🎂</p>
                                                                                                                                            
              <button onclick="blowCandle()">l
               🕯️ Blow Candle
                 </button>
                             `;
                             }

      function blowCandle() {
      document.querySelector(".container").innerHTML = `
     <h1>🎉 YAYYYYY!! 🎉</h1>
       <h2>Happy Birthday Mahiya ❤️</h2>

     <div style="font-size:100px;">💥🎉❤️</div>

       <p>Your celebration has begun...</p>

      <button onclick="showLetter()">
     Continue ❤️
     </button>
                 `;
                 }

     function showLetter() {    document.querySelector(".container").innerHTML = `

     <h1>💌 A Letter For You</h1>
                                                                                                                                                                                                                                                            
      <p style="font-size:20px;line-height:1.8;">
      Happy Birthday Mahiya ❤️<br><br>
                                                                                                                                                                                                                                                                                
      Wishing you endless happiness, good health,
     beautiful memories and success in everything you do.
                                                                                                                                                                                                                                                                                                        
     May your smile always shine as brightly as it does today. ✨🎂❤️
    </p>

    <h2>⏳ Time Since Your Birthday</h2>
    <div id="countdown" style="font-size:22px;font-weight:bold;margin:20px 0;"></div>

    <h2>📸 Beautiful Memories ❤️</h2>

    <div class="slideshow">
        <img id="slide" src="IMG-20260621-WA0027.jpg">
        </div>
                                                                                                                                                                                                                                                                                                                            
      <button onclick="location.reload()">
        Start Again 🎁
         </button>
                     `;
                     startSlideshow();
                     updateCountdown();
                     }
const photos = [
  "IMG-20260621-WA0027.jpg",
  "IMG-20260220-WA0020.jpg",
  "IMG-20260206-WA0087.jpg",
  "IMG-20260129-WA0009.jpg",
  "IMG-20260129-WA0006.jpg",
  "IMG-20260129-WA0005.jpg",
  "IMG-20260123-WA0089.jpg"
  ];

  function startSlideshow() {
      let i = 0;
          const slide = document.getElementById("slide");

              setInterval(() => {
                      i = (i + 1) % photos.length;
                              slide.src = photos[i];
                                  }, 2500);
                                  }
                                  function updateCountdown() {
                                        const birthday = new Date("2026-06-29T00:00:00");

                                            function tick() {
                                                    const now = new Date();
                                                            const diff = now - birthday;

                                                                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                                                                            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                                                                                    const minutes = Math.floor((diff / (1000 * 60)) % 60);
                                                                                            const seconds = Math.floor((diff / 1000) % 60);

                                                                                                    document.getElementById("countdown").innerHTML =
                                                                                                                `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
                                                                                                                    }

                                                                                                                        tick();
                                                                                                                            setInterval(tick, 1000);
                                                                                                                            }
                                  
