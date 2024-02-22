
const currTemp = document.querySelector('#current-temp');
const waetherIcon = document.querySelector('#weather-icon');
const capDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75514560970775&lon=6.639832237572601&appid=866b14b11cedaba9557c08171e17a980&units=imperial'

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text())
        }
    }catch (error){
        console.log(error)
    };
    
}
apiFetch();

function displayResults(data){
    currTemp.innerHTML = ` ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].icon;
    waetherIcon.setAttribute('src', iconsrc);
    waetherIcon.setAttribute('alt', desc);
    capDesc.textContent = `${desc}`; 
}

