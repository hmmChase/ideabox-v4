import IdeaCardContainer from '../IdeaCardContainer/IdeaCardContainer';
import * as sc from './Home.style';

const Home = React.memo(() => {
  return (
    <sc.main>
      <IdeaCardContainer />
    </sc.main>
  );
});

export default Home;
