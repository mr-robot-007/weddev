console.log("varName ",varName);
var varName;
console.log("varName ",varName);
varName = "captain america"
console.log("varName ",varName);

fn();
function fn() {
    console.log("Hello from fn");
}
fn();


fnContainer();
var fnContainer = function() {
    console.log("I am an expression.");
}
fnContainer();




// varName undefined
// varName undefined
// varName captain america

// hello form fn
// hello form fn

// undefined
// I am a expression