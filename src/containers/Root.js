import React, { Component } from 'react';
import KokubanApp from './KokubanApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default class Root extends Component{
  render() {
    return(
      <Provider store={store}>
        {() => <KokubanApp />}
      </Provider>
    );
  }
};
