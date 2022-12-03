//Require Libraries
const AWS = require('aws-sdk');
const { param } = require('../routes/auth.js');
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
    const params = {
        TableName: TABLE_NAME,
        Item: user
    }
    return await dynamoClient.put(params).promise();
}

const getUser = async(email) => {
    AWS.config.update({
        region: process.env.AWS_DEFAULT_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
    const dynamoClient = new AWS.DynamoDB.DocumentClient();
    const TABLE_NAME = "RCConsume";
    const params = {
        TableName: TABLE_NAME,
        Item: email
    }
    
    return await dynamoClient.scan(params).promise();  
   
}

module.exports = {addOrUpdateUser, getUser};



