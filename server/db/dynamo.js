//Require Libraries
const AWS = require('aws-sdk');
const { param } = require('../routes/auth.js');
const {config} = require("./dbconfig.js")
//This is the credentials for aws db, stored in secure env file and put to config file
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const dynamoClient = new AWS.DynamoDB.DocumentClient();


//Adds a user table to the database given an object
const addOrUpdateUser = async (user) => {
    const TABLE_NAME = "RCConsume";
    const params = {
        TableName: TABLE_NAME,
        Item: user
    }
    return await dynamoClient.put(params).promise();
}

//Use this to get a user by their primary_key, which is email
const getUser = async(user_email) => {
    const TABLE_NAME = "RCConsume";
    const params = {
        Key: {
            user_email: user_email
        },
        TableName: TABLE_NAME,
    }
    
    return await dynamoClient.get(params).promise();  
   
}

const incrementScore = async(user_email) => {
    const TABLE_NAME = "RCConsume";
    expression_attribute_names = {'#v': 'score'}
    expression_attribute_values = {':inc': {'N': '9'}}
    update_expression = 'ADD #v :inc'

    
    const params = {
        TableName: TABLE_NAME,
        Key: {
            user_email: user_email
        },
        UpdateExpression: 'set score = score + :val',
        ExpressionAttributeValues: {
          ':val': 9
        }
      };
      

    return dynamoClient.update(params, function(err, data) {
        if (err) {
          console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
          console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
      });
        
}

const getAllPlayers = async()=> {
  const TABLE_NAME = "RCConsume";
  const projectionExpression = "f_name, l_name, score, profile"
  const params = {
    TableName: TABLE_NAME,
    ProjectionExpression: projectionExpression
  };
  const players = []
  let data;
  
  do {
    data = await dynamoClient.scan(params).promise();
    console.log(data)
    console.log(players)
    players.push(...data.Items)
    console.log(data.LastEvaluatedKey)
    params.ExclusiveStartKey = data.LastEvaluatedKey
  }while(typeof data.LastEvaluatedKey !== 'undefined');  
  
  console.log(players)

  return players;
}

const check_tasks = async(task_id)=>{
  const TABLE_NAME = "survey_tasks";

  console.log(`Reached check_tasks controller: ${task_id}`)

  const params = {
    TableName: TABLE_NAME,
    Key: {
      task_id : task_id,
    },
  };

  try {
    const data = await dynamoClient.get(params).promise();
    
    if (data.Item) {
      const response = { status: data.Item.status, result: data.Item.result }
      return response 
      
    } else {
      const response = { message: 'Task not found' }
      return response 
    }
  } catch (error) {
    console.error(error);
    const response = { message: 'Internal server error' }
    return response
  }

}

module.exports = {addOrUpdateUser, getUser, incrementScore, getAllPlayers, check_tasks};





