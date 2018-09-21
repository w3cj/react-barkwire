import React from 'react';
import { Switch,  Route } from 'react-router-dom';

import NotFound from './NotFound';
import DogsPage from '../containers/DogsPage';
import DogPage from '../containers/DogPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DogsPage} />
    <Route exact path="/dogs/:id" component={DogPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
