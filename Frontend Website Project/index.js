// A boolean variable to check if the video is playing, by default it is true, since we have our video on autoplay
isVideoPlaying = true
// A boolean variable to check if the audio is playing, by default it is false, since we have our video on muted
isAudioPlaying = false
// A boolean to do an initial check if the audio is played, by default it is not played
hasAudioPlayed = false
/**
 * Here these variables are assigned nodes in page2 document using their selector IDs
 */
const video = document.getElementById("video")
const audio = document.getElementById("audio")

const vid_btn = document.getElementById("vid_btn")
const audio_btn = document.getElementById("audio_btn")

audio_btn.onclick = function () {
    //Makes the audio play only once, has does not play it over and over from beginning when the user mutes/unmutes the audio
    if (!hasAudioPlayed){
        audio.play()
        hasAudioPlayed=true
    }
    //This checks if the audio is playing, then changes the image of the button and mutes/unmutes the audio based on the vairable isAudioPlaying
    if (!isAudioPlaying){
        document.getElementById("playAudio").src = "assets/media/unmute-btn.png"
        isAudioPlaying = true
        audio.muted = false
    }
    else {
        document.getElementById("playAudio").src = "assets/media/mute-btn.png"
        isAudioPlaying = false
        audio.muted = true
    }
}

vid_btn.onclick = function () {
    //This checks if the video is playing, then changes the image of the button and plays/pauses the video based on the vairable isVideoPlaying
    if (isVideoPlaying){
        document.getElementById("playIMG").src = "assets/media/playbtn.png"
        isVideoPlaying = false
        video.pause()
    }
    else {
        document.getElementById("playIMG").src = "assets/media/pausebtn.png"
        isVideoPlaying = true
        video.play()
    }
}
