import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = React.memo(props => (
  <NextHead>
    <title>{props.title ? `ideabox-v4 | ${props.title}` : 'ideabox-v4'}</title>
  </NextHead>
));

Head.propTypes = {
  title: PropTypes.string.isRequired
};

export default Head;
