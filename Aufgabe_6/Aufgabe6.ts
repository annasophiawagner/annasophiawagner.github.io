
var leerzeichen: string = " ";
var überschrift1: string = "CO2 EMISSIONEN WELTWEIT";
var überschrift2: string = "EUROPA";
var überschrift3: string = "AFRIKA";
var überschrift4: string = "SÜDAMERIKA";
var überschrift5: string = "NORDAMERIKA";
var überschrift6: string = "ASIEN";
var überschrift7: string = "AUSTRALIEN";

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

var ValueTwoAfrika: number = (afrika2018 / gesamt2018) * 100;
var ValueThreeAfrika: number = (afrika2018 - afrika2008) * 100 / afrika2008;
var ValueFourAfrika: number = (afrika2018 - afrika2008);

var ValueTwoSüdamerika: number = (südamerika2018 / gesamt2018) * 100;
var ValueThreeSüdamerika: number = (südamerika2018 - südamerika2008) * 100 / südamerika2008;
var ValueFourSüdamerika: number = (südamerika2018 - südamerika2008);

var ValueTwoEuropa: number = (europa2018 / gesamt2018) * 100;
var ValueThreeEuropa: number = (europa2018 - europa2008) * 100 / europa2008;
var ValueFourEuropa: number = (europa2018 - europa2008);

var ValueTwoNordamerika: number = (nordamerika2018/ gesamt2018) * 100;
var ValueThreeNordamerika: number = (nordamerika2018- nordamerika2008) * 100 / nordamerika2008;
var ValueFourNordamerika: number = (nordamerika2018 - nordamerika2008);

var ValueTwoAsien: number = (asien2018 / gesamt2018) * 100;
var ValueThreeAsien: number = (asien2018 - asien2008) * 100 / asien2008;
var ValueFourAsien: number = (asien2018- asien2008);

var ValueTwoAustralien: number = (australien2018 / gesamt2018) * 100;
var ValueThreeAustralien: number = (australien2018- australien2008) * 100 / australien2008;
var ValueFourAustralien: number = (australien2018 - australien2008);

function functioneuropa () {
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

function functionnordamerika () {
    document.querySelector("#Titel").innerHTML = "CO2 Emissionen in Europa";
    document.querySelector("ValueOneText").innerHTML = "Emission in Nordamerika Stand 2018";
    document.querySelector("ValueOne").innerHTML = "" + nordamerika2018;
    document.querySelector("ValueTwo").innerHTML = "" + ValueTwoNordamerika;
    document.querySelector("ValueThree").innerHTML = "" + ValueThreeNordamerika;
    document.querySelector("ValueFour").innerHTML = "" + ValueFourNordamerika;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoNordamerika + '%');
}