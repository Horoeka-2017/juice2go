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
    db.get(req.app.get('connection'))
    .then(function (orders/new){
        res.send('new', { 'orders': 'Hello World!' })
    })
    .catch(function(err){
        res.status(500).send('DATBASE ERROR: ' + err.message)
    })
})

// router.post('/orders/new', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
// router.get('/orders/:id', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })


module.exports = router