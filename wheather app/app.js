const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

const inputBox = document.querySelector('.input-box'); // Input box select karna

// API se data fetch karne ka function
async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=9818c032762a4808b5c84521240409&q=${cityName}&aqi=yes`);
    return await promise.json();
}

// Search button par click event listener
button.addEventListener('click', async () => {
    const value = input.value;
    
    if (value) { // Agar input field khali nahi hai
        inputBox.style.display = 'block'; // Input box ko show karna
        const result = await getData(value);
        cityName.innerText = `Details: ${result.location.name}, ${result.location.region} - ${result.location.country}`;
        cityTime.innerText = `Time: ${result.location.localtime}`;
        cityTemp.innerText = `Temp: ${result.current.temp_c}°C`;
    }
});
