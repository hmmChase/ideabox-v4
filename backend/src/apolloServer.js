import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
const prisma = require('./prismaClient');
import resolvers from './resolvers';
import * as auth from './utils/auth';

const typeDefs = importSchema(__dirname + '/schema/schema.graphql');

export default () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      const me = await auth.getMe(req);

      return { req, res, prisma, me };
    },
    introspection: true,
    playground:
      process.env.NODE_ENV !== 'production'
        ? {
            settings: {
              'editor.theme': 'light',
              'request.credentials': 'include'
            }
          }
        : false
  });
