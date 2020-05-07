import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'
import Pixiv from './pixiv'

interface FunctionResponseType {
  statusCode: number;
  body: string;
}

const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const response = await Pixiv.illustRecommended()
  const functionResponse: FunctionResponseType = {
    statusCode: 200,
    body: JSON.stringify(response.illusts)
  }

  callback(undefined, response);
};

export { handler };