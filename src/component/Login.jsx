  import { useState , useContext } from 'react'
//  myContext from '../contextApi/mycontext'
import myContext from '../contextApi/mycontext'
function Login({setIsNotlogin}) {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let { user, setUser } = useContext(myContext);
  let handleSubmitt = (e) => {
    e.preventDefault()
    console.log('Submitting login form');
    console.log('Username:', userName);
    console.log('Password:', password);
    setUser((prevUser) => ({
      ...prevUser, // Spread the previous user data
      userName,
      password,
    }));
    if(userName && password){
      setIsNotlogin(prev => !prev);
    }
    setPassword('')
    setUserName('')
    console.log('User:', user);
    
  };
  return (
    <>
      <h2 className='text-4xl text-center mb-4 font-extrabold'>Login</h2>
      <input
        type="text"
        className='border-2 rounded-md m-2 p-2 dark:bg-gray-600'
        placeholder='Enter your name'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        type="password"
        className='border-2 rounded-md m-2 p-2 dark:bg-gray-600' 
        placeholder='Enter your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className='border-2 rounded-md m-2 p-2 dark:bg-slate-400'
        onClick={e => handleSubmitt(e)}
      >
        Login
      </button>
    </>
  );
}

export default Login
