const express = require("express")
const router = express.Router()
const dbFuncs = require("../db/dynamo.js")

router.get("/", async function(req, res){
    return await dbFuncs.getAllPlayers()
   
})

module.exports = router