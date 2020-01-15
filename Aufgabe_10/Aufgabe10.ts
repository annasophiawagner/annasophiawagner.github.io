

var list: {text: string, checked: boolean}[] = [];
var HTMLlist;
declare var Artyom: any;


function add() {
    var newToDo: string;
    newToDo = (<HTMLInputElement>document.getElementById("NewTaskFillIn")).value;
    if(newToDo === ""){
        alert("Insert an text");
    }
    else{
        list.unshift({text:newToDo, checked:false});
    }
    count();
    addListToHTML();
}

function addViaVoice(text: string) {
    var newToDo: string = text;
    list.unshift({text:newToDo, checked:false});
    count();
    addListToHTML();
}

function addListToHTML() {
    HTMLlist.innerHTML = "";
    for(let i: number = 0; i< list.length; i++){
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check " + list[i].checked + "'><i class='icon-ok'></i></span>"
                            + list[i].text +
                           "<span class='trash icon-trash'></span>";
        todo.querySelector(".check").addEventListener("click", function(): void {
            checkButton(i);
            
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteButton(i);
        });
        HTMLlist.appendChild(todo);
    };
}

function checkButton(index: number): void {
    list[index].checked = !list[index].checked
    count();
    addListToHTML()
}

function deleteButton(index: number) {
    list.splice(index, 1);
    count();
    addListToHTML()
}

function count(){
    var counter = list.length;
    var checked = 0;
    var open = 0;
    
    for(let i = 0; i < list.length; i++) {
        if (list[i].checked === true) {
            checked++;
        }
        else {
            open++;
        }
    }
    document.querySelector("#counter").innerHTML = "Total: " + counter + " Open: " + open + " Closed: " + checked;
}

//*Artyom library*//

declare var Artyom: any;

window.addEventListener("load", function (beat) {
    HTMLlist = document.querySelector("#Todos");
    document.querySelector("#AddButton").addEventListener("click", function () {
        add()
     });
     addListToHTML()

     const artyom: any = new Artyom();
     artyom.addCommands({
         indexes: ["Erstelle neue Aufgabe *"],
         smart: true,
         action: function(i: any, wildcard: string): void {
             console.log("Neue Aufgabe wird erstellt: " + wildcard)
             addViaVoice(wildcard);
         }
     });
     
     function startContinuousArtyom(): void {
         artyom.fatality();
     
         setTimeout(
             function(): void {
                 artyom.initialize({
                     lang: "de-DE",
                     continuous: true,
                     listen: true,
                     interimResults: true,
                     debug: true
                 }).then(function(): void {
                     console.log("Ready!");
                 });
             }, 
             250);
     }
     startContinuousArtyom();

});
