const API_Keys = `220a576e7540d98ed5ac96683eded0a4`;

const findTemperature = () => {
    const cityName = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Keys}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemprature(data))
};

const setInnerTEXT = (id, name) => {
    document.getElementById(id).innerText = name;
}

const displayTemprature = temp => {
    setInnerTEXT('city', temp.name);
    setInnerTEXT('temperature', temp.main.temp);
    setInnerTEXT('weather', temp.weather[0].description);
    //icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('img-icon');
    imgIcon.setAttribute('src', url);
    console.log(temp);
}
