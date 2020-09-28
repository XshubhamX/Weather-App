const weather=document.querySelector('form');
const search = document.querySelector('input')

const temp=document.getElementById("temperature")
const forecast=document.getElementById("forecast")
const loci=document.getElementById("location");

weather.addEventListener("submit",(e)=>{
    e.preventDefault();
    const loc=search.value;
    temp.innerText="Loading....";
    forecast.innerText=" ";
    fetch("/weather?location="+loc).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                temp.innerText=data.error;
            }
            else{
                loci.innerText=loc.toUpperCase;
                temp.innerText="Temperature is "+ data.temp;
                forecast.innerText="Fore Cast "+data.forecast;
            }
        })
    })
})