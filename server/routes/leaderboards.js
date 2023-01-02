const express = require("express")
const router = express.Router()
const dbFuncs = require("../db/dynamo.js")

router.get("/", async function(req, res){
    const players = await dbFuncs.getAllPlayers()
    res.json(players)
    console.log("The route")
})

module.exports = router