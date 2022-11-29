import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoadng, setIsLoading] = React.useState(false);
  const [isErr,setIsErr]=React.useState(false)
  const [succ,setSucc]=React.useState(false)

  return (
    <AuthContext.Provider value={{ isLoadng,setIsLoading,succ,setIsErr,isErr,setSucc }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;