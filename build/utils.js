"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStrToDate = void 0;
exports.dateStrToDate = function (dateStr) {
    //28/10/2018
    //const dateParts = dateStr.split('/'); //['28', '10', '2018']
    //const dateParts = dateStr.split('/').map((val) => parseInt(val)); //[28, 10, 2018]
    var dateParts = dateStr
        .split('/')
        .map(function (val) { return parseInt(val); }); //[28, 10, 2018]
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
