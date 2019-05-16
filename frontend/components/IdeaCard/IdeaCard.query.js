import gql from 'graphql-tag';
import { ALL_IDEAS_QUERY } from '../IdeaCardContainer/IdeaCardContainer.query';

export { ALL_IDEAS_QUERY };

export const UPDATE_IDEA_MUTATION = gql`
  mutation UPDATE_IDEA_MUTATION($id: ID!, $content: String!) {
    updateIdea(id: $id, content: $content) {
      id
      content
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
