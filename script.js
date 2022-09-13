

let searchCity=document.querySelector('.search-display');
let searchButton=document.querySelector('.search-area>button');
let digits=document.querySelector('.display-digits');
let celButton=document.querySelector('.to-celsius');
let farButton=document.querySelector('.to-fahrenheit');
let precipitaionDetails=document.querySelector('.precipitaion');
let humidyDetails=document.querySelector('.humidity');
let windDetails=document.querySelector('.wind');
let place=document.querySelector('.places>h2');
let datenTime=document.querySelector('.dayDeatils');
let looking=document.querySelector('.looking');
let image=document.querySelector('.image');

weatherApi('Hassan');
searchButton.addEventListener('click',()=>{
    weatherApi(searchCity.value);
    searchCity.value='';
    
});

 async function weatherApi(city){
    api= await fetch(`https://api.weatherapi.com/v1/current.json?key=fb73e9659b364c268c4181724221009&q=${city}&aqi=yes`);
    data= await api.json();
    digits.innerHTML=data.current.temp_c;
    precipitaionDetails.innerHTML=`<b>Precipitation:</b>${data.current.cloud}%`;
    humidyDetails.innerHTML= `<b>Humidity:</b>${data.current.humidity}%`;
    windDetails.innerHTML=`<b>Wind:</b>${data.current.wind_kph}Km/hr`;
    image.src=`${data.current.condition.icon}`

    place.innerHTML=`${data.location.name},${data.location.region}`;
    datenTime.innerHTML=`${data.location.localtime}`;
    looking.innerHTML=`${data.current.condition.text}`;
}


function conversion(units){
    if(units=='celcius'){
        digits.innerHTML=data.current.temp_c;
    }
    else
    digits.innerHTML=data.current.temp_f;
}

celButton.addEventListener('click', function(){
    if(!celButton.classList.contains('highlights')){
        farButton.classList.remove('highlights');
        celButton.classList.add('highlights');
        conversion('celcius');
    }

});

farButton.addEventListener('click',function(){
    if(!farButton.classList.contains('highlights')){
        farButton.classList.add('highlights');
        celButton.classList.remove('highlights');
        conversion('fahrenheit');
    }

    
});



