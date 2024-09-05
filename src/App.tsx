import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()          
   if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
      console.log(todos)
    }
    else{
      toast.warn("Please enter a Task!");
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>
     <TodoList todos={todos} setTodos={setTodos}
     completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    </div>
  );
}

export default App;
