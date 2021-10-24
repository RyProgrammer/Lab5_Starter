// explore.js (REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices)

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Set up voice options
  function setVoices() {
    var voices = speechSynthesis.getVoices();
    var voiceSelect = document.getElementById("voice-select");

    for(var i = 0; i < voices.length; ++i) {
      var v = document.createElement("option");

      v.textContent = voices[i].name;
      v.setAttribute("id", voices[i].name);
      voiceSelect.appendChild(v);
    }
  }

  speechSynthesis.onvoiceschanged = setVoices;

  // Set up text to speech
  var talkButton = document.querySelector("button");
  var voiceSelect = document.getElementById("voice-select");
  var voiceId;

  voiceSelect.addEventListener("change", getId);

  function getId() {
    voiceId = event.target.value;
  }

  talkButton.addEventListener("click", sayWords);

  var text;

  function sayWords() {
    var textSpeak = document.getElementById("text-to-speak");
    var voices = speechSynthesis.getVoices();
    var utterance = new SpeechSynthesisUtterance();
    var smileyFace = document.querySelector("img");

    for(var i = 0; i < voices.length; ++i) {
      if(voices[i].name == voiceId) {
        utterance.voice = voices[i];
        utterance.text = textSpeak.value;
        break;
      }
    }

    speechSynthesis.speak(utterance);
    smileyFace.src = "assets/images/smiling-open.png";

    utterance.addEventListener("end", noMoreTalk);

    function noMoreTalk() {
      smileyFace.src = "assets/images/smiling.png";
    }
  }

  textSpeak.addEventListener("change", getText);
  
  function getText() {
    text = event.target.value;
  }
}
