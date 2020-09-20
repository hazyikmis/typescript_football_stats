import { CsvFileReader } from './CsvFileReader';
import { dateStrToDate } from './utils';
import { MatchResult } from './MatchResult';

//tuple structure:
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  //no need to define the constructor below!
  // constructor(public filename: string) {
  //   super(filename);
  // }

  mapRow(row: string[]): MatchData {
    return [
      dateStrToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //'H', 'A' or 'D'
      row[6],
    ];
  }
}
