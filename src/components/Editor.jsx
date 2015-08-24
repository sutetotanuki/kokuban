import React, { Component } from 'react';

export default class Editor extends Component{
  getInitialState() {
    return {
      text: "Eneter your code here"
    };
  }

  handleChange(e) {
    this.setState({text: e.target.value });
  }

  render() {
    return(
      <div className="editor">
        <textarea onChange={handleChange}>{this.state.text}</textarea>
      </div>
    );
  }
};
