import { Query } from 'react-apollo';
import IdeaCard from '../IdeaCard/IdeaCard';
import DisplayError from '../DisplayError/DisplayError';
import DisplayLoading from '../DisplayLoading/DisplayLoading';
import * as query from './IdeaCardContainer.query';
import * as sc from './IdeaCardContainer.style';

const IdeaContainer = React.memo(() => {
  const displayIdeaCards = data =>
    data.ideas.map(idea => <IdeaCard key={`ideaCard${idea.id}`} {...idea} />);

  const handleError = error => error;

  return (
    <Query
      query={query.ALL_IDEAS_QUERY}
      onError={handleError}
      errorPolicy="all"
    >
      {({ loading, error, data }) => {
        if (loading) return <DisplayLoading />;
        if (error) return <DisplayError error={error} />;

        return <sc.ul>{displayIdeaCards(data)}</sc.ul>;
      }}
    </Query>
  );
});

export default IdeaContainer;
