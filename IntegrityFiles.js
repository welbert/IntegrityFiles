#! /usr/bin/env node

'use strict';
//console.time("Test");
var sha1 = require('sha1-file');
var fs = require('fs');
var path = require('path');
var utils = require('./lib/Utils');


var dir = process.argv[2];
if (!dir) {
  console.log("Folder to generate integrity files is required");
  console.log("Usage: IntegrityFiles [folder]");
  process.exit();
}

var objHashFiles = {};

var files = utils.listAllFiles(dir);
files.forEach((file) => {
  if (!file.endsWith("IntegrityFile.txt"))
    objHashFiles[file] = sha1(file);
});

//console.timeEnd("Test");

fs.writeFile(
  path.resolve(dir, "IntegrityFile.txt"),
  JSON.stringify(utils.sortDictionaryOnKeys(objHashFiles), null, '\r\n'), function (err) { }
);


