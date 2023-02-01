// import Bull from 'bull'
import Bull from 'bull'
// import codeIntakeProcess from '../processes/codeIntake.process'

import codeIntakeProcess from '../processes/codeIntake.process'
const codeIntakeQueue = new Bull('codeIntake', {
    redis: "redis://127.0.0.1:6379"
})

codeIntakeQueue.process(codeIntakeProcess)

const sendCode = (data)=> {
    codeIntakeQueue.add(data, {
        
    })
}

export default { sendCode}