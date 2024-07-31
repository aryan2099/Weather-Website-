const SearchButton = document.querySelector("#SearchIcon");


SearchButton.addEventListener("click", () => {
    const input = document.querySelector("#search-input").value;

    const APIKey = `ac046cbaaa3569836fd5cdda28a74462`;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${APIKey}`)
        .then(response => response.json()).then(json => {

            const img = document.querySelector("#img");
            const temp = document.querySelector(".temp");
            const info = document.querySelector(".info");
            const humidity = document.querySelector(".humidity1");
            const pressure = document.querySelector(".pressure1");
            const speed = document.querySelector(".speed1");
            const feel = document.querySelector(".feel1");
            const name = document.querySelector(".name");
            const e = document.querySelector("h2");
            const d = document.getElementById("i1");
            const d2 = document.getElementById("i2");
            const container = document.querySelector(".container");


            if(json.cod == "404"){
                e.style.visibility = "visible";
                e.style.marginTop = "30px";
                d.style.visibility = "hidden";
                d2.style.visibility = "hidden";
                container.style.height = "30vh";
            }
            if(json.cod == "200"){
                e.style.marginTop = "0px";
                e.style.visibility = "hidden";
                d.style.visibility = "visible";
                d2.style.visibility = "visible";
                container.style.height = "auto";
            }

            switch (json.weather[0].main) {
                case `Rain`:
                    img.src = "./assets/rain.png";
                    break;

                case `Clear`:
                    img.src = "./assets/sun.png";
                    break;
                case `Snow`:
                    img.src = "./assets/snow.png";
                    break;
                case `Mist`:
                    img.src = "./assets/sunwind.png";
                    break;
                case `Haze`:
                    img.src = "./assets/wind.png";
                    break;
                case `Clouds`:
                    img.src = "./assets/lightCloud.png";
                    break;
                case `Smoke`:
                    img.src = "./assets/smoke.png"
                    break;
                case `Fog`:
                    img.src = "./assets/smoke.png"
                    break;

                default:
                    img.src = "./assets/cloudSun.png"
                    break;
            }

            info.innerHTML = `${json.weather[0].description}`
            temp.innerHTML = `${Math.round(json.main.temp)}<span class="degree">&deg;c</span>`;
            humidity.innerHTML = `${json.main.humidity}% Humidity`;
            pressure.innerHTML = `${json.main.pressure}mbar Pressure`;
            feel.innerHTML = `${json.main.feels_like}&deg;c Feel`;
            speed.innerHTML = `${json.wind.speed}km/h`;
            name.innerHTML = `${json.name}`;

            setTimeout(() => {
                d.style.display = "grid";
            }, 400);
            console.log(`${json.weather[0].main}`);
        });

});