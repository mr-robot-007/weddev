let fs = require("fs");
let path = require("path");
let destPath;
function organiseFn(dirPath) {
  // console.log("Organise command implemented for ", dirPath);
  //1 . input -> directory path given
  if (dirPath == undefined) {
    dirPath = process.cwd();
  }
  let doesExist = fs.existsSync(dirPath);
  if (doesExist) {
    // 2. create -> organised_files -> directory
    destPath = path.join(dirPath, "organised_files");
    if (fs.existsSync(destPath) == false) {
      fs.mkdirSync(destPath);
    }
  } else {
    console.log("Kindly enter correct path");
    return;
  }
  organiseHelper(dirPath, destPath);
}
function organiseHelper(src, dest) {
  // 3 . identify categories of all fthe files present in that input directory
  //get name of all files
  let childNames = fs.readdirSync(src);
  // console.log(childNames);
  for (let i = 0; i < childNames.length; i++) {
    // add src path infront of childnames , to get path of childNames
    let childPath = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childPath).isFile();
    if (isFile) {
      // console.log(childNames[i]);
      let ct = getCategory(childNames[i]);
      console.log(childNames[i], "belongs to --> ", ct);

      // 4. copy /cut  files to that organized directory inside of any of category folder
      sendFiles(childPath, dest, ct);
    }
  }
}

function sendFiles(srcFilePath, dest, category) {
  //
  let categoryPath = path.join(dest, category);
  if (fs.existsSync(categoryPath) == false) {
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(categoryPath, fileName);
  // creates a file with destFilanme and copy content of file from src to dest file
  fs.copyFileSync(srcFilePath, destFilePath);
  // delete src file
  fs.unlinkSync(srcFilePath);
  console.log(fileName, "copied to ", categoryPath);
}

function getCategory(name) {
  let ext = path.extname(name);
  ext = ext.slice(1);
  // console.log(ext);
  for (let type in types) {
    let currType = types[type];
    for (let i = 0; i < currType.length; i++) {
      if (ext == currType[i]) {
        return type;
      }
    }
  }
  return "others";
}

module.exports = {
    organiseKey : organiseFn
}