import SignOn from '../SignOn/SignOn';
import IdeaCardForm from '../IdeaCardForm/IdeaCardForm';
import * as sc from './Header.style';

const Header = React.memo(() => (
  <sc.header>
    <sc.h1>ideabox</sc.h1>
    <SignOn />
    <IdeaCardForm />
  </sc.header>
));

export default Header;
