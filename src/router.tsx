import React, { Suspense } from 'react';

import { Route, Switch, routerRedux } from 'dva/router';

import Error from '@/components/Error/index';
import Routes from './routes/index';

const { ConnectedRouter } = routerRedux;

export default function Router({ history }: any) {
  return (
    // <Error>
    <ConnectedRouter history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {Routes.map((item, key) => (
            <Route key={key} exact path={item.path} component={item.component} />
          ))}
        </Switch>
      </Suspense>
    </ConnectedRouter>
    // </Error>
  );
}
