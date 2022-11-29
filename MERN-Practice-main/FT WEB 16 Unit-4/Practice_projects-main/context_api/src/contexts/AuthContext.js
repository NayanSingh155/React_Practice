import {createContext,useState} from 'react';
export const AuthContext = createContext();
export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const toggleAuth = () => {
        setIsAuth(!isAuth ? true: false)
    
    }
return <AuthContext.Provider value={{toggleAuth,isAuth}}>
{children}
</AuthContext.Provider>
}
