import AWS from 'aws-sdk';

AWS.config.update({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
})

const dynamoDB = new AWS.DynamoDB();

export {
    dynamoDB
}