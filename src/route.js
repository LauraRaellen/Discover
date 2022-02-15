const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/create-pass', (req,res) => res.render("index"))

module.exports = route



