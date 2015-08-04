var React = require('react');
var Message = require('./message.jsx');
var CreateRoom = require('./CreateRoom.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      person: {
        name: '山田',
        age: 34
      }
    }
  },

  handleChange: function(event) {
    this.setState({
      person: {
        name: event.target.value,
        age: this.state.person.age
      }
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.person.name} onChange={this.handleChange} />
        <Message name={this.state.person.name} age={this.state.person.age} />
        <div>
          <CreateRoom />
        </div>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('container')
);
