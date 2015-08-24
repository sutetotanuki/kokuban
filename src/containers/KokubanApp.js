import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

@connect(state => ({
  messages: state.ChatteStore
}));

export default class KokubanApp extends Component{
  render() {
    return (

    );
  }^
};
