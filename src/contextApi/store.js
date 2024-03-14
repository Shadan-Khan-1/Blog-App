import { createContext, useContext, useState } from "react";

export const AuthContext =createContext();

export const Authprovoider = ({children})=>{
    const [token, setToken]= useState(localStorage.getItem('token'))

    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    };
    let isLoggedIn = !!token;
 
    // console.log('is user logIn kya =' ,isLoggedIn);

   const LogoutUser = ()=>{
    setToken('');
    return localStorage.removeItem('token');
    }

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS , LogoutUser}}>
        {children}
    </AuthContext.Provider>
};


export const useAuth = ()=>{
    const AuthContextValue = useContext(AuthContext); 
    if (!AuthContextValue) {
        throw new Error("useAuth used outside of Provider");
    }
    return AuthContextValue;
}