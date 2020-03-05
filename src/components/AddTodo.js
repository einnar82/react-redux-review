import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    name: null
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label type="text">Add new todo:</label>
          <input
            type="text"
            name="todo"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}
