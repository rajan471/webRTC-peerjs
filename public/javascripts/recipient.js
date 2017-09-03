

// jshint ignore: start
/* eslint-disable */
function initializeChat(){
    var stream ;
    var peer = new Peer('123456789', {host: 'localhost', port: 9000, path: '/'});

    console.log(peer);
    
    navigator.getUserMedia = navigator.getUserMedia || 
        navigator.mozGetUserMedia ||
        navigator.webkitGetUserMedia || 
        navigator.msGetUserMedia;

    if(navigator.getUserMedia){
        document.getElementById('overlay').style.display = 'none';
        var constraints = {
            audio : false,
            video : true
        };

        var successCallback = function (stream) {
            var camVideo = document.getElementById('camVideo');
            if(camVideo){
                camVideo.srcObject = stream;
                camVideo.play();
                this.stream = stream
            } 
            peer.on('open', function(id) {
                console.log('My peer ID is: ' + id);
            });
        }
        var errorCallback = function (error) {
            document.getElementById("error").innerHTML = JSON.stringify(error);
        };
        navigator.getUserMedia(
            constraints,
            successCallback,
            errorCallback
        );

        peer.on('call', function(call) {
            call.answer(stream); // Answer the call with an A/V stream.
            call.on('stream', function(remoteStream) {
                // Show stream in some video/canvas element.
                console.log('stream received from caller')
                var revievedVideo = document.getElementById('revievedVideo');
                if(revievedVideo){
                    revievedVideo.srcObject = remoteStream;
                    revievedVideo.play();
                }
            });
        });
        
    }else{
        document.getElementById('error').innerHTML = 'WebRTC not supported on this device.'
    }
}