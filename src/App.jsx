import './App.css'
import TodoList from './components/TodoList'

function App() {


  return (
    <main className='flex justify-center bg-neutral-800 h-screen'> 
      <section className='flex flex-col gap-3 text-center mt-20'>
        <h1 className='font-black text-4xl uppercase tracking-wide text-white flex justify-center items-center gap-5'>
          <div className='-rotate-[85deg]'>🚀</div>Todo List <div>🚀</div></h1>
        <TodoList/>
      </section>
    </main>
  )
}

export default App
