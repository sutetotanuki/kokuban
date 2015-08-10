var React = require('react');
var Navigation = require('react-router').Navigation;
var socket = require('./socket.js')();

var CreateRoom = React.createClass({
  mixins: [ Navigation ],

  getInitialState: function() {
    return {
      roomName: "Enter the Room Name"
    };
  },
  handleChange: function(e) {
    this.setState({
      roomName: e.target.value
    });
  },

  submitHandler: function(e) {
    event.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.transitionTo('room');
  },

  render: function() {
    return (
      <form onSubmit={this.submitHandler}>
        <label >部屋名</label>
        <input type="text" value={this.state.roomName} onChange={this.handleChange} />
        <button type="submit">送信</button>
      </form>
    );
  }
});

module.exports = CreateRoom;
