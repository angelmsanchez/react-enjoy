import * as React from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import logo from '../styles/img/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1 className="App-title">Welcome to React</h1>
        <nav>
          <ul>
            <li>
              <Link to="/board">
                <FormattedMessage id="link.board" />
              </Link>
            </li>
            <li>
              <Link to="/schedule">
                <FormattedMessage id="link.schedule" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
