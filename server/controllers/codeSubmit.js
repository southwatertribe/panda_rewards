const axios  = require('axios')
const dbFuncs = require("../db/dynamo.js")

const codeSubmit = async (entry) => {
    

    //Store the response, because we need to see if this worked in order to increment score in database
    const resp = await axios.post("https://6gzwnr5576chzorjos2vmii4jq0kzunw.lambda-url.us-west-1.on.aws/", {
      
        entry
    
    })

    //Debug DELETE IN PROD
    message = resp['data']
    console.log(message)
    

    if(message == "Sucess"){
        //TODO INCREMENT SCORE
        response = await dbFuncs.incrementScore(entry.user.user_email)

    }

    return message

}

module.exports = {codeSubmit}