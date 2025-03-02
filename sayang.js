// Ensure background music plays automatically
function playBackgroundMusic() {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.play().catch(() => {
    // If autoplay is blocked, show a message or handle it gracefully
    console.log("Autoplay was blocked. Please interact with the page to play music.");
  });
}

// Call the function to play music
playBackgroundMusic();

// Add unicorn emojis to the background
function createUnicorns() {
  const numberOfUnicorns = 5; // Number of unicorns you want
  for (let i = 0; i < numberOfUnicorns; i++) {
    const unicorn = document.createElement("div");
    unicorn.classList.add("unicorn");
    unicorn.innerHTML = "🦄";
    unicorn.style.top = `${Math.random() * 100}vh`;
    unicorn.style.left = `${Math.random() * 100}vw`;
    unicorn.style.animationDuration = `${10 + Math.random() * 10}s`; // Random speed
    document.body.appendChild(unicorn);
  }
}

// Call the function to create unicorns
createUnicorns();

// Video Popup Functions
function openVideo() {
  document.getElementById("video-popup").style.display = "flex";
}

function closeVideo() {
  document.getElementById("video-popup").style.display = "none";
}