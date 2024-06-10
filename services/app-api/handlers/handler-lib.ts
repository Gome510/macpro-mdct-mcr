// utils
import * as logger from "../../shared_utils/debugging/debug-lib";
import { isAuthorized } from "../utils/auth/authorization";
import {
  internalServerError,
  buildResponse,
} from "../utils/responses/response-lib";
import { error } from "../../shared_utils/constants/constants";
import { sanitizeObject } from "../utils/sanitize/sanitize";
// types
import { APIGatewayProxyEvent, StatusCodes } from "../../shared_utils/types";

type LambdaFunction = (
  event: APIGatewayProxyEvent, // eslint-disable-line no-unused-vars
  context: any // eslint-disable-line no-unused-vars
) => Promise<any>;

export default function handler(lambda: LambdaFunction) {
  return async function (event: APIGatewayProxyEvent, context: any) {
    // Start debugger
    logger.init();
    logger.debug("API event: %O", {
      body: event.body,
      pathParameters: event.pathParameters,
      queryStringParameters: event.queryStringParameters,
    });

    if (await isAuthorized(event)) {
      try {
        if (event.body) {
          const newEventBody = sanitizeObject(JSON.parse(event.body));
          event.body = JSON.stringify(newEventBody);
        }
        // Run the Lambda
        const { status, body } = await lambda(event, context);
        return buildResponse(status, body);
      } catch (error: any) {
        // Print debug messages
        logger.error("Error: %O", error);

        const body = { error: error.message };
        return internalServerError(body);
      } finally {
        logger.flush();
      }
    } else {
      const body = { error: error.UNAUTHORIZED };
      return buildResponse(StatusCodes.UNAUTHORIZED, body);
    }
  };
}
