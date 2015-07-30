var React = require('react');

var Message = React.createClass({
  render: function() {
    return (
      <p>
        こんにちわ。{this.props.name} さん {this.props.age} 歳ですね！
      </p>
    );
  }
});

module.exports = Message;
