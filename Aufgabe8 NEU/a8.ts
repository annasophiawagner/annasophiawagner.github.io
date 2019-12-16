var interval;
var Beat = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "kick.mpr", "snare.mp3", "kick.mp3", "kick.mp3", "snare.mp3"];
var record = false;
//buttons
window.addEventListener("load", function () {
    document.querySelector("#ButtonOne").addEventListener("click", function () { PlaySample("F.mp3"); });
    document.querySelector("#ButtonTwo").addEventListener("click", function () { PlaySample("G.mp3"); });
    document.querySelector("#ButtonThree").addEventListener("click", function () { PlaySample("A.mp3"); });
    document.querySelector("#ButtonFour").addEventListener("click", function () { PlaySample("C.mp3"); });
    document.querySelector("#ButtonFive").addEventListener("click", function () { PlaySample("laugh-1.mp3"); });
    document.querySelector("#ButtonSix").addEventListener("click", function () { PlaySample("laugh-2.mp3"); });
    document.querySelector("#ButtonSeven").addEventListener("click", function () { PlaySample("kick.mp3"); });
    document.querySelector("#ButtonEight").addEventListener("click", function () { PlaySample("snare.mp3"); });
    document.querySelector("#ButtonNine").addEventListener("click", function () { PlaySample("hihat.mp3"); });
    document.querySelector("#play").addEventListener("click", PlayBeat);
    document.querySelector("#record").addEventListener("click", RecordBeat);
    document.querySelector("#stop").addEventListener("click", EraseBeat);
});
//PlaySample    
function PlaySample(tone) {
    var sound = new Audio("./assets/" + tone);
    sound.play();
    if (record == true) {
        Beat.push(tone);
    }
}
//PlayBeat
function PlayBeat() {
    var index = 0;
    //Play
    if (document.getElementById("playbutton").classList.contains("fas fa-play-circled")) {
        document.getElementById("playbutton").classList.remove("fas fa-play-circled");
        document.getElementById("playbutton").classList.add("fas fa-stop");
        interval = setInterval(myBeat, 250);
        record = false;
        console.log("Play");
        //Stop
    }
    else {
        document.getElementById("playbutton").classList.remove("fas fa-stop");
        document.getElementById("playbutton").classList.add("fas fa-play-circled");
        clearInterval(interval);
        console.log("Pause");
    }
    //Beat
    function myBeat() {
        PlaySample(Beat[index]);
        index += 1;
        if (index > (Beat.length - 1))
            index = 0;
        console.log(Beat[index]);
    }
}
//Record
function RecordBeat() {
    record = true;
}
//Erase
function EraseBeat() {
    Beat.length = 0;
}