import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'express';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@as-integrations/express5';
import 'reflect-metadata';
import { userResolver } from '../../interfaces/graphql/resolvers/user.resolver';
import { typeDefs } from '../../interfaces/graphql/schemas'
import { InMemoryUserRepo } from '../db/InMemoryUserRepo';


export async function createExpressApp() {
  const app = express();
  const httpServer = http.createServer(app);

  const userRepo = new InMemoryUserRepo();
  const resolvers = userResolver(userRepo);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        // exemplo: token de auth
        token: req.headers.authorization,
      }),
    }),
  );

  return httpServer;
}
