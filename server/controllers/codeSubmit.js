const axios  = require('axios')
const dbFuncs = require("../db/dynamo.js");


const codeSubmit = async (entry) => {
    
    return await axios.post("https://kvnvuqhdhl6aij7l3o2ukwgjyi0fuhed.lambda-url.us-west-1.on.aws/", {
    
        entry
    
    }).then((result) => {
        console.log(`CodeSubmit: ${JSON.stringify(result.data)}`)
        const task_id = result.data.task_id
        console.log(`Task ID: ${task_id}`);
        return task_id;
    }).catch((err) => {
        console.log(err)
    });


}



module.exports = {codeSubmit}