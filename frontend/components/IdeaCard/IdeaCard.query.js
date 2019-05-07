import gql from 'graphql-tag';
import { ALL_IDEAS_QUERY } from '../IdeaContainer/IdeaContainer.query';

export { ALL_IDEAS_QUERY };

export const UPDATE_IDEA_MUTATION = gql`
  mutation UPDATE_IDEA_MUTATION($id: ID!, $idea: String!) {
    updateIdea(id: $id, idea: $idea) {
      id
      idea
    }
  }
`;

export const DELETE_IDEA_MUTATION = gql`
  mutation DELETE_IDEA_MUTATION($id: ID!) {
    deleteIdea(id: $id) {
      id
    }
  }
`;
