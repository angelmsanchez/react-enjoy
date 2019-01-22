import * as React from 'react';

import './App.scss';
import Board from './components/Board';
import Header from './components/Header';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
