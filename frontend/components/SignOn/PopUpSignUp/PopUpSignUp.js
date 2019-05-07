import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import DisplayError from '../../DisplayError/DisplayError';
import * as query from './PopUpSignUp.query';
import * as sc from './PopUpSignUp.style';

class PopUpSignUp extends React.PureComponent {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmitForm = async (e, signUp, client) => {
    e.preventDefault();
    this.setState({ password: '', confirmPassword: '' });
    await signUp();
    await client.resetStore();
  };

  handleError = error => error;

  handleCompleted = () => this.props.close();

  render() {
    const { email, password, confirmPassword } = this.state;
    const isInvalid = email === '' || password === '' || confirmPassword === '';

    return (
      <Mutation
        mutation={query.SIGN_UP_MUTATION}
        variables={this.state}
        onError={this.handleError}
        errorPolicy="all"
        onCompleted={this.handleCompleted}
      >
        {(signUp, { loading, error, client }) => (
          <sc.form onSubmit={e => this.handleSubmitForm(e, signUp, client)}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Create a new Account</h2>

              {error && <DisplayError error={error} />}

              <label htmlFor="email">
                Email
                <sc.inputText
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.handleChangeInput}
                />
              </label>

              <label htmlFor="password">
                Password
                <sc.inputText
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.handleChangeInput}
                />
              </label>

              <label htmlFor="confirmPassword">
                Confirm Password
                <sc.inputText
                  type="password"
                  name="confirmPassword"
                  placeholder="password"
                  value={confirmPassword}
                  onChange={this.handleChangeInput}
                />
              </label>

              <sc.h3PassTitle>Password must contain:</sc.h3PassTitle>

              <sc.ulPassList aria-label="Password must contain:">
                <li>at least 8 charactors</li>
                <li>an uppercase letter</li>
                <li>a lowercase letter</li>
                <li>a number</li>
              </sc.ulPassList>

              <sc.inputBtn value="Sign Up" type="submit" disabled={isInvalid} />
            </fieldset>
          </sc.form>
        )}
      </Mutation>
    );
  }
}

PopUpSignUp.propTypes = {
  close: PropTypes.func.isRequired
};

export default PopUpSignUp;
