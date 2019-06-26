var choiceinput =process.argv[2];
var name=process.argv.slice(3).join(" ");
console.log(choiceinput, name);
if(!choiceinput && !name){
    console.log("Please enter your show \actor ");
}
if(choiceinput==="show")
{
    console.log("Show");
}
else if(choiceinput==="actor"){
    console.log("Actor");
}