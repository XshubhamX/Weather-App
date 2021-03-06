const weather=document.querySelector('form');
const search = document.querySelector('input')

const temp=document.getElementById("temperature")
const forecast=document.getElementById("forecast")
const loci=document.getElementById("location");

weather.addEventListener("submit",(e)=>{
    e.preventDefault();
    loci.innerText="";
    const loc=search.value;
    temp.innerText="Loading....";
    forecast.innerText=" ";
    fetch("/weather?location="+loc).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                temp.innerText=data.error;
            }
            else{
                if(data.place_name[1]){
                    loci.innerText=data.place_name[0]+"  "+data.place_name[1];
                }
                else if(data.place_name[1]==null){loci.innerText=data.place_name[0]}
                temp.innerText="Temperature is "+ data.temp;
                forecast.innerText="Fore Cast "+data.forecast;
            }
        })
    })
})