// import chalk from "chalk";
import { load } from "cheerio";
import request from "request";

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
  //   console.log(teamArr.text());
  //   console.log(teamArr.html());
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
    // let cHtml = $(inningsArr[i]).html();
    // htmlStr+=cHtml;
    // team names
    let teamNameEle = $(inningsArr[i]).find(".ds-capitalize");
    let teamName = teamNameEle.text();
    // console.log(teamName);
    let hwtPlayer = "";
    let hwt = 0;
    // for winning team
    if (wTeamName == teamName) {
      //   console.log(teamName);
      //get bowling table for wining team
      let tableElement = $(
        $(inningsArr[i]).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto")
      );
      let allBowlers = $(tableElement[1]).find("tr");

      for (let j = 0; j < allBowlers.length; j++) {
        // ignore table row with bowler info
        if ($(allBowlers[j]).hasClass("ds-hidden")) {
          continue;
        }
        let allColsOfplayer = $(allBowlers[j]).find("td");
        // oth index has name
        let playerName = $(allColsOfplayer[0]).text();
        // 4th index has no. of wickets
        let wickets = $(allColsOfplayer[4]).text();
        // console.log(playerName + " " + wickets);
        if (wickets >= hwt) {
          hwtPlayer = playerName;
          hwt = wickets;
        }
      }
      console.log(
        `Winning Team : ${teamName} \nPlayer : ${hwtPlayer}\nWickets : ${hwt}`
      );
    }
    // team table
  }
  //   console.log(htmlStr);
}
