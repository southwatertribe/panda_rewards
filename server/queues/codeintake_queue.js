// import Bull from 'bull'
const Queue = require('bull')
// import codeIntakeProcess from '../processes/codeIntake.process'
const codeIntakeProcess = require('../processes/codeIntake.process')


const redisHost = process.env.REDIS_HOST || '0.0.0.0';
const redisPort = process.env.REDIS_PORT || 6379;
const intervalInMilli = 1000; // 1000 milliseconds;
const queueName = 'code_intake';

const codeIntakeQueue = new Queue(queueName, { redis: { port: redisPort, host: redisHost } });

// const codeIntakeQueue = new Queue('codeIntake')


// codeIntakeQueue.process(function (job,done) {
//     const jobData = job.data;
//     console.log(`processing ${jobData}`)
// })

codeIntakeQueue.process( 
    function  (job) {
    
        console.log("You made it here")
        // console.log("AND: " + job)
        //Store the response, because we need to see if this worked in order to increment score in database
        const resp =  axios.post("https://6gzwnr5576chzorjos2vmii4jq0kzunw.lambda-url.us-west-1.on.aws/", {
          
            job
        
        })
    
        // //Debug DELETE IN PROD
        // message = resp['data']
        // console.log(message)
        
    
        // if(message == "Sucess"){
        //     //TODO INCREMENT SCORE
        //     response = await dbFuncs.incrementScore(entry.user.user_email)
    
        // }
    
        // console.log(message)
    
        return message
    
    }
)

const sendCode =  (data)=> {
    console.log("Did you make it here?")
    codeIntakeQueue.add(data)
}



module.exports = { sendCode}