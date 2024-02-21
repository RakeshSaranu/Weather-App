let apikey="b73605aacd82d11b1055873dd8073a7b"
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var search=document.querySelector(".searchfeild input");
var btn=document.querySelector(".searchfeild button");
var image=document.querySelector(".wicon")
var crd=document.querySelector(".card");

async function Weatherreport(cityname)
{   
     
     const res=await fetch(apiurl+ cityname + `&appid=${apikey}`);

     if(res.status==404)
     {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }

     else{
    var op= await res.json();

     console.log(op);

     document.querySelector(".cityname").textContent=op.name;
     document.querySelector(".temp").textContent=Math.round(op.main.temp) +"°C";
     document.querySelector(".humidity").textContent=op.main.humidity +"%";
     document.querySelector(".wind").textContent=op.wind.speed +"Km/hr";

     if(op.weather[0].main=="Clouds")
     {
          image.src="./images/clouds.png";
     }



     else if(op.weather[0].main=="Clear")
     {
          image.src="./images/clear.png";
     }

     else if(op.weather[0].main=="Rain")
     {
          image.src="./images/rain.png";
     }

     else if(op.weather[0].main=="Drizzle")
     {
          image.src="./images/drizzle.png";
     }

     else if(op.weather[0].main=="Mist")
     {
          image.src="./images/mist.png";
     }

     else if(op.weather[0].main=="Snow")
     {
          image.src="./images/snow.png";
     }

     document.querySelector(".weather").style.display="block";
     
     document.querySelector(".error").style.display="none";

     }
}

btn.addEventListener("click",()=>

{
    Weatherreport(search.value)
})
