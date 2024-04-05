import React, { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(
    function filteredTodos() {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    },
    [status, todos]
  );
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
