// import Bull from 'bull'
const Queue = require('bull')
// import codeIntakeProcess from '../processes/codeIntake.process'
const codeIntakeProcess = require('../processes/codeIntake.process')


const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const intervalInMilli = 1000; // 1000 milliseconds;
const queueName = 'code_intake';

const codeIntakeQueue = new Queue(queueName, { redis: { port: redisPort, host: redisHost } });

// const codeIntakeQueue = new Queue('codeIntake')


// codeIntakeQueue.process(function (job,done) {
//     const jobData = job.data;
//     console.log(`processing ${jobData}`)
// })

codeIntakeQueue.process(codeIntakeProcess.codeIntakeProcess)

const sendCode = (data)=> {
    codeIntakeQueue.add(data, {
        
    })
}



module.exports = { sendCode}