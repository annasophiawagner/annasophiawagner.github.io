// Creating the Close Button for tasks //
var myList = document.getElementsByTagName("li");
var index;
for (index = 0; index < myList.length; index++) {
    var aSpanTag = document.createElement("SPAN");
    var someText = document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someText);
    myList[index].appendChild(aSpanTag);
}
// Close Button //
var closeButton = document.getElementsByClassName("close");
for (index = 0; index < closeButton.length; index++) {
    document.getElementById('closeButton')[index].click = function () {
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    };
    // Creating Checked ToDos//
    var ulList = document.querySelector('ul');
    ulList.addEventListener('click', function (event) {
        console.log(event);
        if (document.getElementById('ul').tagName === "LI") {
            document.getElementById('ul').classList.toggle('checked');
        }
    }, false);
    // Creating ToDos Function //
    function createNewElement() {
        var li = document.createElement('li');
        var InputValue = document.getElementById("Input").nodeValue;
        var textNode = document.createTextNode(InputValue);
        li.appendChild(textNode);
        if (InputValue === '') {
            alert("Hey this cannot be empty");
        }
        else {
            document.getElementById("ul").appendChild(li);
        }
        document.getElementById("Ipnut").nodeValue = "";
        var thePanTag = document.createElement("SPAN");
        var text = document.createTextNode("\u00D7");
        thePanTag.className = "close";
        thePanTag.appendChild(text);
        li.appendChild(thePanTag);
        // Removing Tasks when clicked //
        for (index = 0; index < closeButton.length; index++) {
            document.getElementById('closeButton')[index].click = function () {
                var theDiv = this.parentElement;
                theDiv.style.display = "none";
            };
        }
    }
}
//# sourceMappingURL=Aufgabe9.js.map