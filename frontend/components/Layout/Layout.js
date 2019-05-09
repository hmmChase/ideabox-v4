import PropTypes from 'prop-types';
import Header from '../Header/Header';
import * as sc from './Layout.style';

const Layout = React.memo(props => (
  <sc.divLayout>
    <Header />

    <sc.main>
      {/* Pages are rendered here */}

      {props.children}
    </sc.main>
  </sc.divLayout>
));

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
