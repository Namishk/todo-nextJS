import { useState } from "react"
import Router from 'next/router'

export default function Home() {
  
  const [uId, setUid] = useState('');
  const [pass, setPass] = useState('');

  const login = () => {
    if(uId === "root" && pass === "root"){
      console.log('OK')
      Router.push('/todo')
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <form onSubmit = {e => e.preventDefault()} className='h-40 border-2 border-blue-900 rounded-md p-4 flex flex-col justify-center items-center gap-2 '>
        <label>
          Username :&nbsp; <input type='text' placeholder="username"
          value={uId}
          onChange={e=> setUid(e.target.value)}
          className='border-b-2 border-black outline-none'
          />
        </label>
        <br/>
        <label>
          Password :&nbsp; <input type='password' placeholder="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className='border-b-2 border-black outline-none'
          />
        </label>
        <br/>
        <button type='submit' value='Log In' onClick={login} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log In</button>
      </form>
    </div>
  )
}
