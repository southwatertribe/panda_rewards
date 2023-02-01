// // import Bull from 'bull'
// const Bull = require('bull')
// // import codeIntakeProcess from '../processes/codeIntake.process'

// const codeIntakeProcess = require('../processes/codeIntake.process')
// const codeIntakeQueue = new Bull('codeIntake', {
//     redis: "redis://127.0.0.1:6379"
// })

// codeIntakeQueue.process(codeIntakeProcess)

// const sendCode = (data)=> {
//     codeIntakeQueue.add(data, {
        
//     })
// }

// module.exports = { sendCode}