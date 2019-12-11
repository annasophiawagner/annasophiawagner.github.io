window.addEventListener("load", function () {
    document.querySelector("#ButtonOne").addEventListener("click", function () { playSample("F.mp3"); });
    document.querySelector("#ButtonTwo").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector("#ButtonThree").addEventListener("click", function () { playSample("A.mp3"); });
    document.querySelector("#ButtonFour").addEventListener("click", function () { playSample("C.mp3"); });
    document.querySelector("#ButtonFive").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#ButtonSix").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#ButtonSeven").addEventListener("click", function () { playSample("snare.mp3"); });
    document.querySelector("#ButtonEight").addEventListener("click", function () { playSample("kick.mp3"); });
    document.querySelector("#ButtonNine").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.querySelector("#play").addEventListener("click", playbutton); 
    document.querySelector("#record").addEventListener("click", recordbutton);
    document.querySelector("#delete").addEventListener("click", deletebutton);
});
var Kick;
var Beat = ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
var record = false;
function playSample(sounds) {
    var sound = new Audio("assets/" + sounds);
    sound.play();
    if (record == true) {
        Beat.push(sounds);
    }
}
function playbutton() {
    var index = 0;
    if (document.getElementById("Play").classList.contains("icon-play-circled")) {
        document.getElementById("Play").classList.remove("icon-play-circled");
        document.getElementById("Play").classList.add("icon-stop");
        Kick = setInterval(playBeat, 500);
        record = false;
        console.log("Play");
    }
    else {
        document.getElementById("Play").classList.remove("icon-stop");
        document.getElementById("Play").classList.add("icon-play-circled");
        clearInterval(Kick);
        console.log("Pause");
    }
    //Beat
    function playBeat() {
        playSample(Beat[index]);
        index += 1;
        if (index == (Beat.length)) {
            index = 0;
            console.log(Beat[index]);
        }
    }
}
function deletebutton() {
    Beat.length = 0;
    console.log("delete Beat");
}
function recordbutton() {
    record = true;
    console.log("record new Beat");
}
//# sourceMappingURL=drumpad.js.map