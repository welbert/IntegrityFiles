module.exports = {
  sortDictionaryOnKeys: sortOnKeys,
  listAllFiles: walkSync
};

var fs = require('fs');
var path = require('path');

function sortOnKeys(dict) {

  var sorted = [];
  for (var key in dict) {
    sorted[sorted.length] = key;
  }
  sorted.sort();

  var tempDict = {};
  for (var i = 0; i < sorted.length; i++) {
    tempDict[sorted[i]] = dict[sorted[i]];
  }

  return tempDict;
}


function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    }
    catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
      else throw err;
    }
  });
  return filelist;
}