var React = require('react');

var Wellcome = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.person.name} onChange={this.handleChange} />
        <div>
          <CreateRoom />
        </div>
      </div>
    );
  }
});
