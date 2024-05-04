// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // On page load, all of the available voices that you can use 
  // for your SpeechSynthesizer should be loaded 
  // and populate the “Select Voice” dropdown. 

  const voiceSelector = document.getElementById("voice-select");
  
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      voiceSelector.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // When you click the “Press to Talk” button, the following should happen:
  // The text that you have typed into the “Text to speak here” 
  // textarea should be spoken out loud using the voice that you have selected
  const talkButton = document.querySelector("button");
  const textarea = document.getElementById("text-to-speak");
  const faceImgElement = document.querySelector("img");

  talkButton.addEventListener("click", function() {
    const text = textarea.value;
    const selectedVoice = voiceSelector.value;
    const selectedOption = voiceSelector.selectedOptions[0].getAttribute("data-name");

    const voices = speechSynthesis.getVoices();

    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices.find(v => v.name === selectedOption);

    utterance.onstart = function() {
      faceImgElement.src = "assets/images/smiling-open.png";
    }

    utterance.onend = function() {
      faceImgElement.src = "assets/images/smiling.png";
    }

    speechSynthesis.speak(utterance);

  });

}