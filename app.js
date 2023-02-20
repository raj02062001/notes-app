// const fs = require("fs");

// fs.writeFileSync("notes.txt", "This is my 1st node.js");

//================================================================================================
// const fs = require("fs");

// fs.appendFileSync("notes.txt", " hey...");
//================================================================================================
// const add = require("./utils.js");

// const sum = add(10, 10);

// console.log(sum);
//============================================Task=====================================================

// const vary = require("./notes.js");

// const print = vary();

//=====================================validator==========================================================
// const validator = require("validator");
// const vary = require("./notes.js");

// const print = vary();
// // console.log(validator.isEmail("raj@example.com"));
// console.log(validator.isURL("https://www.udemy.com/"));
//---------------------------------------------------chalk module----------------------------------------------

// const chalk = require("chalk");

// const greenmsg = chalk.red.inverse.bold.underline("Success");
// console.log(greenmsg);

//  // console.log(process.argv[2]);
//=========================================getting input from users=======================================================

// const chalk = require("chalk");
// const vary = require("./notes.js");

// const command = process.argv[2];
// console.log(process.argv);

// if (command === "add") {
//   console.log("adding");
// } else if (command === "remove") {
//   console.log("removing");
// }

//===============================================yargs=================================================
// const chalk = require("chalk");
// const yargs = require("yargs");
// const vary = require("./notes.js");

// yargs.version("1.1.0");

// yargs.command({
//   command: "add",
//   describe: "add a new role",
//   builder: {
//     title: {
//       describe: "note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     // console.log("adding a new role!", argv);
//     console.log("Title: " + argv.title);
//     console.log("Body:" + argv.body);
//   },
// });

// yargs.command({
//   command: "remove",
//   describe: "remove a role",
//   handler: function () {
//     console.log("removing a role");
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "list a role",
//   handler: function () {
//     console.log("listing a role");
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "describe a role",
//   handler: function () {
//     console.log("reading role");
//   },
// });

// yargs.parse();
// // console.log(yargs.argv);

//================================================================================================
// const chalk = require("chalk");
// const yargs = require("yargs");
// const vary = require("./notes.js");

// yargs.version("1.1.0");

// yargs.command({
//   command: "add",
//   describe: "add a new role",
//   builder: {
//     title: {
//       describe: "note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     // console.log("adding a new role!", argv);
//     console.log("Title: " + argv.title);
//     console.log("Body:" + argv.body);
//   },
// });

// yargs.command({
//   command: "remove",
//   describe: "remove a role",
//   handler: function () {
//     console.log("removing a role");
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "list a role",
//   handler: function () {
//     console.log("listing a role");
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "describe a role",
//   handler: function () {
//     console.log("reading role");
//   },
// });

// yargs.parse();
// console.log(yargs.argv);

//=================================================================================================
const chalk = require("chalk");
const { string } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "add a new role",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("adding a new role!", argv);
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a role",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list a role",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "describe a role",
  builder: {
    title: {
      describe: "Read title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});
yargs.parse();
