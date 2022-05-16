const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=f0e384aeb72f0b7f7b53d57dc6180b8c`);
    // console.log(res.data.weather[0].main);
    // console.log(res.data.wind.speed);
    //document.querySelector(".city").innerText = "Weather in " + searchTerm;
    //document.querySelector(".icon").src = "https:openweathermao.org/img/wn/" + icon + ".png"

    // const display = 'Temperature: ' + res.data.main.temp + "ᵒC ";
    // const display1 = 'Well, It feels like: ' + res.data.main.feels_like + "ᵒC ";
    // const display2 = 'Min_temperature: ' + res.data.main.temp_min + "ᵒC ";
    // const display3 = 'Max_temperature: ' + res.data.main.temp_max + "ᵒC ";
    // const display4 = 'Humidity: ' + res.data.main.humidity + "% ";

    document.querySelector(".city").innerText = "Weather in " + searchTerm;
    document.querySelector(".temp").innerText = "Temperature: " + res.data.main.temp + "˚C";
    document.querySelector(".feels").innerText = "Well, it feels like: " + res.data.main.feels_like + "˚C ";
    document.querySelector(".mint").innerText = "Minimum Temperature: " + res.data.main.temp_min + "˚C ";
    document.querySelector(".maxt").innerText = "Maximum Temperature: " + res.data.main.temp_max + "˚C ";
    document.querySelector(".humid").innerText = "Humidity: " + res.data.main.humidity + "% ";
    document.querySelector(".description").innerText = "Description: " + res.data.weather[0].main + "";
    document.querySelector(".wind").innerText = "Wind Speed " + res.data.wind.speed + "m/s ";
    form.elements.query.value = '';
})





//     document.body.append(display);
//     document.body.append(display1);
//     document.body.append(display2);
//     document.body.append(display3);
//     document.body.append(display4);
// })















//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//key = f0e384aeb72f0b7f7b53d57dc6180b8c