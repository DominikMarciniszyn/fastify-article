import { getOrdersHandler } from "./orders.handler";
import { getOrdersSchema } from "./orders.schema";

export const getOrdersOptions = {
  getOrdersSchema,
  handler: getOrdersHandler,
};
