var React = require('react');

var Room = React.createClass({
  componentDidMount: function() {
    var that = this;
    this.socket = io();
    this.socket.on('message', function(message){
      this.setState({message: message})
    });
    this.socket.emit('Entered into Room');
  },

  render: function() {
    return (
      <div class="room">
        <div id="campass">
          <textarea>aaa</textarea>
        </div>
        <div id="members">
        </div>
      </div>
    );
  }
});

module.exports = Room;
