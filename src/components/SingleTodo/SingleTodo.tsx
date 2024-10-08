import React, { useState, useRef, useEffect } from "react";
import "./SingleTodo.css";
import { Todo } from "../../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, completedTodos, setCompletedTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


useEffect(()=>{
  setCompletedTodos(todos.filter((todo) => todo.isDone === true));
})

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
        todos.map((todo) => 
            todo.id === id ? { ...todo, todo: editTodo } : todo
          )
    );
    setEdit(false)
  };

  useEffect( () => {
    inputRef.current?.focus()
  }, [edit])

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="single-todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
        ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo-edit-text"
        />
      ) : todo.isDone ? (
        <s className="todo-single-text">{todo.todo}</s>
      ) : (
        <span className="todo-single-text">{todo.todo}</span>
      )}
      <div className="icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
         <AiFillEdit/>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          < AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
