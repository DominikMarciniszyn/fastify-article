import { createOrderHandler, getOrderHandler, getOrdersHandler,  } from "./orders.handler";
import { getOrdersSchema, getOrderSchema, createOrderSchema } from "./orders.schema";

export const getOrdersOptions = {
  getOrdersSchema,
  handler: getOrdersHandler,
};

export const getOrderOption = {
  getOrderSchema,
  handler: getOrderHandler
};

export const createOrderOption = {
  createOrderSchema,
  handler: createOrderHandler
};
