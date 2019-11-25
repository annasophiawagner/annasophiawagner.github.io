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
var ValueTwoAfrika = (afrika2018 / gesamt2018) * 100;
var ValueThreeAfrika = (afrika2018 - afrika2008) * 100 / afrika2008;
var ValueFourAfrika = (afrika2018 - afrika2008);
var ValueTwoSüdamerika = (südamerika2018 / gesamt2018) * 100;
var ValueThreeSüdamerika = (südamerika2018 - südamerika2008) * 100 / südamerika2008;
var ValueFourSüdamerika = (südamerika2018 - südamerika2008);
var ValueTwoEuropa = (europa2018 / gesamt2018) * 100;
var ValueThreeEuropa = (europa2018 - europa2008) * 100 / europa2008;
var ValueFourEuropa = (europa2018 - europa2008);
var ValueTwoNordamerika = (nordamerika2018 / gesamt2018) * 100;
var ValueThreeNordamerika = (nordamerika2018 - nordamerika2008) * 100 / nordamerika2008;
var ValueFourNordamerika = (nordamerika2018 - nordamerika2008);
var ValueTwoAsien = (asien2018 / gesamt2018) * 100;
var ValueThreeAsien = (asien2018 - asien2008) * 100 / asien2008;
var ValueFourAsien = (asien2018 - asien2008);
var ValueTwoAustralien = (australien2018 / gesamt2018) * 100;
var ValueThreeAustralien = (australien2018 - australien2008) * 100 / australien2008;
var ValueFourAustralien = (australien2018 - australien2008);
function functioneuropa() {
    document.querySelector("#Title").innerHTML = "CO2 Emissionen in Europa";
    document.querySelector("#ValueOneText").innerHTML = "Emission in Europa Stand 2018";
    document.querySelector("#ValueOne").innerHTML = "" + europa2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoEuropa;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeEuropa;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourEuropa;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoEuropa + '%');
}
window.addEventListener('load', function () {
    this.document.querySelector('#europa').addEventListener('click', functioneuropa);
});
function functionnordamerika() {
    document.querySelector("#Titel").innerHTML = "CO2 Emissionen in Europa";
    document.querySelector("ValueOneText").innerHTML = "Emission in Nordamerika Stand 2018";
    document.querySelector("ValueOne").innerHTML = "" + nordamerika2018;
    document.querySelector("ValueTwo").innerHTML = "" + ValueTwoNordamerika;
    document.querySelector("ValueThree").innerHTML = "" + ValueThreeNordamerika;
    document.querySelector("ValueFour").innerHTML = "" + ValueFourNordamerika;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoNordamerika + '%');
}
//# sourceMappingURL=Aufgabe6.js.map