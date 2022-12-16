// import chalk from "chalk";
import { load } from "cheerio";
import request from "request";
import chalk from "chalk";

const url =
  "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/gujarat-titans-vs-rajasthan-royals-final-1312200/full-scorecard";

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    // console.log(html);
    extractHTML(html);
  }
}

function extractHTML(html) {
  const $ = load(html);
  let teamArr = $(".ds-flex.ds-text-typo-title.ds-mb-2");

  let wTeamName;
  for (let i = 0; i < teamArr.length; i++) {
    let hasClass = $(teamArr[i]).hasClass("ds-opacity-50");
    if (hasClass == false) {
      let winningTeam = $(teamArr[i]).find(".ds-text-tight-l");
      wTeamName = winningTeam.text();
      //   console.log();
    }
    // console.log("h")
  }

  let inningsArr = $(".ds-rounded-lg.ds-mt-2");
  let htmlStr = "";
  for (let i = 0; i < inningsArr.length; i++) {
    // team names
    let teamNameEle = $(inningsArr[i]).find(".ds-capitalize");
    let teamName = teamNameEle.text();
    let tableElement = $(
      $(inningsArr[i]).find(
        ".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table"
      )
    );
    let allBowlers = $(tableElement[0]).find("tr");
    for (let j = 0; j < allBowlers.length; j++) {
      let allColsOfplayer = $(allBowlers[j]).find(
        ".ds-w-0.ds-whitespace-nowrap.ds-min-w-max"
      );
      // oth index has name
      let playerName = $(allColsOfplayer[0]).text();
      let playerProfileURL = $(allColsOfplayer[0]).find("a").attr("href");
      if (playerProfileURL == undefined) {
        continue;
      }
      let fullLink = "https://www.espncricinfo.com" + playerProfileURL;
        console.log(teamName + " " + fullLink + " " + playerName);
      getBirthdayPage(fullLink, playerName, teamName);
    }
  }
}

function getBirthdayPage(url,name, teamName) {
  request(url, cb);
  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      extractBirthday(html,name,teamName);
    }
  }
}


function extractBirthday(html,name,teamName) {
    let $ = load(html);
    let compData = $(".ds-p-4 .ds-grid");
    // console.log(personalInfo);
    let info = ($(compData[0]));
    let birthday = $(info.find('h5'));
    // dob exits on first index 
    birthday = $(birthday[1]).text();
    console.log(`${chalk.blue("Team - ",teamName)}  ${chalk.yellowBright("Name - ",name)}   ${chalk.greenBright("Born on - ",birthday)}`);
}