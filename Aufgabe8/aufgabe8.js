/*Buttons*/
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonOne").addEventListener("mousedown", function () { playSample("F.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonTwo").addEventListener("mousedown", function () { playSample("G.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonThree").addEventListener("mousedown", function () { playSample("A.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonFour").addEventListener("mousedown", function () { playSample("C.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonFive").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonSix").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonSeven").addEventListener("mousedown", function () { playSample("snare.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonEight").addEventListener("mousedown", function () { playSample("kick.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonNine").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#Play").addEventListener("click", playBeat);
});
window.addEventListener("load", function (beat) {
    document.querySelector("#Record").addEventListener("click", recordBeat);
});
window.addEventListener("load", function (beat) {
    document.querySelector("#Delete").addEventListener("click", deleteBeat);
});
/*Play, Record, Trash*/
var tempo;
var index = 0;
var record = false;
function playSample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
}
window.addEventListener("load", function (beat) {
    document.querySelector("#play").addEventListener("click", playBeat);
});
function playBeat() {
    if (document.getElementById("play").classList.contains("icon-play-circled")) {
        document.getElementById("play").classList.remove("icons-play-circled");
        document.getElementById("play").classList.add("icon-stop");
        tempo = setInterval(dnb, 300);
        record = false;
    }
    else {
        document.getElementById("play").classList.remove("icon-stop");
        document.getElementById("play").classList.add("icon-play-circled");
        clearInterval(tempo);
    }
}
function dnb() {
    playSample(playBeat[index]);
    index += 1;
    console.log(index);
    if (index > (playBeat.length - 1))
        index = 0;
}
function deleteBeat() {
    playBeat.length = 0;
}
function recordBeat() {
    record = true;
}
//# sourceMappingURL=aufgabe8.js.map