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
