import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true
});

const run = async () => {
  try {
    await server.listen(3000, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

run();
