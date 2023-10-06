import { useState } from 'react'
import myContext from './contextApi/mycontext'
import ContextProvider from './contextApi/ContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [isNotlogin, setIsNotlogin] = useState(true)
  return (
    <>
     <ContextProvider>
      <div className='rounded-xl mt-10 flex flex-col dark:bg-slate-800 dark:text-white  justify-center border-black border-4 w-[40vw] place-content-center mx-auto pb-20 pt-6 px-10'>
        {isNotlogin && <Login setIsNotlogin={setIsNotlogin} />}
        <Profile />
      </div>
        
     </ContextProvider>
    </>
  )
}

export default App
