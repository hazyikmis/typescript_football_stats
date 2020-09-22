//This class needs to satisfy the OutputTarget interface defined in Summary class (by implementing "print" method)
//We are not restricted with "print" method, if our class needs other methods thats ok, we can add!

import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
