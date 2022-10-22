const express = require('express');
const app = express();
const fetch = require("node-fetch");

app.get('/', (req, res) => {
	(async () => {
    		const response = await fetch('http://service2.zoominfo.test');
    		const body = await response.text();
    	        res.send(body);
	})();
});

app.listen(8080, () => console.log('Example app is listening on port 8080.'));
