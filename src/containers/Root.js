import React, { Component } from 'react';
import KokubanApp from './KokubanApp';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = configureStore();

export default class Root extends Component{
  render() {
    return(
      <Provider store={store}>
        {() => <KokubanApp />}
      </Provider>
    );
  }
};
