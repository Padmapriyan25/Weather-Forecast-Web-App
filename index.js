// Date and time    
    
    function updateDateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit'
        });

        const date = now.toLocaleDateString(undefined, {
                    weekday: 'long',
                    // year: 'numeric',
                    // month: 'long',
                    day: 'numeric'
        });

        document.getElementById('time').textContent = time;
        document.getElementById('day').textContent = date;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

// Weather data

let city_input = document.getElementById('city');
let city_search = document.getElementById('city_icon');
let video = document.getElementById('video');
let temp = document.getElementById('temp');
let description = document.getElementById('description');
let feel = document.getElementById('feel');
let loc = document.getElementById('loc');
let visibility = document.getElementById('visibility');
let content = document.getElementById('content');
let hide = document.getElementById('content');
let back = document.getElementById('video-back');

let checkWeather = async(city) => {
    let api = "fbe6f9409f28ce6315de34632d4e4f34"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
    let weather  = await data.json()
    
    console.log(weather)
    
    temp.innerHTML = `${Math.round(weather.main.temp)}<sup>o</sup>C`
    feel.innerHTML = `Feels like: ${(weather.main.feels_like)}`
    loc.innerHTML = (weather.name)
    visibility.innerHTML = `Visibility: ${(weather.visibility)/100}%`

    description.innerHTML = weather.weather[0].main

    if(weather.weather[0].main == "Rain"){
        video.src = './Assets/rain.mp4';
        back.src = './Assets/RainBlur.mp4'
        content.innerHTML = `<p>Rain brings a calm yet mysterious rhythm to the day. The streets glisten under the drizzle, and the sky stays moody and grey. It's the perfect setting for a quiet evening indoors, listening to the droplets tapping gently on windows. Whether you're sipping tea or watching the rain fall, there's something poetic about rainy days. Keep your umbrella close — the skies may have more stories to pour down.</p>`;
    }
    else if(weather.weather[0].main == "Clear"){
        video.src = './Assets/clear.mp4';
        back.src = './Assets/ClearBlur.mp4'
        content.innerHTML = `<p>The sun shines brightly overhead, casting golden rays across the landscape. Clear skies bring warmth, energy, and a sense of freshness to the day. It's an ideal time for walks, catching up on chores, or just enjoying the world in its full glow. Don’t forget your sunscreen and shades — the day ahead promises brightness in every direction. Stay hydrated and make the most of this perfect weather.</p>`;
    }
    else if(weather.weather[0].main == "Clouds"){
        video.src = './Assets/Clouds.mp4';
        back.src = './Assets/CloudsBlur.mp4'
        content.innerHTML = `<p>Thick clouds drift slowly above, covering the sky in soft gray layers. While the sun hides behind the mist, the world feels calm and reflective. It’s the kind of day that invites introspection or slow, gentle activities. There’s a sense of peace in the air — no harsh lights, just muted tones and cooler winds. Stay cozy, and perhaps expect a surprise drizzle as the clouds gather strength.</p>`;
    }
    else if(weather.weather[0].main == "Snow"){
        video.src = './Assets/snow.mp4';
        back.src = './Assets/SnowBlur.mp4'
        content.innerHTML = `<p>The world outside is blanketed in white, transforming everything into a winter wonderland. Flakes fall silently from the sky, painting rooftops, trees, and streets in snow. It’s a time for woolen scarves, warm drinks, and watching your breath cloud the air. While beautiful, snow also demands caution — roads can be slippery, and temperatures can drop sharply. Embrace the chill, and let the snowflakes tell their story.</p>`;
    }
    else if(weather.weather[0].main == "Mist"){
        video.src = './Assets/mist.mp4';
        back.src = './Assets/MistBlur.mp4'
        content.innerHTML = `<p>The world feels mysterious under the mist’s gentle veil. Buildings fade into soft silhouettes, and every sound seems quieter, wrapped in fog. It’s a calm, dreamy moment when nature slows down and invites you to pause. The mist adds a touch of magic to ordinary mornings — just remember to stay cautious while traveling, as visibility can be low.</p>`;
    }
        else if(weather.weather[0].main == "Haze"){
        video.src = './Assets/haze.mp4';
        back.src = './Assets/HazeBlur.mp4'
        content.innerHTML = `<p>The air feels thick and still, with sunlight struggling to break through the haze. A soft golden glow lingers, blurring the horizon and giving the world a dreamy, distant look. Though beautiful in its own way, haze often signals dust or pollution — a gentle reminder to take care of yourself and the environment. Breathe easy, move mindfully, and let the day unfold in its muted calm.</p>`;
    }
    else{
        video.src = './Assets/Umbrella.mp4';
    }
}

city_search.addEventListener('click', ()=>{
    checkWeather(city_input.value)
    city_input.value = ""
})

city_input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkWeather(city_input.value);
        city_input.value = "";
    }
});
