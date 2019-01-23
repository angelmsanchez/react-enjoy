import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from '../styles/img/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <nav>
          <ul>
            <li><Link to='/'>Board</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}