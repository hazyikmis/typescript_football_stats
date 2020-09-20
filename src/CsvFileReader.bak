import fs from 'fs';
import { dateStrToDate } from './utils';
import { MatchResult } from './MatchResult';

//tuple structure:
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  //data: string[][] = [];
  data: MatchData[] = [];
  //filename: string = 'x.csv'; //rather than hard-coding like that its better to accept as paramter
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      //.readFileSync('football.csv', { encoding: 'utf-8' })
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      //.map((row) => {
      .map((row: string): string[] => {
        return row.split(',');
      })
      //.map((row: string[]): any => {
      //.map((row: string[]): (Date | string | number | MatchResult)[] => {
      .map(
        (row: string[]): MatchData => {
          //05_data_type_definition.JPG
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
      );
  }
}
