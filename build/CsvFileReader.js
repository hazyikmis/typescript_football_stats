"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    //filename: string = 'x.csv'; //rather than hard-coding like that its better to accept as paramter
    function CsvFileReader(filename) {
        this.filename = filename;
        //data: string[][] = [];
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            //.readFileSync('football.csv', { encoding: 'utf-8' })
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            //.map((row) => {
            .map(function (row) {
            return row.split(',');
        })
            //.map((row: string[]): any => {
            //.map((row: string[]): (Date | string | number | MatchResult)[] => {
            .map(function (row) {
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
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
