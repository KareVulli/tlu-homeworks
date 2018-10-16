import React from 'react';
import {Route} from 'react-router-dom';
import {List,Create, Update, Show} from '../components/task/';

export default [
  <Route path='/tasks/create' component={Create} exact={true} key='create'/>,
  <Route path='/tasks/edit/:id' component={Update} exact={true} key='update'/>,
  <Route path='/tasks/show/:id' component={Show} exact={true} key='show'/>,
  <Route path='/tasks/:page?' component={List} strict={true} key='list'/>,
];
