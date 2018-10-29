import React from 'react';
import {Route} from 'react-router-dom';
import {List,Create, Update, Show} from '../components/lesson/';

export default [
  <Route path='/lessons/create' component={Create} exact={true} key='create'/>,
  <Route path='/lessons/edit/:id' component={Update} exact={true} key='update'/>,
  <Route path='/lessons/show/:id' component={Show} exact={true} key='show'/>,
  <Route path='/lessons/:page?' component={List} strict={true} key='list'/>,
];
