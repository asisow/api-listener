const express = require('express');
const request = require('request');

const app = express();

const login = '';
const password = '';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const api = 'http://' + login + ':' + password + '@api2.gifts.ru/export/v2/catalogue/product.xml';
    console.log(api);
    request(api, (err, response, body) => {
        res.send(response.body);
    });
});
app.listen(8080, () => console.log('Goliath online'));
