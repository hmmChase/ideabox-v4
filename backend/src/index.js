import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import apolloServer from './apolloServer';

const app = express();
const server = apolloServer();

app.use(cookieParser());

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8888 }, err => {
  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:8888${server.graphqlPath}`
  );
});
