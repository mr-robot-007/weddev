#!/usr/bin/env node
let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");

let types = {
  media: ["mp4", "mkv", "jpg", "jpeg"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xsl",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "text",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};
// console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node mainj.js help

let command = inputArr[0];
switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organise":
    organiseObj.organiseKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey(inputArr[1]);
    break;
  default:
    console.log("Please Input right command ");
}
