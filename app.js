// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };


// Define constants
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger"),
      cameraStreamer = document.querySelector("#camera--streamer");

// Access the device camera and stream to cameraView

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
          var video = cameraStreamer
            video.src = window.URL.createObjectURL(stream);
          // cameraStreamer.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

// Start the video stream when the window loads
window.addEventListener('load', cameraStart, false);
