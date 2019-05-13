import { Query } from 'react-apollo';
import IdeaCard from '../IdeaCard/IdeaCard';
import * as query from './IdeaCardContainer.query';
import * as sc from './IdeaCardContainer.style';

class IdeaContainer extends React.PureComponent {
  displayIdeaCards = data =>
    data.ideas.map(idea => <IdeaCard key={`ideaCard${idea.id}`} {...idea} />);

  handleError = error => error;

  render() {
    return (
      <Query
        query={query.ALL_IDEAS_QUERY}
        onError={this.handleError}
        errorPolicy="all"
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return <sc.ul>{this.displayIdeaCards(data)}</sc.ul>;
        }}
      </Query>
    );
  }
}

export default IdeaContainer;
