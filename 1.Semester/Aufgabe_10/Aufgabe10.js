var list = [];
var HTMLlist;
function add() {
    var newToDo;
    newToDo = document.getElementById("NewTaskFillIn").value;
    if (newToDo === "") {
        alert("Insert an text");
    }
    else {
        list.unshift({ text: newToDo, checked: false });
    }
    count();
    addListToHTML();
}
function addViaVoice(text) {
    var newToDo = text;
    list.unshift({ text: newToDo, checked: false });
    count();
    addListToHTML();
}
function addListToHTML() {
    HTMLlist.innerHTML = "";
    var _loop_1 = function (i) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + list[i].checked + "'><i class='icon-ok'></i></span>"
            + list[i].text +
            "<span class='trash icon-trash'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            checkButton(i);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteButton(i);
        });
        HTMLlist.appendChild(todo);
    };
    for (var i = 0; i < list.length; i++) {
        _loop_1(i);
    }
    ;
}
function checkButton(index) {
    list[index].checked = !list[index].checked;
    count();
    addListToHTML();
}
function deleteButton(index) {
    list.splice(index, 1);
    count();
    addListToHTML();
}
function count() {
    var counter = list.length;
    var checked = 0;
    var open = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].checked === true) {
            checked++;
        }
        else {
            open++;
        }
    }
    document.querySelector("#counter").innerHTML = "Total: " + counter + " Open: " + open + " Closed: " + checked;
}
window.addEventListener("load", function (beat) {
    HTMLlist = document.querySelector("#Todos");
    document.querySelector("#AddButton").addEventListener("click", function () {
        add();
    });
    addListToHTML();
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Erstelle neue Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            addViaVoice(wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=Aufgabe10.js.map