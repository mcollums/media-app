var axios = require('axios');



var TV = function () {
    this.findShow = function (show) {
        // The following URL can be used to search the TV Maze API for a given show
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

        axios.get(URL).then(
            function (response) {
                var obj = response.data;
                console.log(obj);
                console.log(`Show Name: ${obj.name}`);
                console.log(`Genere: ${obj.generes}`);
                console.log(`Average Rating: ${obj.rating.average}`);
                console.log(`Network: ${obj.network.name}`);
                console.log(`Summary: ${obj.summary}`);
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
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
            })
    }

};



var tv = new TV();
tv.findShow("Dexter");

module.exports = TV;