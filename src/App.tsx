import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()          
   if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
      console.log(todos)
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>
     <TodoList todos={todos} setTodos={setTodos}
     completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    </div>
  );
}

export default App;
