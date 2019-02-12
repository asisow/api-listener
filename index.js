const express = require('express');
const request = require('request');

const app = express();

const login = 'mail@rico-design.info';
const password = '123';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const api = 'http://' + login + ':' + password + '@api2.gifts.ru/export/v2/access'//'@api2.gifts.ru/export/v2/catalogue/product.xml';
    console.log(api);
    request(api, (err, response, body) => {
      console.log(body);
        res.send(response.body);
    });
});
app.listen(8080, () => console.log('Goliath online'));
