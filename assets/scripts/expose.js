// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Change picture and audio
  const hornSelect = document.getElementById("horn-select");

  hornSelect.addEventListener("change", changeStuff);

  function changeStuff() {
    const img = document.querySelector("img");
    const audio = document.querySelector(".hidden");
    img.src = "assets/images/" + event.target.value + ".svg";
    audio.src = "assets/audio" + event.target.value + ".mp3";
  }

  // Change volume
  const volumeInput = document.getElementById("volume");

  volumeInput.addEventListener("change", applyVolume);

  function applyVolume() {
    var volumeImg = document.querySelectorAll("img")[1];
    if(event.target.value >= 67) volumeImg.src = "assets/icons/volume-level-3.svg";
    else if(event.target.value >= 33) volumeImg.src = "assets/icons/volume-level-2.svg";
    else if(event.target.value >= 1) volumeImg.src = "assets/icons/volume-level-1.svg";
    else volumeImg.src = "assets/icons/volume-level-0.svg";
  }
}