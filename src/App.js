import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./CreateTodoButton";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "bañar perritos", completed: true },
  { text: "lavar la loza", completed: false },
  { text: "comer comidita", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <AddTodoButton />
    </React.Fragment>
  );
}

export default App;
