/*Sample PLay*/ 
var Kick;
var Beat = ["hihat.mp3", "snare.mp3", "C.mp3", "snare.mp3", "kick.mp3", "snare.mp3"];
var music = false;

function playSample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
}

window.addEventListener("load", function (beat) {
    document.querySelector(".icon-play-circled").addEventListener("click", playsound);
});

function playsound() {
    var mybeat = ["assets/laugh-2.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/A.mp3", "assets/F.mp3", "assets/A.mp3", "assets/F.mp3", "assets/C.mp3", "assets/hihat.mp3"];
    var index = 0;
    var interval = setInterval(mySound, 300);
    function mySound() {
        var MyMelody = new Audio(mybeat[index]);
        MyMelody.play();
        index += 1;
        if (index > 11)
            index = 0;
        console.log(mybeat[index]);
    }
}

function playBeat() {
    var index = 0;
    /*start*/
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
        Kick = setInterval(myBeat, 300);
        music = false;
    }
    /*stop*/
    else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(Kick);
    }
    /*beat*/
    function myBeat() {
        playSample(Beat[index]);
        index += 1;
        if (index > (Beat.length - 1))
            index = 0;
    }
}
function recordBeat() {
    music = true;
}
function deleteBeat() {
    Beat.length = 0;
}
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

