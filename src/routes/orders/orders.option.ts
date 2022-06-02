import { getOrderHandler, getOrdersHandler,  } from "./orders.handler";
import { getOrdersSchema, getOrderSchema } from "./orders.schema";

export const getOrdersOptions = {
  getOrdersSchema,
  handler: getOrdersHandler,
};

export const getOrderOption = {

};

export const postOrderOptions = {
  getOrderSchema,
  handler: getOrderHandler
};
