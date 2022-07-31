const temp = document.querySelector('.temperature');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const city = document.querySelector('.city');


// Wybór dnia przez użytkownika
const chooseDay = 2;

const chooseTemperature = 24;

const converter = 24;

function setTimeAndTemprature(data) {
  
  console.log(data);
  
  
  const futureTemperature = data.hourly.temperature_2m[(chooseTemperature * (chooseDay - 1))];

  const futureTime = data.hourly.time[chooseDay  * converter];

  console.log(`Temperatura ${futureTemperature} w dniu ${futureTime}`);
  
  
  

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