//Require Libraries
const AWS = require('aws-sdk');
const {config} = require("./dbconfig.js")
//This is the credentials for aws db, stored in secure env file and put to config file
require('dotenv').config();



const addOrUpdateUser = async (user) => {
    AWS.config.update({
        region: process.env.AWS_DEFAULT_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
    
    const dynamoClient = new AWS.DynamoDB.DocumentClient();
    const TABLE_NAME = "RCConsume";
    console.log("connected to db")
    const params = {
        TableName: TABLE_NAME,
        Item: user
    }
    return await dynamoClient.put(params).promise();
}


module.exports = {addOrUpdateUser};



// const first = {
//     user_id: '0',
//     fname: 'daniel',
//     lname: 'carter',
//     email: 'imdannycarter@gmail.com',
//     score: 0,
//     text: 'oh yeah man this shit was banging i fucking lvoe panda express the amount of times i go there I am just sooooo thankful for you guys making one on campus like its so good',
// };


// addOrUpdateUser(first)