const express = require('express');
const tokenRoute = express.Router();

tokenRoute.get('/', (req, res) => {
    res.sendStatus(200)
})

module.exports = tokenRoute;

