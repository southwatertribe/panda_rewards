const axios  = require('axios')

const codeSubmit = async (entry) => {

    //Store the response, because we need to see if this worked in order to increment score in database
    const resp = await axios.post("https://6gzwnr5576chzorjos2vmii4jq0kzunw.lambda-url.us-west-1.on.aws/", {
      
        entry
    
    })

    //Debug DELETE IN PROD
    console.log("RESPONSE:" + resp['data'])

    if(resp['data'] == "Sucess"){
        //TODO INCREMENT SCORE
    }

}

module.exports = {codeSubmit}