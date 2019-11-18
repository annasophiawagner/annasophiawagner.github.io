var Info: string = "in Gruppenarbeit mit Elena Mayer und Sophie Campbell"

var leerzeichen: string = " ";
var überschrift1: string = "Carbon Dioxide Emission";
var überschrift2: string = "Europa:";
var überschrift3: string = "Afrika:";
var überschrift4: string = "Südamerika:";
var überschrift5: string = "Nordamerika:";
var überschrift6: string = "Asien:";
var überschrift7: string = "Australien";

var afrika2018: number = 1235.5;
var südamerika2018: number = 1261.5;
var europa2018: number = 4209.3;
var nordamerika2018: number = 6035.6;
var asien2018: number = 16274.1;
var australien2018: number = 2100.5;
var gesamt2018: number = (afrika2018 + südamerika2018 + europa2018 + nordamerika2018 + asien2018 + australien2018);

var afrika2008: number = 1028;
var südamerika2008: number = 1132.6;
var europa2008: number = 4965.7;
var nordamerika2008: number = 6600.4;
var asien2008: number = 12954.7;
var australien2008: number = 1993;
var gesamt2008: number = (afrika2008 + südamerika2008 + europa2008 + nordamerika2008 + asien2008+ australien2008);

var texteuropa1: string = "Nach Stand von 2018 beträgt die Emission von Europa ";
var texteuropa2: string = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var vergleichzahleuropa: number = (europa2018 - europa2008);
var vergleicheuropa1: string = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleicheuropa2: string = "Im Vergleich 2018 zu 2008 sind das in Europa ";

var textafrika1: string = "Nach Stand von 2018 beträgt die Emission von Afrika ";
var textafrika2: string = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var vergleichzahlafrika: number = (afrika2018-afrika2008);
var vergleichafrika1: string = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichafrika2: string = "Im Vergleich 2018 zu 2008 sind das in Afrika ";

var textsüdamerika1: string = "Nach Stand von 2018 beträgt die Emission von Südamerika ";
var textsüdamerika2: string = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var vergleichzahlsüdamerika: number = (südamerika2018 - südamerika2008);
var vergleichsüdamerika1: string = "Für Südamerika at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichsüdamerika2: string = "Im Vergleich 2018 zu 2008 sind das in Südamerika ";

var textnordamerika1: string = "Nach Stand von 2018 beträgt die Emission von Nordamerika ";
var textnordamerika2: string = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var vergleichszahlnordamerika: number = (nordamerika2018 - nordamerika2008);
var vergleichnordamerika1: string = "Für Nordamerika at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichnordamerika2: string = "Im Vergleich 2018 zu 2008 sind das in Nordamerika ";

var textasien1: string = "Nach Stand von 2018 beträgt die Emission von Asien ";
var textasien2: string = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var vergleichszahlasien: number = (asien2018 - asien2008);
var vergleichasien1: string = "Für Asien at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichasien2: string = "Im Vergleich 2018 zu 2008 sind das in Asien ";

var textaustralien1: string = "Nach Stand von 2018 beträgt die Emission von Australien ";
var textaustralien2: string = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var vergleichszahlaustralien: number = (australien2018 - australien2008);
var vergleichaustralien1: string = "Für Australien at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichaustralien2: string = "Im Vergleich 2018 zu 2008 sind das in Australien ";


console.log(Info)
console.log(leerzeichen)
console.log(überschrift1);
console.log(leerzeichen);
console.log(überschrift2);
console.log(texteuropa1 + europa2018 + " kg CO2.");
console.log(texteuropa2 + (europa2018 / gesamt2018 * 100) + "%.");
console.log(vergleicheuropa1 + (vergleichzahleuropa / europa2008 * 100) + "% verändert.");
console.log(vergleicheuropa2 + (europa2018 - europa2008) + " kg CO2.");

console.log(leerzeichen);

console.log(überschrift3);
console.log(textafrika1 + afrika2018 + " kg CO2.");
console.log(textafrika2 + (afrika2018 / gesamt2018 * 100) + "%.")
console.log(vergleichafrika1 + (vergleichzahlafrika / afrika2008 * 100) + "% verändert.");
console.log(vergleichafrika2 + (afrika2018 - afrika2008) + " kg CO2.");

console.log(leerzeichen);

console.log(überschrift4);
console.log(textsüdamerika1 + südamerika2018 + " kg CO2.");
console.log(textsüdamerika2 + (südamerika2018 / gesamt2018 * 100) + "%.");
console.log(vergleichsüdamerika1 + (vergleichzahlsüdamerika / südamerika2008 * 100) + "% verändert.");
console.log(vergleichsüdamerika2 + (südamerika2018 - südamerika2008) + " kg CO2.");

console.log(leerzeichen);

console.log(überschrift5);
console.log(textnordamerika1 + nordamerika2018 + " kg CO2.");
console.log(textnordamerika2 + (nordamerika2018 / gesamt2018 * 100) + "%.");
console.log(vergleichnordamerika1 + (vergleichszahlnordamerika / nordamerika2008 + 100) + "% verändert.");
console.log(vergleichnordamerika2 + (nordamerika2018 - nordamerika2008) + " kg CO2.");

console.log(leerzeichen);

console.log(überschrift6);
console.log(textasien1 + asien2018 + " kg CO2.");
console.log(textasien2 + (asien2018 / gesamt2018 * 100) + "%.");
console.log(vergleichasien1 + (vergleichszahlasien / asien2008 + 100) + "% verändert.");
console.log(vergleichasien2 + (asien2018 - asien2008) + " kg CO2.");

console.log(leerzeichen);

console.log(überschrift7);
console.log(textaustralien1 + australien2018 + " kg CO2.");
console.log(textaustralien2 + (australien2018 / gesamt2018 * 100) + "%.");
console.log(vergleichaustralien1 + (vergleichszahlaustralien / australien2008 + 100) + "% verändert.");
console.log(vergleichaustralien2 + (australien2018 - australien2008) + " kg CO2.");
