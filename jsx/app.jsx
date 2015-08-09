var React = require('react');
var Message = require('./message.jsx');
var CreateRoom = require('./CreateRoom.jsx');
var Router = require('react-router');
var Wellcome = require('./Wellcome.jsx');
var Room = require('./Room.jsx');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

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
        <header>
          <ul>
            <li>test1</li>
            <li>test2</li>
          </ul>
        </header>
        <article>
          <RouteHandler />
        </article>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="room" handler={Room} />
    <DefaultRoute handler={Wellcome} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('container'));
});
