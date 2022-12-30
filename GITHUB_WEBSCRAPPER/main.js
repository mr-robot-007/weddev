let url = "https://github.com/topics";

import request from "request";
import { load } from "cheerio";
import getReposPageHtml from "./reposPage.js";
import chalk from "chalk";

request(url,cb);

function cb(error,response,html) {
    if(error) {
        console.log(error)
    }
    else{
        // console.log(html);
        getTopicLink(html);
    }
}


function getTopicLink(html) {
    let $ = load(html);
    console.log(chalk.greenBright("Issues extracted for Topics :-"))
    let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i = 0 ; i < linkElemArr.length;i++) {
        let href = $(linkElemArr[i]).attr("href");
        let topic = href.split("/").pop();
        // console.log(href);
        let fullLink = `https://github.com${href}`;
        // console.log(fullLink);
        getReposPageHtml(fullLink,topic);
    }
}

