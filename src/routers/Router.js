import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TestPageMain from '../pages/TestPageMain';
import TestPagePickple from '../pages/TestPagePickple';
import TestPageSeBoard from '../pages/TestPageSeBoard';

const Router = ({ exact, to, children }) => (
  <Route
    exact={exact}
    path={`/${to}`}
    key={to}
    render={() =>
      localStorage.getItem('token') ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: `/`
          }}
        />
      )
    }
  />
);

const Routers = () => (
  <>
    <Router exact to="">
      <TestPageMain />
    </Router>
    <Router exact to="seboard">
      <TestPageSeBoard />
    </Router>
    <Router exact to="pickple">
      <TestPagePickple />
    </Router>
  </>
);
export default Routers;
