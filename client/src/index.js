import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import registerServiceWorker from './registerServiceWorker';
// Import your reducers and routes here
import Welcome from './Welcome';
import lesson from './reducers/lesson/';
import lessonRoutes from './routes/lesson';
import task from './reducers/task/';
import taskRoutes from './routes/task';
import group from './reducers/group/';
import groupRoutes from './routes/group';
import user from './reducers/user/';
import userRoutes from './routes/user';

const store = createStore(
  combineReducers({routing, form, lesson, task, group, user}),
  applyMiddleware(thunk),
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Welcome} strict={true} exact={true}/>
        { lessonRoutes }
        { taskRoutes }
        { groupRoutes }
        { userRoutes }
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


