#!/usr/bin/env node
import fs from "fs";
import path from "path";
import chalk from "chalk";

let inputArr = process.argv.slice(2);


let optionsArr = [];
let filesArr = [];

for(let i = 0 ; i < inputArr.length;i++) {
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}

let isBothPresent = optionsArr.includes("-b") && optionsArr.includes("-n");
if(isBothPresent) {
    console.log(chalk.red("either enter -n or -b option"));
}



let content ="";
function updateContent(filePath) {
    let bufferContent = fs.readFileSync(filePath);
    content += bufferContent +"\r\n";
}

function readAllFiles() {
    for (let i = 0 ; i < filesArr.length;i++) {
        let filePath = path.join(process.cwd(),filesArr[i]);
        let doesExist = fs.existsSync(filePath);
        if(doesExist && isFileHelper(filePath))  {
            updateContent(filePath);
        }
        else{
            console.log(chalk.red(`${filesArr[i]} is not present;`));
        }
    }
    return;
}
readAllFiles();
let contentArr = content.split("\n")



let isSPresent = optionsArr.includes("-s");
if(isSPresent) {
    for(let i=1 ; i < contentArr.length;i++) {
        if(contentArr[i] == " " && contentArr[i-1]==" ") {
            contentArr[i] = null;
        }
        else if(contentArr[i] == " " && contentArr[i-1]==null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0 ; i < contentArr.length;i++) {
        if(contentArr[i]!=null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}

let isNPresent = optionsArr.includes("-n") ;
if(isNPresent) {
    for(let i = 0  ; i < contentArr.length;i++) {
        contentArr[i] = `${i+1} ${contentArr[i]}`;
    }
}

let isBPresent = optionsArr.includes("-b") ;
if(isBPresent){
    let counter = 1;
    for(let i = 0 ; i < contentArr.length;i++) {
        if(contentArr[i] != " ") {
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}

if(!isBothPresent) {
    console.log(contentArr.join("\n"));

}

function isFileHelper(filePath) {
    let a = fs.lstatSync(filePath);
    return a.isFile();
}