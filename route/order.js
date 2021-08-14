const orderController = require('../controllers/orderController')

const express = require('express')
const router = express.router()



router.get('/order/:id',orderController.get_orders);
router.post('/order/:id',orderController.checkout);

module.exports = router;