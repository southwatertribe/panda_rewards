const express = require("express");
const router = express.Router();
const dbFuncs = require("../db/dynamo.js")
//const {googleLogin} = require("../controllers/auth.js")
//Gooogle Create Account
router.post("/",  async function(req, res, next){

    const data = await req.body.data;   
    //TODO Add attribute to show user onboarded
    //If user is in db dont do anything, if not, add them
    const user = {
        user_email: data['email'],
        f_name: data['given_name'],
        l_name: data['family_name']
    } 
    
    dbFuncs.addOrUpdateUser(user)
})

module.exports = router;