const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  const connectionId = event.requestContext.connectionId;
  addConnectionId(connectionId).then(() => {
    callback(null, {
      statusCode: 200,
    })
  });
}

function addConnectionId(connectionId) {
  return ddb.delete({
    TableName: 'Players',
    Key: {
      connectionid : connectionId,
    },
  }).promise();
}