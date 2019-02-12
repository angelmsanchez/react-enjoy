import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from './loader/Loader';

const Home = lazy(() => import('./Home'));
const Board = lazy(() => import('./Board'));
const Comics = lazy(() => import('./comics/Comics'));
const Users = lazy(() => import('./Users'));
const UserDetail = lazy(() => import('./UserDetail'));

const Main = () => (
  <main>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/users/:id">
          <UserDetail />
        </Route>
      </Switch>
    </Suspense>
  </main>
);

export default Main;
