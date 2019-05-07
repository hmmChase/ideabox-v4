import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apolloServer from './apolloServer';

const app = express();
const server = apolloServer();

app.use(cookieParser());

const corsOptions = {
  credentials: true,
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://ideabox-v4.hmmchase.now.sh'
      : 'http://localhost:7777'
};

app.use(cors(corsOptions));

server.applyMiddleware({ app, path: '/graphql', cors: corsOptions });

app.listen({ port: 8888 }, err => {
  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:8888${server.graphqlPath}`
  );
});
