import { getOrdersOptions, getOrderOption, createOrderOption } from "./orders.option";
import { FastifyInstance, RouteHandler, RouteOptions } from 'fastify';

export const orders = (fastify: FastifyInstance, options: RouteOptions, done): void => {
  fastify.get('/api/v1/orders', getOrdersOptions);
  fastify.get('/api/v1/orders/:id', getOrderOption);
  fastify.post('/api/v1/orders', createOrderOption)

  done();
}
