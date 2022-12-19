const axios  = require('axios')

const codeSubmit = async (entry) => {

    
    axios.post("https://6gzwnr5576chzorjos2vmii4jq0kzunw.lambda-url.us-west-1.on.aws/", {
      
        entry
    
 }).then((response) => console.log(response))

 console.log("HIT!")

}

module.exports = {codeSubmit}