import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";
import dotenv from 'dotenv';

dotenv.config();


async function makePostRequest(payload) {

  try {
    // Convert the payload to JSON string
    const data = JSON.stringify(payload);
    const client = new APIGatewayClient(
      {
        region: "eu-central-1",
        endpoint: "https://tvqlrjb1re.execute-api.eu-central-1.amazonaws.com",
        post: true,
        credentials: {
          accessKeyId: process.env.AWS_SMD_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SMD_SECRET_ACCESS_KEY,
        },
      }
    );
    const command = new CreateApiKeyCommand(data);

    await client.send(command);
    return {
      statusCode: 200,
      body: "Data stored successfully",
    };
  } catch (error) {
    console.error('POST request failed', error);
  }
}