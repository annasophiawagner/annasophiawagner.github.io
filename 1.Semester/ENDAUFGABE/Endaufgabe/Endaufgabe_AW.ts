// Karteninterface
interface Card {
    value: string;
    symbol: string;
}

//Kartenstapel als Array vom Interface
let cardStack: Card[] = [
    { value: "7", symbol: "Heart" }, { value: "7", symbol: "Tiles" }, { value: "7", symbol: "Clovers" }, { value: "7", symbol: "Pikes" },
    { value: "8", symbol: "Heart" }, { value: "8", symbol: "Tiles" }, { value: "8", symbol: "Clovers" }, { value: "8", symbol: "Pikes" },
    { value: "9", symbol: "Heart" }, { value: "9", symbol: "Tiles" }, { value: "9", symbol: "Clovers" }, { value: "9", symbol: "Pikes" },
    { value: "10", symbol: "Heart" }, { value: "10", symbol: "Tiles" }, { value: "10", symbol: "Clovers" }, { value: "10", symbol: "Pikes" },
    { value: "Joker", symbol: "Heart" }, { value: "Joker", symbol: "Tiles" }, { value: "Joker", symbol: "Clovers" }, { value: "Joker", symbol: "Pikes" },
    { value: "Queen", symbol: "Heart" }, { value: "Queen", symbol: "Tiles" }, { value: "Queen", symbol: "Clovers" }, { value: "Queen", symbol: "Pikes" },
    { value: "King", symbol: "Heart" }, { value: "King", symbol: "Tiles" }, { value: "King", symbol: "Clovers" }, { value: "King", symbol: "Pikes" },
    { value: "Ace", symbol: "Heart" }, { value: "Ace", symbol: "Tiles" }, { value: "Ace", symbol: "Clovers" }, { value: "Ace", symbol: "Pikes" }
];

// Arrays 
let handCards: Card[] = [];
let CpuHandCards: Card[] = [];
let playCards: Card[] = [];

//Beim Load Event wird das Spiel mit der Funktion startGame gestartet
window.addEventListener("load", startGame);

//Funktion um das Spiel zu starten. In ihr werden alle relevatnen Funktionen zum Spielstart augerufen und ein Event um eine neue Karte zu ziehen registriert
function startGame(): void {
    document.getElementById("drawstack").addEventListener("click", drawNewCard);
    shuffleCardstack();
    getPlayerStartCards(5);
    getCpuStartCards(5);
    displayHandCards();
    displayCpuCards();
    getStartCard();
}

//Funktion um die Startkarten des Spielers vom Kartenstapel zu ziehen
function getPlayerStartCards(cards: number): void {
    console.log("Die Anzahl an Startkarten beträgt: " + cards)
    for (let i: number = 0; i < cards; i++) {
        let cardDrawn: Card = cardStack[i];
        handCards.push(cardDrawn);
        cardStack.splice(i, 1);
    }
    console.log("Die Startkarten sind: ")
    console.log(handCards);
}

//Funktion um die Startkarten des Computergegners vom Kartenstapel zu ziehen
function getCpuStartCards(cards: number): void {
    console.log("Die Anzahl an Startkarten beträgt: " + cards)
    for (let i: number = 0; i < cards; i++) {
        let cardDrawn: Card = cardStack[i];
        CpuHandCards.push(cardDrawn);
        cardStack.splice(i, 1);
    }
    console.log("Die Startkarten des CPU´s sind: ")
    console.log(CpuHandCards);
}

//Funktion um die Startkarte des Ablagestapels vom Kartenstapel zu ziehen
function getStartCard(){
    playCards.push(cardStack[0]);
    cardStack.splice(0,1);
    console.log(playCards)
    for (let i: number = 0; i < playCards.length; i++) {
        let cardDrawn: HTMLElement = document.createElement("div");
        cardDrawn.innerText = playCards[i].value;
        cardDrawn.setAttribute("class", "cardsDrawn");
        cardDrawn.setAttribute("class", playCards[i].symbol);
        document.getElementById("playstack").appendChild(cardDrawn);
    }
}

//Funktion um die Karten des Spielers im HTML hinzuzufügen. Dabei werden zu der ID "handcards" für jede Karte ein div mit dazugehörigem Inhalt erzeugt (Text, Attribute, und Clickevent)
function displayHandCards(): void {
    console.log("Handkarten anzeigen")
    var element: HTMLElement = document.getElementById("handcards");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    for (let i: number = 0; i < handCards.length; i++) {
        let cardDrawn: HTMLElement = document.createElement("div");
        cardDrawn.innerText = handCards[i].value;
        cardDrawn.setAttribute("class", "cardsDrawn");
        cardDrawn.setAttribute("class", handCards[i].symbol);
        cardDrawn.addEventListener("click", playCard);
        cardDrawn.setAttribute("id", "" + i);
        document.getElementById("handcards").appendChild(cardDrawn);
    }
}

//Funktion um die Karten des Computergegners im HTML hinzuzufügen. Dabei werden zu der ID "cpucards" für jede Karte ein div mit dazugehörigem Inhalt erzeugt
function displayCpuCards(): void {
    console.log("CPU Karten anzeigen")
    var element: HTMLElement = document.getElementById("cpucards");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    for (let i: number = 0; i < CpuHandCards.length; i++) {
        let cardDrawn: HTMLElement = document.createElement("div");
        cardDrawn.setAttribute("class", "cardsDrawn");
        document.getElementById("cpucards").appendChild(cardDrawn);
    }
}

//Funktion zum mischen des Kartendecks 
function shuffleCardstack() {
    for (var i = cardStack.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardStack[i];
        cardStack[i] = cardStack[j];
        cardStack[j] = temp;
    }
}

//Funktion um beim Clicken auf eine Karte des Spielers gewünschte Prüfung ob Zug möglich auszuführen. Wenn Ja wird Karte aus Hand entfernt und auf Ablagestapel. Wenn Nein benachrichtigung
function playCard(element: Event){
    console.log("Clicked Card")
    let target: Element = <Element>element.target;
    if(playPossible(handCards[target.id]) === true) {
        playCards.push(handCards[Number(target.id)]);
        handCards.splice(Number(target.id), 1);
        displayPLayedCards();
        displayHandCards();
        checkWin()
        CpuTurn();
    }
    else{
        alert("Card can´t be played. Please try another or draw one");
    }
}

//Funktion um Karten auf dem Ablagestapel im HTML anzuzeigen. 
function displayPLayedCards(){
    for (let i: number = 0; i < playCards.length; i++) {
        let cardDrawn: HTMLElement = document.createElement("div");
        cardDrawn.innerText = playCards[i].value;
        cardDrawn.setAttribute("class", "cardsDrawn");
        cardDrawn.setAttribute("class", playCards[i].symbol);
        document.getElementById("playstack").appendChild(cardDrawn);
    }
}

/* Funktion um eine Simple KI des Computergegners zu simulieren. 
   Es wird eine Schleife nach der Anzahl an Handkarten durchlaufen und geprüft ob eine Karte spielbar ist.
   Die Prüfung erfolgt dabei auf gleiches Symbol oder gleicher Value.
   Ist dies der Fall wird eine der möglichen Spielbaren Karten gespielt und die Karte aus der Hand des CPU´s entfernt
   Wenn nicht wird eine Karte gezogen
*/
function CpuTurn(){
    var cardIndex = 0;
    for(let i: number = 0; i < CpuHandCards.length; i ++){
        if(CpuHandCards[i].symbol === playCards[playCards.length-1].symbol){
            console.log("Enemy Same Value")
            cardIndex = i;
        }
        else{
            if(CpuHandCards[i].value === playCards[playCards.length-1].value){
                console.log("Enemy Same symbol");
                cardIndex = i;
            }
        }
    }
    console.log(cardIndex)
    if(cardIndex > 0){
        playCards.push(CpuHandCards[cardIndex]);
        CpuHandCards.splice(cardIndex, 1);
        displayCpuCards();
        displayPLayedCards();
        checkWin()
    }
    else{
        CpuDrawNewCard();
    }
}

/* Funktion des Spielers um eine neue Karte vom Kartenstapel zu ziehen
   Oberste Karte aus Stapel wird dem handCard Array hinzugefügt und aus dem cardStackArray entfernt
   FUnktion DisplayhandCards um UI zu aktualisieren und CPU Turn
*/
function drawNewCard() {
    if(cardStack.length != 0){
        console.log("Clicked Draw Card")
        let newcard: Card = cardStack[0];
        handCards.push(newcard);
        cardStack.splice(0, 1);
        displayHandCards();
        CpuTurn(); 
    }
    else{
        alert("No Cards available! \n Please press F5 to Restart the Game");
    }
}

/* Funktion des CPU´s um eine neue Karte vom Kartenstapel zu ziehen
   Oberste Karte aus Stapel wird dem CpusHandCards Array hinzugefügt und aus dem cardStackArray entfernt
   FUnktion displayCpuCards um UI zu aktualisieren
*/
function CpuDrawNewCard(){
    if(cardStack.length != 0){
        let newCPUcard: Card = cardStack[0];
        CpuHandCards.push(newCPUcard);
        console.log(CpuHandCards);
        cardStack.splice(0, 1);
        displayCpuCards(); 
    }
    else{
        alert("No Cards available! \n Please press F5 to Restart the Game");
    }
}

// Funktion des Spielers, welche aufgerufen wird sobald er eine Karte spielen möchte. Prüfung auf Symbol und Value. Liefert einen Boolean zurück
function playPossible(card: Card):Boolean{
    if(card.symbol === playCards[playCards.length-1].symbol){
        console.log("Same Symbol")
        return true
    }
    else{
        if(card.value === playCards[playCards.length-1].value){
            console.log("Same Value")
            return true
        }
        else{
            console.log("Diffrent Symbol and value")
            return false
        }
    }
}

// Optionale Anforderung: Benachrichtigug an Spieler sobald CPU oder Player gewonnen hat.
function checkWin(){
    if(handCards.length === 0){
        alert("Congratulations \n You won :) \n To restart the Game please press F5")
    }
    if(CpuHandCards.length === 0){
        alert("Sorry \n You lost Bro :( \n To restart the Game please press F5")
    }
}