const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello for express clinton');
});
app.get('/demo', (req, res) => {
	res.set('X-full-stock', '4life');
	res.status(418);
	res.send('I prefer coffee');
});

app.listen(port, () => console.log('App has started on port', port));
