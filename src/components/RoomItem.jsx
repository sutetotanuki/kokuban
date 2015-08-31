import React, { Component } from 'react';

export default class RoomItem extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    const {room} = this.props;
    return(
      <li>{room.name}</li>
    );
  }
};
