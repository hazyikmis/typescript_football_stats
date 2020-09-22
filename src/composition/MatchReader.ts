import { dateStrToDate } from './utils';
import { MatchResult } from './MatchResult';
//tuple structure:
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  //reader: DataReader

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
