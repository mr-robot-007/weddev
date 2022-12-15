import request from "request";
import cheerio from "cheerio";
import chalk from "chalk";

console.log("before")
request('https://www.worldometers.info/coronavirus/', cb);
console.log("after")
function cb (error, response, body) {
    if(error) {
        console.error('error:', error); // Print the error if one occurred
    }else{
        handleHTML(body);
        // console.log('statusCode:',response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
    }
  }

function handleHTML(html) {
    const selTool = cheerio.load(html);
    let h1s = selTool("h1");
    let contenArr = selTool("#maincounter-wrap span")

    // [i] -> wrap selTool
    // for(let i = 0 ;i < contenArr.length;i++) {
    //     let data =selTool(contenArr[i]).text();
    //     console.log("data " , data);
    // }
    // console.log(h1s.length);

    let total = selTool(contenArr[1]).text();
    let deaths = selTool(contenArr[2]).text();
    let reacovered = selTool(contenArr[0]).text();

    console.log(chalk.gray("total cases : ",total));
    console.log(chalk.red("deaths : ",deaths));
    console.log(chalk.green("recoverd : ",reacovered));
    

}