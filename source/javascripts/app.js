$(document).foundation();
var bLazy = new Blazy({
        // Options
    });

document.addEventListener('play', function(e){
    var videos = document.getElementsByTagName('video');
    for(var i = 0, len = videos.length; i < len;i++){
        if(videos[i] != e.target){
            videos[i].pause();
        }
    }
}, true);