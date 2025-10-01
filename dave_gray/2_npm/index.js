//? we can install npm packages globally or for specific project.
// npm install/add/i [package name] -g

//? nodemon
// nodemon work like live server for js, mjs and json
// Starting in index.js
// exit nodemon by ^C

//? Add a package to our project
//  - initialize npm first
//  npm init
//  it will ask some questions

//? package.json: 
//  - this will go to git repo so we don't need to transfer packages.
//  - build command will install all packages.
//  - or the programmer can read the file install all packages.
//  - all installed packages will be at [dependencies] section.
// any dependency that we add can also pull in other dependencies.
// always add .gitignore and write inside it "node_modules"

//? when clone a repo that has package.json
// npm install: will install all packages needed.

//? use installed package [date-fns]
const { format } = require ('date-fns');

// Date and its format
// read the docs... 
console.log (format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));

// --save-dev/-D save the package as [dev-dependency].
// npm i nodemon -D

//? work with scripts:
// like "start": "node index". ====> npm start.
// like "dev": "nodemon index". ===> npm run dev.

// npm i uuid: to generate IDs
const {v4: uuid} = require ('uuid');// import specific version [v4] as/alias [uuid].
// const {v4} = require ('uuid'); //* can see this.
// const uuid = require ('uuid'); //* can see also this. console.log (uuid.v4)

console.log(uuid());

//? "^8.3.2"
// 8.3.2: mainorVersion.secondVersion.patch
//  - ^: go ahead and allow an update to the second version and patch if needed but.
//       do not update the minor version. //? Save
//? "8.3.2:"
//  - use this version
//? "~8.3.2"
//  - ~: go ahead and allow an update to the patch if needed but.
//       do not update the minor or second versions.
//? "*"
//  - *: go ahead and update everything all the time: //! Not too save


//? To install specific version:
//  - npm i uuid@8.3.2

//? check for packages updates
//  - npm update

//? uninstall packges:
//! It will not remove from the script so must check for it
// npm uninstall [package]
// npm rm [package] [-D or -g]



