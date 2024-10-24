import React from 'react'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'

function Todo({task, deleteTodo, editTodo}) {
  return (
    <div className='group flex relative bg-gray-700 hover:bg-gray-700/50 transition duration-300 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <div className='absolute w-[4px] h-[35px] bg-emerald-500 group-hover:bg-emerald-200 -left-[2px] rounded-full transition duration-300'></div>
      <div className='absolute w-[4px] h-[35px] bg-emerald-500 group-hover:bg-emerald-200 -left-[2px] rounded-full transition duration-300 group-hover:blur-md'></div>
      <div className='flex justify-between w-full items-center'>
      <p className='font-primary'>{task.task}</p>
      <div className='flex items-center gap-x-4'>
        <div className='group/icon1 flex justify-center items-center hover:-translate-y-1 bg-neutral-950 w-8 h-8 rounded-full transition duration-300'>
        <AiFillEdit className="text-xl group-hover/icon1:rotate-12 group-hover/icon1:scale-110 group-hover/icon1:text-emerald-500 transition duration-300" onClick={() => editTodo(task.id)}/>
        </div>
        <div  className='group/icon2 flex justify-center items-center bg-neutral-950 w-8 h-8 rounded-full hover:-translate-y-1 transition duration-300'>
        <AiFillDelete className="text-xl group-hover/icon2:rotate-12 transition group-hover/icon2:scale-110 group-hover/icon2:text-pink-700 duration-300" onClick={() => deleteTodo(task.id)}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Todo