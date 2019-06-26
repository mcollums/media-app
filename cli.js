var tv = require("./TV");
var tv = new TV();

var choiceinput = process.argv[2];
var name = process.argv.slice(3).join(" ");

console.log(choiceinput, name);

if (!choiceinput || !name) {
    console.log("Please enter your show or actor ");
    return;
}

if (choiceinput === "show") {
    tv.findShow(name);
    console.log("Show: " + name);
} else if (choiceinput === "actor") {
    tv.findActor(name);
    console.log("Actor: " + name);
}