function buildDigit(inputs) {
    return inputs.toString().split("");
}

function buildLcdDigit(digits) {
    var lcdDigits = [];
    var fix = require("../test/fixtures.js");

    digits.forEach(function (digit) {
        lcdDigits.push(fix.loadLcdDigits()[digit]);
    });

    return lcdDigits;
}

function buildLcdLine(lcdDigits) {
    var lcdLines;
    var allFirstLine = '';
    var allSecondLine = '';
    var allThirdLine = '';

    lcdDigits.forEach(function (lcdDigit) {
        allFirstLine += lcdDigit.firstLine + ' ';
        allSecondLine += lcdDigit.secondLine + ' ';
        allThirdLine += lcdDigit.thirdLine + ' ';
    });
    lcdLines = {allFirstLine:allFirstLine,allSecondLine:allSecondLine,allThirdLine:allThirdLine};

    return lcdLines;
}

function buildLcdDigitsText(lcdLines) {
    return lcdLines.allFirstLine + '\n' + lcdLines.allSecondLine + '\n' + lcdLines.allThirdLine + '\n';
}

function consoleLcdDigits(inputs) {
    var digits = buildDigit(inputs);
    var lcdDigits = buildLcdDigit(digits);
    var lcdLines = buildLcdLine(lcdDigits);
    var lcdDigitsText = buildLcdDigitsText(lcdLines);

    console.log(lcdDigitsText);
}


module.exports = {consoleLcdDigits:consoleLcdDigits,buildDigit:buildDigit,buildLcdDigit:buildLcdDigit,buildLcdLine:buildLcdLine,buildLcdDigitsText:buildLcdDigitsText};