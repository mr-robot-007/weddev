//   2015 es6
// hoisting
console.log("line 3 ", varName);

//declare

var varName;
//assign
varName = 10;
console.log("line 10 ", varName);
//reassign
varName = 20;
console.log("line 13 ", varName);
var varName;
console.log("line 15 ",varName);
