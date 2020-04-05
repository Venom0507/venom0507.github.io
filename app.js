// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };


// Define constants
const cameraView = document.querySelector("#camera--view"),
      streamView = document.querySelector("#stream--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView

if(document.URL.indexOf("index.html") >= 0){ 
      function cameraStart() {
            navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function(stream) {
                  track = stream.getTracks()[0];
                  cameraView.srcObject = stream;
            })
            .catch(function(error) {
                  console.error("Oops. Something is broken.", error);
            });
      }
      // Start the video stream when the window loads
      window.addEventListener('load', cameraStart, false);
}

if(document.URL.indexOf("Streamer.html") >= 0){ 
      streamView.srcObject = cameraView;
}

