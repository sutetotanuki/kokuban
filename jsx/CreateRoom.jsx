var React = require('react');

var CreateRoom = React.createClass({
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

  submitHundler: function(e) {
    event.preventDefault();
    alert(this.state.roomName);
  },

  render: function() {
    return <form onSubmit={this.submitHandler}>
      <label >部屋名</label>
      <input type="text" value={this.state.roomName} onChange={this.handleChange} />
      <button type="submit">送信</button>
    </form>
  }
});

module.exports = CreateRoom;
