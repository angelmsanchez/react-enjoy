import * as React from 'react';

import './App.scss';
import Header from './components/header/Header';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
