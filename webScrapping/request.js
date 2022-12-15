import request from "request";


console.log("before")
request('https://www.worldometers.info/coronavirus/', cb);
console.log("after")
function cb (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:',response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  }