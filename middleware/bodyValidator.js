const { body, validationResult } = require('express-validator');
const registerRules =()=>[
body('name',"you must enter a valid  name").not().isEmpty(),
//  body('lastname',"you must enter a valid lastname").not().isEmpty(),

body('email', "you must enter a valid email").isEmail(),
body('password'," your password must contain at least 5 characters").isLength({ min: 5,max:20 }),
]

const loginRules =()=>[
body('email', "you must enter a valid email").isEmail(),
body('password').isLength({ min: 5,max:20 }),
]
const logger =(req,res,  next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}


module.exports = {
   logger, registerRules,loginRules
}




