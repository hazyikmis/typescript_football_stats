"use strict";
//THIS IS BAD-CODING EXAMPLE:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//const matches = fs.readFileSync('football.csv', {encoding: 'utf-8'});
var matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    //.map((row) => {
    .map(function (row) {
    return row.split(',');
});
//console.log(matches);
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
