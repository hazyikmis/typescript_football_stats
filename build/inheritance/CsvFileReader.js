"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
//import { dateStrToDate } from './utils';
//import { MatchResult } from './MatchResult';
//tuple structure:
//type MatchData = [Date, string, string, number, number, MatchResult, string];
//WE WANT THAT CsvFileReader CLASS SHOULD BE REUSABLE WITH ANY KIND OF DATA
//BUT IT CURRENTLY DEPENDS ON "type MatchData"
//AND MatchData TYPE CUSTOMIZED WITH ONLY WORK WITH 'football.csv'
var CsvFileReader = /** @class */ (function () {
    //filename: string = 'x.csv'; //rather than hard-coding like that its better to accept as paramter
    function CsvFileReader(filename) {
        this.filename = filename;
        //data: string[][] = [];
        //data: MatchData[] = [];
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
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
