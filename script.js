const elVideo = document.getElementById('video');

navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

const cargarCamera = () => {
    navigator.getMedia (

        {
            video: true,
            audio: false
        },

        stream => elVideo.strObject = stream,
        console.error

        function(err){
            console.log("Ocurrió el siguiente error: " + err)
        }
    );
}