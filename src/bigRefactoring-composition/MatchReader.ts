import { dateStrToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader'; //for only static method

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  //reader: DataReader

  //in order to shortcut in index.ts (rather than creating new instance and calling load method)
  //we can use static method(s) like below (pre-configured methods):
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
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
