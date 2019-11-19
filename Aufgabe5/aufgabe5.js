var Info = "(in Gruppenarbeit mit Elena Mayer und Sophie Campbell)";
var leerzeichen = " ";
var überschrift1 = "CO2 EMISSIONEN WELTWEIT";
var überschrift2 = "EUROPA";
var überschrift3 = "AFRIKA";
var überschrift4 = "SÜDAMERIKA";
var überschrift5 = "NORDAMERIKA";
var überschrift6 = "ASIEN";
var überschrift7 = "AUSTRALIEN";

var afrika2018 = 1235.5;
var südamerika2018 = 1261.5;
var europa2018 = 4209.3;
var nordamerika2018 = 6035.6;
var asien2018 = 16274.1;
var australien2018 = 2100.5;
var gesamt2018 = (afrika2018 + südamerika2018 + europa2018 + nordamerika2018 + asien2018 + australien2018);

var afrika2008 = 1028;
var südamerika2008 = 1132.6;
var europa2008 = 4965.7;
var nordamerika2008 = 6600.4;
var asien2008 = 12954.7;
var australien2008 = 1993;
var gesamt2008 = (afrika2008 + südamerika2008 + europa2008 + nordamerika2008 + asien2008 + australien2008);

var texteuropa1 = "Nach Stand von 2018 beträgt die Emission von Europa ";
var texteuropa2 = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var vergleichzahleuropa = (europa2018 - europa2008);
var vergleicheuropa1 = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleicheuropa2 = "Im Vergleich 2018 zu 2008 sind das in Europa ";

var textafrika1 = "Nach Stand von 2018 beträgt die Emission von Afrika ";
var textafrika2 = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var vergleichzahlafrika = (afrika2018 - afrika2008);
var vergleichafrika1 = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichafrika2 = "Im Vergleich 2018 zu 2008 sind das in Afrika ";

var textsüdamerika1 = "Nach Stand von 2018 beträgt die Emission von Südamerika ";
var textsüdamerika2 = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var vergleichzahlsüdamerika = (südamerika2018 - südamerika2008);
var vergleichsüdamerika1 = "Für Südamerika at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichsüdamerika2 = "Im Vergleich 2018 zu 2008 sind das in Südamerika ";

var textnordamerika1 = "Nach Stand von 2018 beträgt die Emission von Nordamerika ";
var textnordamerika2 = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var vergleichszahlnordamerika = (nordamerika2018 - nordamerika2008);
var vergleichnordamerika1 = "Für Nordamerika at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichnordamerika2 = "Im Vergleich 2018 zu 2008 sind das in Nordamerika ";

var textasien1 = "Nach Stand von 2018 beträgt die Emission von Asien ";
var textasien2 = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var vergleichszahlasien = (asien2018 - asien2008);
var vergleichasien1 = "Für Asien at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichasien2 = "Im Vergleich 2018 zu 2008 sind das in Asien ";

var textaustralien1 = "Nach Stand von 2018 beträgt die Emission von Australien ";
var textaustralien2 = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var vergleichszahlaustralien = (australien2018 - australien2008);
var vergleichaustralien1 = "Für Australien at sich 2018 im Vergleich zu 2008 die Emission um ";
var vergleichaustralien2 = "Im Vergleich 2018 zu 2008 sind das in Australien ";


console.log(überschrift1);
console.log(Info);
console.log(leerzeichen);

console.log(überschrift2);
console.log(texteuropa1 + europa2018 + " kg CO2.");
console.log(texteuropa2 + (europa2018 / gesamt2018 * 100) + "%.");
console.log(vergleicheuropa1 + (vergleichzahleuropa / europa2008 * 100) + "% verändert.");
console.log(vergleicheuropa2 + (europa2018 - europa2008) + " kg CO2.");
console.log(leerzeichen);

console.log(überschrift3);
console.log(textafrika1 + afrika2018 + " kg CO2.");
console.log(textafrika2 + (afrika2018 / gesamt2018 * 100) + "%.");
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
//# sourceMappingURL=aufgabe5.js.map