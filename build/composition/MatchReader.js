"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        //reader: DataReader
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            //05_data_type_definition.JPG
            return [
                utils_1.dateStrToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
