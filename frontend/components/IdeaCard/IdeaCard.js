import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import * as query from './IdeaCard.query';
import * as sc from './IdeaCard.style';

class IdeaCard extends React.PureComponent {
  state = {
    prevIdea: this.props.idea,
    nextIdea: this.props.idea
  };

  handleInputIdeaCard = (e, updateIdea) => {
    this.setState({ nextIdea: e.target.innerText }, updateIdea);
  };

  handleClickDeleteBtn = (e, deleteIdea) => {
    e.target.disabled = true;
    deleteIdea();
  };

  handleError = error => error;

  render() {
    return (
      <sc.li>
        <Mutation
          mutation={query.DELETE_IDEA_MUTATION}
          variables={{ id: this.props.id }}
          refetchQueries={[{ query: query.ALL_IDEAS_QUERY }]}
          onError={this.handleError}
          errorPolicy="all"
        >
          {deleteIdea => (
            <sc.deleteBtn
              type="button"
              onClick={e => this.handleClickDeleteBtn(e, deleteIdea)}
            />
          )}
        </Mutation>

        <Mutation
          mutation={query.UPDATE_IDEA_MUTATION}
          variables={{
            id: this.props.id,
            idea: this.state.nextIdea
          }}
          refetchQueries={[{ query: query.ALL_IDEAS_QUERY }]}
          onError={this.handleError}
          errorPolicy="all"
        >
          {updateIdea => (
            <sc.ideaP
              contentEditable
              suppressContentEditableWarning
              onInput={e => this.handleInputIdeaCard(e, updateIdea)}
            >
              {this.state.prevIdea}
            </sc.ideaP>
          )}
        </Mutation>
      </sc.li>
    );
  }
}

IdeaCard.propTypes = {
  id: PropTypes.string.isRequired,
  idea: PropTypes.string.isRequired
};

export default IdeaCard;
