import { getOrdersHandler } from "./orders.handler";
import { getOrdersSchema } from "./orders.schema";

export const getOrdersOptions = {
  schema: getOrdersSchema,
  handler: getOrdersHandler,
};

export const orders = (fastify, options, done) => {
  fastify.get('/api/v1/orders', getOrdersOptions);

  done();
}
