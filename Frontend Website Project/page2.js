// A boolean variable to check if the audio is playing, by default it is false, since we have our video on muted
isAudioPlaying = false
// A boolean to do an initial check if the audio is played, by default it is not played
hasAudioPlayed = false
/**
 * Here these variables are assigned nodes in page2 document using their selector IDs
 */
/**
 * Here these variables are assigned nodes in page2 document using their selector IDs
 */
const zurichTile = document.getElementById("zurichTile")
const lakeTile = document.getElementById("lakeTile")
const berneseTile = document.getElementById("berneseTile")
const audio = document.getElementById("audio")

/**
 * These variables are assigned their initial CSS display value, since we will changing them later and we need the original value 
 * when needing to display the tile again.
 */
const zurichTileDisp = window.getComputedStyle(zurichTile).display
const lakeTileDisp = window.getComputedStyle(lakeTile).display
const berneseTileDisp = window.getComputedStyle(berneseTile).display

/**
 * Here these variables are assigned nodes in page2 document using their selector IDs
 */
const ALL_btn = document.getElementById("ALL_btn")
const Cities_btn = document.getElementById("Cities_btn")
const Lakes_btn = document.getElementById("Lakes_btn")
const Mountains_btn = document.getElementById("Mountains_btn")
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
    Cities_btn.className = "chip"
    Lakes_btn.className = "chip"
    Mountains_btn.className = "chip"
    Family_btn.className = "chip"

    zurichTile.style.display = zurichTileDisp
    lakeTile.style.display = lakeTileDisp
    berneseTile.style.display = berneseTileDisp
}

// This makes Cities_btn active and displays only the zurich tile
Cities_btn.onclick = function (){
    ALL_btn.className = "chip"
    Cities_btn.className = "chip active"
    Lakes_btn.className = "chip"
    Mountains_btn.className = "chip"
    Family_btn.className = "chip"

    zurichTile.style.display = zurichTileDisp
    lakeTile.style.display = "None"
    berneseTile.style.display = "None"
}

// This makes Lakes_btn active and displays only the lake tile
Lakes_btn.onclick = function (){
    ALL_btn.className = "chip"
    Cities_btn.className = "chip"
    Lakes_btn.className = "chip active"
    Mountains_btn.className = "chip"
    Family_btn.className = "chip"

    zurichTile.style.display = "None"
    lakeTile.style.display = lakeTileDisp
    berneseTile.style.display = "None"
}

// This makes Mountains_btn active and displays only the bernese tile
Mountains_btn.onclick = function (){
    ALL_btn.className = "chip"
    Cities_btn.className = "chip"
    Lakes_btn.className = "chip"
    Mountains_btn.className = "chip active"
    Family_btn.className = "chip"

    zurichTile.style.display = "None"
    lakeTile.style.display = "None"
    berneseTile.style.display = berneseTileDisp
}

// This makes Family_btn active and displays only the lake tile
Family_btn.onclick = function (){
    ALL_btn.className = "chip"
    Cities_btn.className = "chip"
    Lakes_btn.className = "chip"
    Mountains_btn.className = "chip"
    Family_btn.className = "chip active"

    zurichTile.style.display = "None"
    lakeTile.style.display = lakeTileDisp
    berneseTile.style.display = "None"
}