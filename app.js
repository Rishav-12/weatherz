const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

apiKey = process.env.API_KEY;

app.get('/weather/:loc', async (req, res) => {
	const loc = req.params.loc
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`
	const fetch_response = await fetch(apiUrl);
	const data = await fetch_response.json();
	res.json(data);
});
