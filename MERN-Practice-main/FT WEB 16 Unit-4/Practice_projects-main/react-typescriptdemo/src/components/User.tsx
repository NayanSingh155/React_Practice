import React from 'react'
type AuthUser ={
    name: string;
    email: string;
}
function User() {
    const [user,setUser] = React.useState<AuthUser |null>(null);
    const handleLogin =()=>{
        setUser({
            name:"anmol",
            email:"anmol@gmail.com",
        })
    }
    const handleLogout =()=>{
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is{user?.name}</div>
        <div>User email is{user?.email}</div>
    </div>
  )
}

export default User