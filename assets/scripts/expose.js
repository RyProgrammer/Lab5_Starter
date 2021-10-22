// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Change picture and audio
  const hornSelect = document.getElementById("horn-select");

  hornSelect.addEventListener('change', changeStuff);

  function changeStuff() {
    const img = document.querySelector("img");
    const audio = document.querySelector(".hidden");
    img.src = "assets/images/" + event.target.value + ".svg";
    audio.src = "assets/audio" + event.target.value + ".mp3";
  }

  // Change volume
  
}