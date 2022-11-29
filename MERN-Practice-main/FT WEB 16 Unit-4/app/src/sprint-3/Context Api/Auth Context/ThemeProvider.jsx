import React, { createContext } from 'react';

export const ThemeContext = createContext()

function ThemeContextProvider({children}){
    const [isTheme, setIsTheme] = React.useState("white")
   const toggleTheme=()=>{
       setIsTheme(isTheme==="white"? "black":"white")
   }
    return (
        <ThemeContext.Provider value={{toggleTheme,isTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider