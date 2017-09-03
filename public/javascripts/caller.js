// jshint ignore: start
/* eslint-disable */
function initializeChat(){
    var stream ;

    var peer = new Peer('223334455', {host: 'localhost', port: 9000, path: '/'});
    console.log(peer)
    peer.on('call', function(call) {})
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
                var call = peer.call('123456789',stream);
                console.log(peer.call)
                
                // call.on('stream', function(remoteStream) {
                //     // Show stream in some video/canvas element.
                //     console.log('stream received from recipient')
                //     var revievedVideo = document.getElementById('revievedVideo');
                //     if(revievedVideo){
                //         revievedVideo.srcObject = remoteStream;
                //         revievedVideo.play();
                //     }
                // });
            } 
        }
        var errorCallback = function (error) {
            document.getElementById("error").innerHTML = JSON.stringify(error);
        };
        navigator.getUserMedia(
            constraints,
            successCallback,
            errorCallback
        );
        
        
    }else{
        document.getElementById('error').innerHTML = 'WebRTC not supported on this device.'
    }
}

