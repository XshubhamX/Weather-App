const path=require("path");
const express=require("express");
const hbs=require("hbs");
const { response } = require("express");
const geocode=require("./utils/geocode");
const request=require("./utils/request");

const app=express()
const staticPath=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

hbs.registerPartials(partialsPath);
app.set('view engine','hbs');
app.set('views',viewsPath);

app.use(express.static(staticPath));

app.get("",(req, res)=>{
    res.render('index')
})
app.get("/index",(req, res)=>{
    res.render('index')
})

app.get("/about",(req, res)=>{
    res.render('about',{
        name:"Shubham",
        desc:"I am a Freelancer at Up Work and Love to make User Interactive Applications.This application is just a teaser of my Talent :)"
    })
})

app.get("/help",(req, res)=>{
    res.render('help',{
        desc:"This App will help you to find the temprature and current status of the location which you will provide. Componets used to make this app are Node.js,Express,Vanilla java script,Bootstrap,Html ",
    })
})

app.get("/weather",(req, res)=>{
    if(!req.query.location){
        return res.send({
            error:"Location Not Entered",
        })
    }
    geocode.geocode(req.query.location,(error,l_t)=>{
        if(error){
            res.send({error:error})
        }
        if(l_t){
            request.long_lat(l_t,(error,forecast)=>{
                if(forecast){
                    res.send(forecast);
                }
                if(error){
                    res.send({error:error})
                }
            })}
    })
})

app.get("*",(req, res)=>{
    res.render("404",{
        name:"404 Page Not Found",
    })
})

app.listen(3000,()=>{
    console.log("server up on port 3000");
})