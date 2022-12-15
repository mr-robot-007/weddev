import fs from "fs";
console.log("before");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// console.log("after");
// console.log("mean while");


// async function
fs.readFile("f1.txt",cb);
function cb (err, data) {
    console.log("data  "+ data);
}

console.log("after");
console.log("mean while");
