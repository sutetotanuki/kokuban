import { Component } from 'react';

export default class Board extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className="board">
        <code>{this.props.message}</code>
      </div>
    );
  }
};
