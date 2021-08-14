const { Router } = require('express');
const cartController = require('../controllers/cartController');
const router = Router();

router.get('/cart/:id',cartController.get_cart_items);
router.post('/cart/:id',cartController.add_cart_item);
router.delete('/cart/:userId/:itemId',cartController.delete_item);
// router.delete('/cart/:_id' ,  (req , res)=>{
//     const {_id} =  req.params 
 
//     Product.deleteOne({_id})
//     .then(product =>res.send(product))
//     .catch(err=> console.log(err))
 
//  })
module.exports = router;