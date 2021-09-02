const express = require('express');
const route = express.Router();
const pool = require('../database');
const fetch = require('fetch');
route.get('/', async(req, res) => {
    res.send('entonces')
});


module.exports = route;