import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';
interface HelloResponse {
  statusCode: number;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const params = event.queryStringParameters;
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Illust Details`,
      params
    })
  };

  callback(undefined, response);
};

export { handler };