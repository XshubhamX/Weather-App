const weather=document.querySelector('form');
const search = document.querySelector('input')

const temp=document.getElementById("temperature")
const forecast=document.getElementById("forecast")


weather.addEventListener("submit",(e)=>{
    e.preventDefault();
    const loc=search.value;
    temp.innerText="Loading....";
    forecast.innerText=" ";
    fetch("http://localhost:3000/weather?location="+loc).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                temp.innerText=data.error;
            }
            else{
                temp.innerText="Temperature is "+ data.temp;
                forecast.innerText="Fore Cast "+data.forecast;
            }
        })
    })
})