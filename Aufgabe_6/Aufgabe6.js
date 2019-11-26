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
    document.querySelector(".Titel").innerHTML = "CO2 Emission in Europa";
    document.querySelector(".Emission2018").innerHTML = "" + europa2018;
    document.querySelector(".EmissionRelativ").innerHTML = "" + ValueTwoEuropa;
    document.querySelector(".EmissionÄnderung1").innerHTML = "" + ValueThreeEuropa;
    document.querySelector(".EmissionÄnderung2").innerHTML = "" + ValueFourEuropa;
    document.querySelector(".chart").setAttribute('style', 'height:' + europa2018);
}
window.addEventListener('load', function () {
    document.querySelector('.europa').addEventListener('click', functioneuropa);
});
function functionnordamerika() {
    document.querySelector(".Titel").innerHTML = "CO2 Emission in Nordamerika";
    document.querySelector(".Emission2018").innerHTML = "" + nordamerika2018;
    document.querySelector(".EmissionRelativ").innerHTML = "" + ValueTwoNordamerika;
    document.querySelector(".EmissionÄnderung1").innerHTML = "" + ValueThreeNordamerika;
    document.querySelector(".EmissionÄnderung2").innerHTML = "" + ValueFourNordamerika;
    document.querySelector(".chart").setAttribute('style', 'height:' + nordamerika2018);
}
window.addEventListener('load', function () {
    document.querySelector('.nordamerika').addEventListener('click', functionnordamerika);
});
function functionsüdamerika() {
    document.querySelector(".Titel").innerHTML = "CO2 Emission in Südamerika";
    document.querySelector(".Emission2018").innerHTML = "" + südamerika2018;
    document.querySelector(".EmissionRelativ").innerHTML = "" + ValueTwoSüdamerika;
    document.querySelector(".EmissionÄnderung1").innerHTML = "" + ValueThreeSüdamerika;
    document.querySelector(".EmissionÄnderung2").innerHTML = "" + ValueFourSüdamerika;
    document.querySelector(".chart").setAttribute('style', 'height:' + südamerika2018);
}
window.addEventListener('load', function () {
    document.querySelector('.südamerika').addEventListener('click', functionsüdamerika);
});
function functionafrika() {
    document.querySelector(".Titel").innerHTML = "CO2 Emission in Afrika";
    document.querySelector(".Emission2018").innerHTML = "" + afrika2018;
    document.querySelector(".EmissionRelativ").innerHTML = "" + ValueTwoAfrika;
    document.querySelector(".EmissionÄnderung1").innerHTML = "" + ValueThreeAfrika;
    document.querySelector(".EmissionÄnderung2").innerHTML = "" + ValueFourAfrika;
    document.querySelector(".chart").setAttribute('style', 'height:' + afrika2018);
}
window.addEventListener('load', function () {
    document.querySelector('.afrika').addEventListener('click', functionafrika);
});
function functionasien() {
    document.querySelector(".Titel").innerHTML = "CO2 Emission in Asien";
    document.querySelector(".Emission2018").innerHTML = "" + asien2018;
    document.querySelector(".EmissionRelativ").innerHTML = "" + ValueTwoAsien;
    document.querySelector(".EmissionÄnderung1").innerHTML = "" + ValueThreeAsien;
    document.querySelector(".EmissionÄnderung2").innerHTML = "" + ValueFourAsien;
    document.querySelector(".chart").setAttribute('style', 'height:' + asien2018);
}
window.addEventListener('load', function () {
    document.querySelector('.asien').addEventListener('click', functionasien);
});
function functionauastralien() {
    document.querySelector(".Titel").innerHTML = "CO2 Emission in Australien";
    document.querySelector(".Emission2018").innerHTML = "" + australien2018;
    document.querySelector(".EmissionRelativ").innerHTML = "" + ValueTwoAustralien;
    document.querySelector(".EmissionÄnderung1").innerHTML = "" + ValueThreeAustralien;
    document.querySelector(".EmissionÄnderung2").innerHTML = "" + ValueFourAustralien;
    document.querySelector(".chart").setAttribute('style', 'height:' + australien2018);
}
window.addEventListener('load', function () {
    document.querySelector('.australien').addEventListener('click', functionauastralien);
});
//# sourceMappingURL=Aufgabe6.js.map