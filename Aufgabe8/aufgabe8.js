/*Play, Record, Trash*/
var tempo;
var index = 0;
var record = false;
var sounds = [];
function playSample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
    console.log(sound);
    if (record === true) {
        sounds.push(beat);
    }
}
function playBeat() {
    if (document.getElementById("play").classList.contains("icon-play-circled")) {
        document.getElementById("play").classList.remove("icon-play-circled");
        document.getElementById("play").classList.add("icon-stop");
        record = false;
        sounds.forEach(function (element) {
            playSample(element);
        });
    }
    else {
        document.getElementById("play").classList.remove("icon-stop");
        document.getElementById("play").classList.add("icon-play-circled");
    }
}
function deleteBeat() {
    sounds = [];
}
function recordBeat() {
    if (record === false) {
        record = true;
    }
    else {
        record = false;
    }
}
/*Buttons*/
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonOne").addEventListener("click", function () { playSample("F.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonTwo").addEventListener("click", function () { playSample("G.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonThree").addEventListener("click", function () { playSample("A.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonFour").addEventListener("click", function () { playSample("C.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonFive").addEventListener("click", function () { playSample("laugh-1.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonSix").addEventListener("click", function () { playSample("laugh-2.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonSeven").addEventListener("click", function () { playSample("snare.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonEight").addEventListener("click", function () { playSample("kick.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#ButtonNine").addEventListener("click", function () { playSample("hihat.mp3"); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#play").addEventListener("click", function () { playBeat(); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#record").addEventListener("click", function () { recordBeat(); });
});
window.addEventListener("load", function (beat) {
    document.querySelector("#delete").addEventListener("click", function () { deleteBeat(); });
});
//# sourceMappingURL=aufgabe8.js.map