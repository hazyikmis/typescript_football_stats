/* 
THE STRUCTURE OF THIS APP Summary CLASS AND OTHER RELATED CLASSES (defined under analyzers & reportTargets),
ALL TOGETHER SHOWS AN EXAMPLE OF VERY STRONG STRUCTURE !!! (of object composition)
*/

import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

/*
//METHOD $1
const csvFileReader = new CsvFileReader('football.csv');

//create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//let matches = matchReader.matches;
*/

//METHOD $2 (using static methods, without creating instances of classes)
//DID YOU NOTICE? How many import statements not required any more
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

/*
//METHOD #1
//const analyzer = new WinsAnalysis('Man United');
const analyzer = new WinsAnalysis('Arsenal');
const outputTarget = new ConsoleReport();
const summary = new Summary(analyzer, outputTarget);
*/

/*
//METHOD #1.1 (seems better than METHOD #1)
//const summary = new Summary(new WinsAnalysis('Arsenal'), new ConsoleReport());
const summary = new Summary(new WinsAnalysis('Arsenal'), new HtmlReport());
//summary.buildAndPrintReport(matches);
summary.buildAndPrintReport(matchReader.matches);
*/

//Summary.printHello(); //static method call, without creating an instance of Summary
//Summary.buildAndPrintReport(...); //NOT POSSIBLE!, Because buildAndPrintReport method is not static!

//METHOD #2 (using static methods, without creating instances of classes)
//DID YOU NOTICE? How many import statements not required any more
Summary.winsAnalysisConsoleReport('Fulham').buildAndPrintReport(
  matchReader.matches
);
// const summary = Summary.winsAnalysisConsoleReport('Arsenal');  //ATTENTION! : WITHOUT "new" KEYWORD
// summary.buildAndPrintReport(matchReader.matches);

Summary.winsAnalysisWithHtmlReport('West Ham').buildAndPrintReport(
  matchReader.matches
);
// const summary = Summary.winsAnalysisWithHtmlReport('Chelsea'); //ATTENTION! : WITHOUT "new" KEYWORD
// summary.buildAndPrintReport(matchReader.matches);
