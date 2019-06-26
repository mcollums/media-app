var axios = require("axios");
var fs=require("fs");
function output(info){
    console.log(info);
  
    fs.appendFile("log.txt", info, function(err){
      console.log(err);
    })
  }


var TV=function(){
    this.findShow=function(show){
    var URL="http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL).then(function(response){
        console.log(response.data);
        output(`
      Show Name: ${response.data.name}
      Genres: ${response.data.genres.join(" ")}
      Network: ${response.data.network.name}
      Summary: ${response.data.summary}
      -----------------------------------
      `);
        
    },
    function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
     ) 
    }
}
//   var tv=new TV ();
//   tv.findShow("flash");
  module.exports=TV;