//This class needs to satisfy the OutputTarget interface defined in Summary class (by implementing "print" method)
//We are not restricted with "print" method, if our class needs other methods thats ok, we can add!

import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}
