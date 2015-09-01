import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KokubanActions from '../actions';
import Editor from '../components/Editor';
import RoomItem from '../components/RoomItem'

export default class KokubanApp extends Component {
  render() {
    const { rooms, dispatch } = this.props;
    const actions = bindActionCreators(KokubanActions, dispatch);

    return (
      <div>
        <Editor rooms={rooms} actions={actions} />
        <ul>
          {
            rooms.map(room =>
              <RoomItem name={room} actions={actions} />
            )
          }
        </ul>
      </div>
    );
  }
};
