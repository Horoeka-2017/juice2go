var express = require('express')
var router = express.Router()
var db = require('./db')

router.get('/', function (req, res) {
    res.render('index', { hi: 'Hello World!' })
})

router.get('/orders/new', function (req, res) {
    res.render('orders/new')
})

router.post('/orders/new', function (req, res, next) {
    var orderFields = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        delivery: req.body.delivery
    }
    var addOrder = db.addOrderInfo(orderFields, req.app.get('connection'))
        .then(function (foo) {
            var itemFields = {
                type: req.body.type,
                quantity: req.body.quantity,
                size: req.body.size,
                order_id: foo[0]
            }

            db.addItemInfo(itemFields, req.app.get('connection'))
                .then(function () {
                    var message = { message: 'Your order has been placed successfully! Huzzah!' }
                    res.redirect('/orders/new')
                }, next)
        })
})

router.get('/orders/list', function (req, res) {
    db.getOrders(req.app.get('connection'))
        .then((orders) => {
            res.render('orders', { orders: orders })
        })
})

router.get('/orders/:id', function (req, res) {
    const id = Number(req.params.id)

    db.getOrder(id, req.app.get('connection'))
        .then(function (order) {
            console.log(order)
            res.render('view', { order: order })
        })
        .catch(function (err) {
            res.send(err.message)
        })
})


module.exports = router