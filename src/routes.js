var express = require('express')
var router = express.Router()
var db = require('../db')

router.get('/', function(req, res) {
    res.render('index', { hi: 'Hello World!' })
})

// router.get('/orders', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
// router.get('/order-fulfil/:id', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })

router.get('/orders/new', function(req, res) {
    res.render('orders/new')
})

// router.post('/orders/new', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
// router.get('/orders/:id', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })


module.exports = router