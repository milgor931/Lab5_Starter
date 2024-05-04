// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // When you select a horn from the drop down menu, the following should occur:
  // The correct image should display
  // The correct audio sound file should be set
  const hornSelector = document.getElementById("horn-select");
  const audio = document.querySelector("audio");

  hornSelector.addEventListener("change", function() {
    const selected = hornSelector.value;
    const hornImgElement = document.querySelector('img');

    // update horn image and audio sound
    hornImgElement.src = `assets/images/${selected}.svg`;
    audio.src = `assets/audio/${selected}.mp3`;
  });

  // When you change the volume on the slider, the following should occur:
  // At zero volume, the mute icon (level 0) should be displayed
  // From 1 to < 33 volume the first volume level should be displayed
  // From 33 to < 67 volume the second volume level should be displayed
  // From 67 and up the third volume level should be displayed
  // The correct volume icon should be set
  // The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
  // Hint: the volume slider's range is from 0 - 100, but the audio element has a different propertyLinks to an external site.. 
  const volumeSlider = document.getElementById("volume");
  const volumeImgElement = document.querySelector("#volume-controls img");
  const volumeLevels = ["volume-level-0", "volume-level-1", "volume-level-2", "volume-level-3" ];

  volumeSlider.addEventListener("input", function() {
    let v = volumeSlider.value;

    if (v == 0) {
      volumeImgElement.src = `assets/icons/${volumeLevels[0]}.svg`;
    } else if (v >= 1 && v < 33) {
      volumeImgElement.src = `assets/icons/${volumeLevels[1]}.svg`;
    } else if (v >= 33 && v < 67) {
      volumeImgElement.src = `assets/icons/${volumeLevels[2]}.svg`;
    } else if (v >= 67) {
      volumeImgElement.src = `assets/icons/${volumeLevels[3]}.svg`;
    }

    audio.volume = v/100;
  });

  // When you click the “Play Sound” button the following should occur:
  // The corresponding sound for the horn selected should play out loud at the specified volume
  // If the Party Horn is selected, confetti should shoot out when the play button is clicked, as shown in the video
  // A library has been included for you to accomplish this, more on how to use it here https://github.com/loonywizard/js-confettiLinks to an external site.
  // Do not run the installation steps, or include the import statement as we have already installed and imported the confetti library for you 
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti()

  playButton.addEventListener("click", function() {
    audio.play();

    if (hornSelector.value === "party-horn") {
      jsConfetti.addConfetti();
    } 
  });
}