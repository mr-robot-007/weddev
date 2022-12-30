// .text-bold.wb-break-word


// let url = "https://github.com/topics/topics/pico-8";

import request from "request";
import { load } from "cheerio";
import chalk from "chalk";
import getIssuesPageHtml from "./issue.js";

function getReposPageHtml(url,topic) {
    request(url,cb);
    function cb(error,response,html) {
        if(error) {
            console.log(error)
        }
        else{
            // console.log(html);
            getReposLink(html);
        }
    }
    function getReposLink(html) {
        let $ = load(html);
        let linkElemArr = $(".text-bold.wb-break-word");
        console.log(chalk.yellowBright(`${topic} ✅`));
        for(let i = 0 ; i < linkElemArr.length;i++) {
            let href = $(linkElemArr[i]).attr("href");
            let fullLink= `https://github.com${href}/issues`;
            // console.log(fullLink);
            let repoName= href.split("/").pop();

            getIssuesPageHtml(fullLink,topic,repoName);
        }
    }
}







export default getReposPageHtml;