import gql from 'graphql-tag';

export const ALL_IDEAS_QUERY = gql`
  query ALL_IDEAS_QUERY {
    ideas {
      id
      idea
    }
  }
`;
