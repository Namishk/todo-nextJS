import { useState, useEffect } from 'react'

export default function Todo() {

  const [list, setList] = useState([]);
  
  const [task, setTask] = useState('');
    const [category, setCategory] =  useState('');

    const addTask = async () => {
        const response = await fetch('../api', {
          method: 'POST',
          body: JSON.stringify({task, category}),
          headers: {
            'content-type': 'application/json'
          }
        });

        const resp = await response.json();

        console.log(resp)

        refreshList();

    }

    const refreshList = async () => {
      const response = await fetch('../api');
        const resp = await response.json();

        setList(resp);
    }

  return (
    <>
    <h1 className='absolute left-1/2 transform -translate-x-1/2 top-10 text-4xl font-bold '>TODO List</h1>
    <div className='w-screen h-screen flex justify-around  items-center '>
      <div className='h-40'>
        <form onSubmit = {e => e.preventDefault()} className='flex flex-col gap-y-4 border-2 border-blue-900 rounded-md p-4'>
              <label>Task : &nbsp; <input type='text' placeholder="Enter Task"
                  value={task}
                  onChange={e=> setTask(e.target.value)}
              /> 
              </label>
              <label>Category : &nbsp; 
                      <select onChange={e=> setCategory(e.target.value)} defaultValue="less Important" >
                          <option value="Important">Important</option>
                          <option value="less Important">Less Important</option>
                          <option value="Can do Later">Can do Later</option>
                      </select>
                  </label>
              <button onClick={addTask} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add</button>
          </form>
      </div>
      <div className='list'>
        {list.map(todo => {
                return(
                    <div key={todo.category}>
                        {todo.task} &nbsp;&nbsp; : &nbsp;&nbsp; {todo.category}
                    </div>
                )
            })}
      </div>
    </div>
    </>
  )
}
