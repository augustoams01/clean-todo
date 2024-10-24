import React from 'react'
import { useState } from 'react'

function Edit({editTodo, task}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('');
  }

  return (
    <form action="" className='mb-4 flex justify-between items-center font-primary w-full bg-neutral-800 p-2 rounded-md' onSubmit={handleSubmit}>
      <input type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] h-[40px] text-white rounded placeholder:text-gray-300' placeholder='Editar atividade' onChange={(e) => setValue(e.target.value)} value={value}/>
      <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2 hover:bg-gray-700/50 transition duration-300'>Atualizar</button>
    </form>
  )
}

export default Edit