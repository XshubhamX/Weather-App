const request=require("request");
const long_lat=(location,callback)=>{
    const url="http://api.openweathermap.org/data/2.5/weather?q="+encodeURIComponent(location)+"&units=metric&APPID=b41f655b93c1a98b85c41a67bae0b0a7";
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Enter Valid Location");
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