"use strict";
/*
Now here's the key.
The total key to composition when we define an instance of class summary we're going to pass in an instance
to use an instance of an object to use as the analyzer and an instance to use as the output target as
well.

So in other words when we create an instance of class summary we have to pass in to the constructor
one of these different analysis objects over here (AverageGoalsAnalysis or WinsAnalysis) and
one of these different reporting objects over here (ConsoleReport or HtmlReport).

And those are going to be used to be assigned to the analyzer property and the output target property.
This is the key to object composition.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis"); //for only static method
var HtmlReport_1 = require("./reportTargets/HtmlReport"); //for only static method
var ConsoleReport_1 = require("./reportTargets/ConsoleReport"); //for only static method
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    //static methods could be called without creating an instance of the class
    //printHello method below could be called directly (Summary.printHello())
    //but to call buildAndPrintReport method
    //you need to create instance of Summary class
    Summary.printHello = function () {
        console.log('Hi');
    };
    //in order to shortcut in index.ts (rather than creating new instance and calling buildAndPrintReport method)
    //we can use static method(s) like below (pre-configured methods):
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.winsAnalysisConsoleReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
//new Summary(new WinsAnalysis(), new ConsoleReport());
/*
Now last thing we have to do is make sure that we actually put in some implementation inside of our
class summary so that needs to have a buildAndReport method.
That's going to taken all that match data it needs to take that MatchData and pump it into the analyzer.
Remember the analyzer has the run method that needs that MatchData to run correctly.
The analyzers then going to return a String to use as the report.
So then buildAndPrint method we'll take that string and toss it off to our report where our output
target I should say let's now implement buildAndPrintReport inside of class summary so back inside
of summary underneath the constructor I will define buildAndPrintReport this thing needs to take
in our list of matches which is going to be an array of MatchData topples and it's not going to return
anything so then inside of here we're going to take a look at the analyzer we were provided which is
available as this dot analyzer
and on that thing we're going to call a run and pass in the list of matches that we were given to this
method to now run is going to give us back a string.
And that's going to be the actual report that we now want to somehow give to the user.
*/
