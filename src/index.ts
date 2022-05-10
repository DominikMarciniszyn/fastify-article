import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import pino from 'pino';

const pinoLogger = pino({ level: 'info' });

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: pinoLogger
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
