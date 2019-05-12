import IdeaContainer from '../IdeaContainer/IdeaContainer';
import * as sc from './Home.style';

const Home = React.memo(() => {
  return (
    <sc.main>
      <IdeaContainer />
    </sc.main>
  );
});

export default Home;
