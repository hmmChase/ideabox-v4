/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Router from 'next/router';
import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const createClient = ({ ctx, headers, initialState }) => {
  console.log('withApollo', new Date().getMilliseconds());

  const consoleLink = new ApolloLink((operation, forward) => {
    console.log(
      '\n',
      `---------- starting request for ${operation.operationName}`,
      new Date().getMilliseconds(),
      `(client: ${process.browser}, server: ${!process.browser})`
    );

    return forward(operation).map(op => {
      console.log(`${operation.operationName} res: `, op);
      console.log(
        '\n',
        `---------- ending request for ${operation.operationName}`,
        new Date().getMilliseconds()
      );
      return op;
    });
  });

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          const errorObject = {
            code: err.extensions.code,
            operation: operation.operationName,
            message: err.message
          };

          console.log(
            '[GraphQL error]: ',
            new Date().getMilliseconds(),
            errorObject
          );

          switch (err.extensions.code) {
            // AuthenticationError
            case 'UNAUTHENTICATED':
              // return forward(operation);
              break;

            // ForbiddenError
            case 'FORBIDDEN':
              if (process.browser) Router.push('/');

              // return forward(operation);
              break;

            default:
              // return forward(operation);
              break;
          }
        }
      }

      if (networkError) {
        const errorObject = {
          code: networkError.code,
          message: networkError.message
        };

        console.log('[Network error]: ', errorObject);
      }
    }
  );

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({ headers });

    return forward(operation);
  });

  const uri =
    process.env.NODE_ENV === 'production'
      ? 'https://ideabox-v4.hmmchase.now.sh/graphql'
      : 'http://localhost:8888/graphql';

  const httpLink = createHttpLink({
    uri,
    credentials: 'include'
  });

  const link = ApolloLink.from([consoleLink, errorLink, authLink, httpLink]);

  const cache = new InMemoryCache().restore(initialState || {});

  return new ApolloClient({
    link,
    cache,
    queryDeduplication: true,
    ssrMode: !process.browser,
    connectToDevTools: process.browser
  });
};

export default withApollo(createClient, {
  getDataFromTree: 'ssr'
});
