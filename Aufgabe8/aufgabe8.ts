/*Sample PLay*/ 
function playSample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
}

window.addEventListener("load", function (beat) {
    document.querySelector(".SamplePlay").addEventListener("click", playsound);
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

