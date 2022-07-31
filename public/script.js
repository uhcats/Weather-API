

function setTimeAndTemprature(data) {
  
  const date = new Date();
  const currentDate = {
    month: date.getMonth(),
    day: date.getDay(),
    year: date.getFullYear(),
    hour: date.getHours(),
  }


  console.log(currentDate.hour);
  
  
  

  const {temperature,time} = data.current_weather;


  console.log(`Temperatura ${temperature} dnia ${time}`);
}


fetch('https://api.open-meteo.com/v1/forecast?latitude=52.2297&longitude=21.0122&hourly=temperature_2m&current_weather=true')
.then(r => r.json())
.then(data => console.log(setTimeAndTemprature(data)))