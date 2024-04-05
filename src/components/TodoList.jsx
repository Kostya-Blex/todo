import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <TodoItem todo={todo} setTodos={props.setTodos} todos={props.todos} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
