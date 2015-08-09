var React = require('react');
var CreateRoom = require('./CreateRoom.jsx');

var Wellcome = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <CreateRoom />
        </div>
      </div>
    );
  }
});

module.exports = Wellcome;
