// import { Job } from 'bull';

const Job = require('bull')

const codeIntakeProcess = async (job) => {
    
    console.log("You made it here")
    console.log("AND: " + job)
    //Store the response, because we need to see if this worked in order to increment score in database
    const resp = await axios.post("https://6gzwnr5576chzorjos2vmii4jq0kzunw.lambda-url.us-west-1.on.aws/", {
      
        job
    
    })

    //Debug DELETE IN PROD
    message = resp['data']
    console.log(message)
    

    if(message == "Sucess"){
        //TODO INCREMENT SCORE
        response = await dbFuncs.incrementScore(entry.user.user_email)

    }

    console.log(message)

    return message

}


module.exports = {codeIntakeProcess}
// export default codeIntakeProcess;