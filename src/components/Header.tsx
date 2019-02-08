import * as React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import logo from '../styles/img/logo.svg';
import { setLanguage } from './../store/actions/app.action';

interface Props {
  language: string;
  setLanguage: any;
}
interface State {
  value: string;
}
class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: this.props.language };
  }

  changeLanguage = (event: any) => {
    this.setState({ value: event.target.value });
    this.props.setLanguage(event.target.value);
  };

  render() {
    return (
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1 className="App-title">React Enjoy</h1>
        <nav>
          <ul>
            <li>
              <Link to="/board">
                <FormattedMessage id="link.board" />
              </Link>
            </li>
            <li>
              <Link to="/comics">
                <FormattedMessage id="link.comics" />
              </Link>
            </li>
          </ul>
        </nav>
        <select onChange={this.changeLanguage} value={this.state.value}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </header>
    );
  }
}

const mapStateToProps = (state: any) => ({
  language: state.app.language
});

const mapDispatchToProps = (dispatch: any) => ({
  setLanguage: bindActionCreators(setLanguage, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
