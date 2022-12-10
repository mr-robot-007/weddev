let fs = require("fs");

// files -> create, read update, delete


//read
//reads data and store it in binary format
let buffer = fs.readFileSync("abc.js");
console.log("bin data ",buffer);

// to convert data to string add it to a string
console.log("bin data "+buffer);


// create 


//create a file
// fs.openSync("abc.txt","w");


//if no file then it creates, else -- it replaces all the content
// fs.writeFileSync("abc.txt","hum aj kush nhe h ")


//update
// add data to last of file 
// fs.appendFileSync("abc.txt","thik h");

//folder
// fs.mkdirSync("meriDirectory");

// fs.writeFileSync("meriDirectory/meriFile.txt","Mera content");


// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i = 0 ; i< content.length;i++) {
//     console.log("file ",content[i]," is removed");
//     //delete file
//     fs.unlinkSync("meriDirectory/"+content[i]);
// }

// deletes folder
// fs.rmdirSync("meriDirectory");



// fs.existSync -> if a file exits at a path , it gives true else gives false
// let doesPathExist = fs.existsSync("abc.txt");
// console.log("does path exists ? ", doesPathExist);

// fs.lstatSync -> tell whether path is of folder or file

// let detailObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// console.log("details obj ",detailObj);
// let ans = detailObj.isFile();
// console.log(ans);
// ans = detailObj.isDirectory();
// console.log(ans);


// for(let i = 1 ; i <= 10 ;i++) {
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(dirPathToMake+"\\" +"readme.md",`#readme for ${dirPathToMake}`)
// }