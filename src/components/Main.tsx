import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Board from './Board';
import Schedule from './Schedule';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Board} />
      <Route path='/schedule' component={Schedule} />
    </Switch>
  </main>
)

export default Main;
