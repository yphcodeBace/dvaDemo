import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" to="/index" exact component={IndexPage} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/Products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
