// A boolean variable to check if the audio is playing, by default it is false, since we have our video on muted
isAudioPlaying = false
// A boolean to do an initial check if the audio is played, by default it is not played
hasAudioPlayed = false

const audio = document.getElementById("audio")
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