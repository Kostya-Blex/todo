import React from "react";

export const TodoItem = (props) => {
  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    props.setTodos(props.todos.filter((todo) => todo.id !== props.todo.id));
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.todo.text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
