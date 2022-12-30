import request from "request";
import { load } from "cheerio";
import fs from "fs";
import {fileURLToPath} from 'url';
import path from "path";
import pdfkit from "pdfkit";
// let url = "https://github.com/olive-editor/olive/issues";

function getIssuesPageHtml(url,topic,repoName) {
    request(url,cb);
    function cb(error,response,html) {
        if(error) {
            console.log(error)
        }
        else{
            // console.log(html);
            getIssues(html);
        }
    }

    function getIssues(html) {
        let $ = load(html);
        let issueElemArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        // console.log(issueElemArr.text());
        // console.log();
        let issues = [];
        // console.log(issueElemArr.length);
        for(let i = 0 ; i < issueElemArr.length;i++) {
            let link = $(issueElemArr[i]).attr("href");
            // console.log(link);
            let fullLink= `https://github.com/${link}`;
            issues.push(fullLink);
        }
        // console.log(topic,"       ",issues);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        let folderPath = path.join(__dirname,topic) ;
        dirCreater(folderPath);
        let filePath = path.join(folderPath,repoName+".pdf");
        let text = JSON.stringify(issues ,null, 4)
        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.fillColor('blue').text(text);
        pdfDoc.end();
        // fs.writeFileSync(filePath,);

    }
    

}

function dirCreater(folderPath) {
    if(fs.existsSync(folderPath) == false) {
      fs.mkdirSync(folderPath);
    }
  }


export default getIssuesPageHtml;