const express = require("express")
const router = express.Router()
const codeIntake = require('../controllers/codeSubmit')
const dbFuncs = require("../db/dynamo.js")

router.post("/", async function (req, res, next) {
    let user_data = await req.body
    console.log("IN THE ROUTE")
    console.log(user_data)
    // console.log("THE REQUEST")
    // console.log(req)
    const task_id = await codeIntake.codeSubmit(user_data)

    console.log(`CodeIntake.js line 14: ${task_id}`)

    const response = {
        'statusCode': 200,
        'body': {"task_id": task_id},
        'headers': {
            'Content-Type': 'application/json',
        }
    }

    res.json(response)
})

//Fetches task status
router.get("/task_status", async function(req,res,next) {
  const task_id = req.query.task_id;
  console.log(`Task_id in task_status route: ${task_id}`)
  const response = await dbFuncs.check_tasks(task_id)
  console.log(JSON.stringify(response))
  res.json(response)
  
});

router.post("/increment-score", async function(req,res) {
    let email = await req.body.email
    console.log(`EMAIL EMAIL EMAIL: ${email}`)
    await dbFuncs.incrementScore(email)
})

module.exports = router