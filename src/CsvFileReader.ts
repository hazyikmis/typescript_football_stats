import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
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
      });
  }
}
