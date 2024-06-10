import handler from "../handler-lib";
import dynamoDb from "../../utils/dynamo/dynamodb-lib";
// types
import { StatusCodes } from "../../../shared_utils/types";
// utils
import { error } from "../../../shared_utils/constants/constants";

export const fetchBanner = handler(async (event, _context) => {
  if (!event?.pathParameters?.bannerId!) {
    throw new Error(error.NO_KEY);
  }
  const params = {
    TableName: process.env.BANNER_TABLE_NAME!,
    Key: {
      key: event?.pathParameters?.bannerId!,
    },
  };
  const response = await dynamoDb.get(params);

  const status = StatusCodes.SUCCESS;
  return { status: status, body: response };
});
