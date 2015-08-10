var React = require('react');
var CreateRoom = require('./CreateRoom.jsx');


var Wellcome = React.createClass({
  componentDidMount: function() {
    console.log(this.props);
  },

  render: function() {
    return (
      <div>
        <div>
          <CreateRoom createRoom={this.props.createRoom}/>
        </div>
      </div>
    );
  }
});

module.exports = Wellcome;
