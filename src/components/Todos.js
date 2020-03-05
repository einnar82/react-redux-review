import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((item, key) => {
      return (
        <div className="collection-item" key={key}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(item.id)}
          >
            {item.name}
          </span>
        </div>
      );
    })
  ) : (
    <span className="red">No todo</span>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
