import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Signup = (event: APIGatewayProxyEventV2) => {
  console.log("signup call");
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from Signup",
      data: {},
    }),
  };
};
