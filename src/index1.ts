import fs from 'fs';

//const matches = fs.readFileSync('football.csv', {encoding: 'utf-8'});
const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  //.map((row) => {
  .map((row: string): string[] => {
    return row.split(',');
  });

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
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

//possible to define like below
//enum MatchResult {HomeWin, AwayWin, Draw}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
