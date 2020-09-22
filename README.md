# This example App clearly identifies what is "inheritance" and what is REAL!!! "object composition"

> composition solution best can be seen under "bigRefactoring-composition" folder
> And check the image zzz_info/11_continue....
> https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066842#overview

```
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
```

```
tsc --init
npm install nodemon concurrently
npm init - y
```

- create README.md
- create .gitignore
- create src & build folders
- change tsconfig.json to use these src & build folders:

```
"outDir": "./build" /* Redirect output structure to the directory. */,
"rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
```

- change package.json to arrange run & build scripts:

```
"scripts": {
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"
},
```

> first run of "npm start" might produce an error, because nodemon tries to execute "build/index.js" before tsc creates it!

- create index.ts under /src and start coding...

- in order to use "fs", we need to install node standard type definitions file:

```
npm i @types/node
```
