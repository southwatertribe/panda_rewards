//Require Libraries
const AWS = require('aws-sdk');
const { param } = require('../routes/auth.js');
const {config} = require("./dbconfig.js")
//This is the credentials for aws db, stored in secure env file and put to config file
require('dotenv').config();


//Adds a user table to the database given an object
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

//Use this to get a user by their primary_key, which is email
const getUser = async(user_email) => {
    AWS.config.update({
        region: process.env.AWS_DEFAULT_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
    const dynamoClient = new AWS.DynamoDB.DocumentClient();
    
    const TABLE_NAME = "RCConsume";
    const params = {
        TableName: TABLE_NAME,
        Key: {
            user_email
        }
    }
    
    return await dynamoClient.scan(params).promise();  
   
}

module.exports = {addOrUpdateUser, getUser};



