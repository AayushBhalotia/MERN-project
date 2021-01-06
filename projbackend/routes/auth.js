var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator'); //validator to vallidate  email etc

const {signout,signup,signin}=require("../controllers/auth")


router.post("/signup",[ 
    check("name","name should be atleeast 3 charc").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be atleeast  3 charc").isLength({min:3}),
], signup); //signup is a controller


router.post("/signin",[ 
    check("email","email is required").isEmail(),
    check("password","password  feild is required").isLength({min:1}),
], signin);




router.get("/signout", signout);

module.exports = router;