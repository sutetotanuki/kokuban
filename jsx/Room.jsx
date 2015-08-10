var React = require('react');

var Room = React.createClass({
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
