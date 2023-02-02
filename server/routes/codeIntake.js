const express = require("express")
const router = express.Router()
const codeIntake = require('../controllers/codeSubmit')
const sendCode = require('../queues/codeintake_queue')

router.post("/", async function (req, res, next) {
    let userData = await req.body
    console.log("IN THE ROUTE")
    console.log(userData)
    // console.log("THE REQUEST")
    // console.log(req)
    const message = await codeIntake.codeSubmit(userData)

    res.json(message)
})


router.post("/redistest", async function (req, res, next) {
    let userData = await req.body
    console.log("IN THE ROUTE")
    console.log(userData)
    // console.log("THE REQUEST")
    // console.log(req) //const message =  
    await sendCode.sendCode(userData)
    console.log("Past the message")
    // console.log(message)

    // res.json(message)
})

module.exports = router