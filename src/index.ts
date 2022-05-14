import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { orders } from './routes/orders/orders.controller';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true
});

server.register(orders);

const run = async (): Promise<void> => {
  try {
    await server.listen(3000, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

run();
