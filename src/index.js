import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './styles/index.css';
//component imports
import App from './components/App';
// import Transaction from './containers/Transaction';
import BaseLayout from './components/BaseLayout'
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';
import AccountDetail from './containers/AccountDetail';

//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/bankshot/" component={App} />
          <Route path="/bankshot/users/:id/:accountID" component={AccountDetail} />
          <Route path="/bankshot/users/:id" component={UserDetail} />
          <Route path="/bankshot/users" component={UserList} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
