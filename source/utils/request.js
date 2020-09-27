const request=require("request");
const long_lat=(location,callback)=>{
    console.log(location);
    const url="http://api.openweathermap.org/data/2.5/weather?lon="+location[0][0]+"&lat="+location[0][1]+"&units=metric&APPID=b41f655b93c1a98b85c41a67bae0b0a7";
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Location not defined");
        }
        if(response.body.cod!=200){
            callback(response.body.message);
        }else if(response){
            let x={temp:response.body.main.temp+"*C",forecast:response.body.weather[0].description,};
            callback(undefined,x)}
    })
};

module.exports={
    long_lat:long_lat,
}