import IdeaCardForm from '../IdeaCardForm/IdeaCardForm';
import * as sc from './Header.style';

const Header = React.memo(() => (
  <sc.header>
    <sc.h1>ideabox</sc.h1>

    <IdeaCardForm />
  </sc.header>
));

export default Header;
