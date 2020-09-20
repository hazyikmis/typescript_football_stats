"use strict";
//GENERICS
//silly method below
var addOne = function (a) {
    return a + 1;
};
var addTwo = function (a) {
    return a + 2;
};
var addThree = function (a) {
    return a + 3;
};
//clever way:
var add = function (a, b) {
    return a + b;
};
//////// silly ways below again ////
var HoldNumber = /** @class */ (function () {
    function HoldNumber() {
    }
    return HoldNumber;
}());
var HoldString = /** @class */ (function () {
    function HoldString() {
    }
    return HoldString;
}());
var holdNumber = new HoldNumber();
holdNumber.data = 123;
var holdString = new HoldString();
holdString.data = '123';
//////// generics ////
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    return HoldAnything;
}());
var holdNumber2 = new HoldAnything();
holdNumber2.data = 123;
var holdString2 = new HoldAnything();
holdString2.data = '123';
