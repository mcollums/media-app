var tv=require("./TV");
var tvapp=new Tv();
var choiceinput =process.argv[2];
var name=process.argv.slice(3).join(" ");
console.log(choiceinput, name);
if(!choiceinput && !name){
    console.log("Please enter your show \actor ");
    return;
}
if(choiceinput==="show")
{
    tvapp.findShow(name);
    console.log("Show");
}
else if(choiceinput==="actor"){
    
    console.log("Actor");
}