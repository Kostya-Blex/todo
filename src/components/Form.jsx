import React from "react";

export const Form = (props) => {
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //console.log(props.todos);
        if (props.inputText) {
          props.setTodos([...props.todos, { text: props.inputText, completed: false, id: Math.random() }]);
        }
        props.setInputText("");
      }}
    >
      <input
        value={props.inputText}
        onChange={(e) => props.setInputText(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Enter todo"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
