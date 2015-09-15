import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KokubanActions from '../actions';
import Editor from '../components/Editor';
import RoomItem from '../components/RoomItem';
import { socket } from '../socket';

class KokubanApp extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      newRoomName: ""
    };

    this.handleNewRoomName = this.handleNewRoomName.bind(this);
    this.onCreateRoomSubmit = this.onCreateRoomSubmit.bind(this);
  }

  onCreateRoomSubmit(e) {
    e.preventDefault();
    socket.emit('createRoom', { name: this.state.newRoomName });
  }

  handleNewRoomName(e) {
    this.setState({
      newRoomName: e.target.value
    });
  }

  render() {
    const { rooms, dispatch, receiveChangeRooms } = this.props;
    const actions = bindActionCreators(KokubanActions, dispatch);

    socket.on('changeRooms', (rooms) => {
      dispatch(actions.receiveChangeRooms(rooms));
    });

    return (
      <div>
        <div>
          <form onSubmit={this.onCreateRoomSubmit}>
            <input value={this.state.newRoomName} onChange={this.handleNewRoomName} />
            <input type="submit" value="送信" />
          </form>
        </div>
        <Editor rooms={rooms} actions={actions} />
        <ul>
          {
            rooms.rooms.map(room =>
              <RoomItem room={room} actions={actions} />
            )
          }
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(KokubanApp);
