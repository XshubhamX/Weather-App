const request=require("request");

const geocode=(location,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(location)+".json?access_token=pk.eyJ1IjoieHNodWJoYW14IiwiYSI6ImNrZmdoaHZkYjBvazQycm1oaGZ6bHd3a3kifQ.q_7Z3XuOjIooksvWdNG8jg";
    request({url:url,json:true},(error,response)=>{
        if(response){
            if(response.body.features.length!=0){
                callback(undefined,[response.body.features[0].center]);
            }
            else if (response.body.features.length==0){
                callback("Enter Valid Location");
            }
        }
    })
}

module.exports = {geocode, geocode};