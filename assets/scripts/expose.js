// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var audio = document.querySelector(".hidden");
  var jsConfetti = new JSConfetti();
  var partyTime = false;

  // Change picture and audio
  const hornSelect = document.getElementById("horn-select");

  hornSelect.addEventListener("change", changeStuff);

  function changeStuff() {
    const img = document.querySelector("img");
    img.src = "assets/images/" + event.target.value + ".svg";
    audio.src = "assets/audio/" + event.target.value + ".mp3";

    partyTime = (event.target.value == "party-horn");
  }

  // Change volume
  const volumeInput = document.getElementById("volume");

  volumeInput.addEventListener("change", applyVolume);

  function applyVolume() {
    const volumeImg = document.querySelectorAll("img")[1];
    if(event.target.value >= 67) volumeImg.src = "assets/icons/volume-level-3.svg";
    else if(event.target.value >= 33) volumeImg.src = "assets/icons/volume-level-2.svg";
    else if(event.target.value >= 1) volumeImg.src = "assets/icons/volume-level-1.svg";
    else volumeImg.src = "assets/icons/volume-level-0.svg";

    audio.volume = event.target.value / 100;
  }

  // Play sound
  const playButton = document.querySelector("button");

  playButton.addEventListener("click", playSound);

  function playSound() {
    audio.load();
    audio.play();

    if(partyTime) jsConfetti.addConfetti();
  }
}