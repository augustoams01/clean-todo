import React from 'react'
import Form from './Form'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import Edit from './Edit';

uuidv4();

function TodoList() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, isEditing: false}])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  
  return (
    <>
          <div className='flex flex-col justify-center bg-neutral-950 rounded-md p-8'>
            <Form createTodo={createTodo}/>
            <div className='h-[2px] rounded-full w-full bg-gray-500 mb-8'></div>
            {
            todos.map((todo, idx) => (
              todo.isEditing ? <Edit key={idx} editTodo={editTask} task={todo}/> :
              <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
            ))
          }
          </div>

    </>
  )
}

export default TodoList