import fs from "fs";


for(let i = 1  ;i<=5;i++) {
    fs.writeFileSync(`file${i}.txt`,`I am f${i} \n \n \n \n \n \n \nHere is also some content of file${i}`);
}