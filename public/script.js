const imageElement = document.querySelector(".card-img-top");
const cardTextElement = document.querySelector(".card-text");
const buttonElement = document.querySelector(".btn");

async function fetchData(loc) {
	const response = await fetch(`/weather/${loc}`);
	const data = await response.json();
	const imageSource = data['weather'][0]['icon'];
	const weather = data['weather'][0]['main'];
	const temperature = data['main']['temp'];
	const pressure = data['main']['pressure'];
	const humidity = data['main']['humidity'];
	const windSpeed = data['wind']['speed'];
	const cloudCover = data['clouds']['all'];
	
	imageElement.src = `http://openweathermap.org/img/wn/${imageSource}@2x.png`;

	document.querySelector(".place").textContent = loc;
	document.querySelector(".weather").textContent = weather;
	document.querySelector(".temperature").textContent = temperature;
	document.querySelector(".pressure").textContent = pressure;
	document.querySelector(".humidity").textContent = humidity;
	document.querySelector(".windSpeed").textContent = windSpeed;
	document.querySelector(".cloudCover").textContent = cloudCover;
}

buttonElement.addEventListener("click", () => {
	const loc = document.querySelector(".form-control").value;

	fetchData(loc).catch(err => {
		imageElement.src = "emoji-g89f8f63a4_640.png";
		cardTextElement.textContent = "Something went wrong! Please check your input or try again";
	});
});
