const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello for express clinton');
});

app.listen(port, () => console.log('App has started on port', port));
