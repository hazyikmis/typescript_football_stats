"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    //filename: string = 'x.csv'; //rather than hard-coding like that its better to accept as paramter
    function CsvFileReader(filename) {
        this.filename = filename;
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
        });
        //.map((row: string[]): any => {
        //.map((row: string[]): (Date | string | number | MatchResult)[] => {
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
