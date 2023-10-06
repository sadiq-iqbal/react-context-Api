import { useEffect, useState } from "react";
import myContext from "./mycontext"
function ContextProvider({children}) {
    let [user,setUser] = useState(false);
    let [themeMode, setThemeMode] = useState('light')
    let darkEnable = () => {
        setThemeMode('dark')
    }
    let lightEnable = () => {
        setThemeMode('light')
    }
    useEffect(() => {
      document.querySelector('html').classList.remove('dark')
      document.querySelector('html').classList.add(themeMode) 
    },[themeMode])
    const handleChange = (e)=>{
      let dStatus = e.currentTarget.checked
      console.log(dStatus)
      if(dStatus){
        darkEnable()
      }else{
        lightEnable()
      }
    }
  return (
    <myContext.Provider value={{setUser ,user , themeMode, darkEnable, lightEnable, setThemeMode , handleChange}}>
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider;
