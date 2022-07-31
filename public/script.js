const temp = document.querySelector('.temperature');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const city = document.querySelector('.city');

function setTimeAndTemprature(data) {
  
  // const date = new Date();
  // const currentDate = {
  //   month: date.getMonth(),
  //   day: date.getDay(),
  //   year: date.getFullYear(),
  //   hour: date.getHours(),
  // }
  // console.log(currentDate.hour);
  
  
  

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