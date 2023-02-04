const express = require('express');
const bodyParser = require('body-parser');

const products = require('./mongo');

const app = express();

app.use(bodyParser.json());

app.post('/products', products.createproduct);

app.get('/products', products.getproduct);

app.listen(3000);
