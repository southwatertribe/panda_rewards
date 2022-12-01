const express = require("express");
const router = express.Router();
const dbFuncs = require("../db/dynamo.js")
//const {googleLogin} = require("../controllers/auth.js")

//Gooogle Create Account in DB should only be made once per user
router.post("/",  async function(req, res, next){

    const data = await req.body.data;   
    //TODO Add attribute to show user onboarded
    //If user is in db dont do anything, if not, add them
    const user = {
        user_email: data['email'],
        f_name: data['given_name'],
        l_name: data['family_name'],
        profile: data['picture'],
        score: 0,
        textres: "This experience at panda was absolutely amazing. I'm so ecstatic that that there is a Panda location on the premises of my campus and I can't wait to go again and again. Keep it up Panda I love you, so much.",
    } 
    
    dbFuncs.addOrUpdateUser(user)
})

//Gets user, we simply need an email for this that will be get on login
router.get("/getUser", async function(req,res) {
    console.log("get user for the session")
    let email = req.body.email;
    const user = await dbFuncs.getUser(email);
    console.log(user.Items)
    return user.Items;
})
module.exports = router;