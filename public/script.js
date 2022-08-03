const temp = document.querySelector('.temperature');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const city = document.querySelector('.city');

const inputTime = document.querySelector('.inputTime');

const inputDate = document.querySelector('.inputDate');

const btn = document.querySelector('.showResult');
const resultDiv = document.querySelector('.result');

// Wybór dnia przez użytkownika
const chooseDay = 2;

const chooseTemperature = 24;

const converter = 24;

let newtime;



function findTheFullDateClient(data) {
  const HourSelectFromClient = `${inputTime.value.slice(0,2)}:00`;
    const lastDate = `${inputDate.value}T${HourSelectFromClient}`;
    const findIndexInTime =  newtime.findIndex(element => element === lastDate);

    const findTheFullDate = newtime.splice(findIndexInTime,1);

    console.log(data);

    console.log(findIndexInTime);

    const weather = data.hourly.temperature_2m.slice(findIndexInTime,1);
    
    
    console.log(weather);
    
    

    resultDiv.innerText = `W dniu ${findTheFullDate} temperatura wyniesie: `;
    
    return findTheFullDate;
}




function findInArrayHour(data) {
  const startIndexSlice = data.hourly.time.findIndex(element => element === data.current_weather.time);
 newtime =  data.hourly.time.slice(startIndexSlice);
 const newTemperature = data.hourly.temperature_2m.slice(startIndexSlice)


 btn.addEventListener('click',findTheFullDateClient.bind(this,data))
}

function setTimeAndTemprature(data) {



  findInArrayHour(data);
  

  const {temperature,time} = data.current_weather;

  const getDay = time.slice(0,10);
  const getHour = time.slice(-5);

  temp.textContent = temperature;
  day.textContent = getDay;
  hour.textContent = getHour;
  city.textContent = 'Koszalin';

  

}
const KoszalinGeography = {
  latitude: 54.2,
  longitude: 	16.1833,
}


fetch(`https://api.open-meteo.com/v1/forecast?latitude=${KoszalinGeography.latitude}&longitude=${KoszalinGeography.longitude}&hourly=temperature_2m&current_weather=true`)
.then(r => r.json())
.then(data => setTimeAndTemprature(data))