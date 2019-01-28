import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Board = lazy(() => import('./Board'));
const Schedule = lazy(() => import('./Schedule'));

const Main = () => (
  <main>
    <Suspense fallback={<div>I`m Loading</div>}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
      </Switch>
    </Suspense>
  </main>
);

export default Main;
