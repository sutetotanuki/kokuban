import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KokubanActions from '../actions/kokubans';
import Editor from '../component/Editor'

class KokubanApp extends Component {
  render() {
    const { rooms, dispatch } = this.props;
    const actions = bindActionCreators(KokubanActions, dispatch);

    return (
      <div>
        <Editor rooms={rooms} actions={actions} />
      </div>
    );
  }
};
