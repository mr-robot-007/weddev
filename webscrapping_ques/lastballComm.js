import  cheerio, { load }  from "cheerio";
import request from "request";


const url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/gujarat-titans-vs-rajasthan-royals-final-1312200/ball-by-ball-commentary";

request(url,cb);

function cb(err,response,html) {
    if(err) {
        console.log(err);
    }
    else{
        // console.log(html);
        extractHTML(html);
    }
}   


function extractHTML(html) {
    const $ = load(html);
    let elesArr = $(".ds-hover-parent .ds-grow");
    let text = $(elesArr[0]).text();
    let htmldata = $(elesArr[0]).html();
    console.log("text data ",text);
    // console.log("html ",htmldata);
}