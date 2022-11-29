import {createContext,useState} from 'react';

 export const ThemeContext = createContext();
 export const ThemeContextProvider =({children})=>{
     const [theme,setTheme] = useState("white");
     const handleChangeTheme =() =>{
         setTheme(theme==="white"?"black":"white");
     }
    return <ThemeContext.Provider value={{theme,handleChangeTheme}}>
        {children}
    </ThemeContext.Provider>
}