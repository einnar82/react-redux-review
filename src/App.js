import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: "Eat"
      },
      {
        id: 2,
        name: "Code"
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    const newTodo = Object.assign(
      {},
      {
        ...todo,
        id: this.state.todos.length + 1
      }
    );
    const todos = [newTodo, ...this.state.todos];
    this.setState({
      todos
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
