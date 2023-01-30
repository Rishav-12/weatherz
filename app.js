const express = require('express');
const helmet = require('helmet');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening at ${port}`));
app.use(helmet());
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const apiKey = process.env.API_KEY;

app.get('/weather/:loc', async (req, res) => {
	const loc = req.params.loc
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`
	const fetch_response = await fetch(apiUrl);
	const data = await fetch_response.json();
	res.json(data);
});
