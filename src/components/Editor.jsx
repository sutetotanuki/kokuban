import React, { Component } from 'react';

export default class Editor extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      state: "Enter to edit"
    };
  }

  handleChange(e) {
    this.setState({text: e.target.value });
  }

  render() {
    return(
      <div className="editor">
        <form>
          <textarea onChange={this.handleChange}>{this.state.text}</textarea>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
