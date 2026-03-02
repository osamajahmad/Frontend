// A boolean variable to check if the audio is playing, by default it is false, since we have our video on muted
isAudioPlaying = false
// A boolean to do an initial check if the audio is played, by default it is not played
hasAudioPlayed = false
/**
 * Here these variables are assigned nodes in page3 document using their selector IDs
 */
const hikeTile = document.getElementById("hikeTile")
const railTile = document.getElementById("railTile")
const museumTile = document.getElementById("museumTile")
const audio = document.getElementById("audio")

/**
 * These variables are assigned their initial CSS display value, since we will changing them later and we need the original value 
 * when needing to display the tile again.
 */
const hikeTileDisp = window.getComputedStyle(hikeTile).display
const railTileDisp = window.getComputedStyle(railTile).display
const museumTileDisp = window.getComputedStyle(museumTile).display

/**
 * Here these variables are assigned nodes in page3 document using their selector IDs
 */
const ALL_btn = document.getElementById("ALL_btn")
const Outdoors_btn = document.getElementById("Outdoors_btn")
const Culture_btn = document.getElementById("Culture_btn")
const Rail_btn = document.getElementById("Rail_btn")
const Family_btn = document.getElementById("Family_btn")
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

// This makes ALL_btn active and displays all tiles
ALL_btn.onclick = function (){
    ALL_btn.className = "chip active"
    Outdoors_btn.className = "chip"
    Culture_btn.className = "chip"
    Rail_btn.className = "chip"
    Family_btn.className = "chip"

    hikeTile.style.display = hikeTileDisp
    railTile.style.display = railTileDisp
    museumTile.style.display = museumTileDisp
}

// This makes Outdoors_btn active and displays only the hike tile
Outdoors_btn.onclick = function (){
    ALL_btn.className = "chip"
    Outdoors_btn.className = "chip active"
    Culture_btn.className = "chip"
    Rail_btn.className = "chip"
    Family_btn.className = "chip"

    hikeTile.style.display = hikeTileDisp
    railTile.style.display = "None"
    museumTile.style.display = "None"
}

// This makes Culture_btn active and displays only the museum tile
Culture_btn.onclick = function (){
    ALL_btn.className = "chip"
    Outdoors_btn.className = "chip"
    Culture_btn.className = "chip active"
    Rail_btn.className = "chip"
    Family_btn.className = "chip"

    hikeTile.style.display = "None"
    railTile.style.display = "None"
    museumTile.style.display = museumTileDisp
}

// This makes Rail_btn active and displays only the rail tile
Rail_btn.onclick = function (){
    ALL_btn.className = "chip"
    Outdoors_btn.className = "chip"
    Culture_btn.className = "chip"
    Rail_btn.className = "chip active"
    Family_btn.className = "chip"

    hikeTile.style.display = "None"
    railTile.style.display = railTileDisp
    museumTile.style.display = "None"
}

// This makes Family_btn active and displays no tiles
Family_btn.onclick = function (){
    ALL_btn.className = "chip"
    Outdoors_btn.className = "chip"
    Culture_btn.className = "chip"
    Rail_btn.className = "chip"
    Family_btn.className = "chip active"

    hikeTile.style.display = "None"
    railTile.style.display = "None"
    museumTile.style.display = "None"
}