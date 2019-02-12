const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    console.log(login, password);
    const api = 'http://' + login + ':' + password + '@api2.gifts.ru/export/v2/access'//'@api2.gifts.ru/export/v2/catalogue/product.xml';
    console.log(api);
    request(api, (err, response, body) => {
        res.send(response.body);
    });
});
app.listen(8080, () => console.log('Goliath online'));
