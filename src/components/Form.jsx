import React from 'react'
import { useState } from 'react'

function Form({createTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    if(value === '' || value === null) {
      return alert('Digite uma atividade!')
    }
    e.preventDefault();
    createTodo(value);
    setValue('');
  }

  return (
    <form action="" className='font-primary w-full ' onSubmit={handleSubmit}>
      <div className='max-h-[48px]'>
        <input type="text" className='outline-none bg-transparent border-2 border-gray-500 p-4 w-[300px] h-[48px] text-white mb-8 rounded-xl placeholder:text-gray-300' placeholder='Que atividade você têm para hoje?' onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className='bg-gray-700 border-none p-3 text-white cursor-pointer rounded-lg ml-2 hover:bg-gray-700/50 transition duration-300'>Adicionar</button>
      </div>
      <div className='flex gap-2 py-5'>
        <li value="" className='bg-emerald-500 rounded-md p-1 list-none'>Trabalho</li>
        <li value="" className='bg-sky-500 rounded-md p-1 list-none'>Faculdade</li>
        <li value="" className='bg-yellow-500 rounded-md p-1 list-none'>Financeiro</li>
        <li value="" className='bg-rose-500 rounded-md p-1 list-none'>Casa</li>
      </div>
    </form>
  )
}

export default Form