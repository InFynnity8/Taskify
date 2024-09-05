import React from "react";
import "./TodoList.css";
import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
   <div className="container">
    <div className="todos">
      <span className="todos-heading">
        Active Tasks
      </span>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
    <div className="todos remove">
    <span className="todos-heading">
       Completed Tasks
      </span>
      {
      completedTodos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={completedTodos}
          setTodos={setCompletedTodos}
        />
      ))} 
    </div>

   </div>
  );
};

export default TodoList;
