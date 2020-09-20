"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import fs from 'fs';
//import { CsvFileReader } from './CsvFileReader';  //no longer usable directly, because its converted to abstract class
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
//const matches = fs.readFileSync('football.csv', {encoding: 'utf-8'});
//const matches = fs
//   .readFileSync('football.csv', { encoding: 'utf-8' })
//   .split('\n')
//   //.map((row) => {
//   .map((row: string): string[] => {
//     return row.split(',');
//  });
//const reader = new CsvFileReader('football.csv');
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read(); //open the football.csv file reads all data ad loads it to "data" property of reader
var matches = reader.data;
console.log(matches[0]);
//const dateOfFirstMatch = matches[0][0];
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
//Better approach: using object
/*
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D',
};
*/
//Best approach: using ENUM types (enum: enumeration)
//moved to MatchResult.ts
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D',
// }
//possible to define like below
//enum MatchResult {HomeWin, AwayWin, Draw}
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
