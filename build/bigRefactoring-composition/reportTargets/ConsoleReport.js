"use strict";
//This class needs to satisfy the OutputTarget interface defined in Summary class (by implementing "print" method)
//We are not restricted with "print" method, if our class needs other methods thats ok, we can add!
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
