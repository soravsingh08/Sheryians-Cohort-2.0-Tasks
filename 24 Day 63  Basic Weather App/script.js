async function getWeather(city) {
 
    const API_KEY =  "c732ec5e86c10b9fa3a80d9940a76f91";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(URL);
    const data = await response.json();

    if(data.cod != 200){
        throw new Error("City not found")
    }

 return data;
}

  function checkTemperature(temp) {
    if (temp > 40) {
        throw new Error("Temperature too high!");
    }
    if (temp < -5) {
        throw new Error("❄ Temperature too low!");
    }
}

document.getElementById("btn").addEventListener("click" ,async () => {
    const city =document.getElementById("city").value;
    const result = document.getElementById("result")

    try{
        const data = await getWeather(city);
        checkTemperature(data.main.temp);
        result .innerHTML = `
        <b>City:</b> ${data.name} <br>
        <b>Weather:</b> ${data.weather[0].main} <br>
        <b>Temperature:</b> ${data.main.temp + " °C"}
        `;
    }

    catch(err){
        result.innerHTML = `<span style = "color:red;">${err.message}</span>`
    }
})

getWeather("ramban")