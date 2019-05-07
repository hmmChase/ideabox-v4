import gql from 'graphql-tag';
import { ALL_IDEAS_QUERY } from '../IdeaContainer/IdeaContainer.query';

export { ALL_IDEAS_QUERY };

export const CREATE_IDEA_MUTATION = gql`
  mutation CREATE_IDEA_MUTATION($idea: String!) {
    createIdea(idea: $idea) {
      id
    }
  }
`;
