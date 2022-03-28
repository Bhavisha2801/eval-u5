import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvide = ({children}) => {

    const [isAuth , setIsAuth] = React.useState(false);
    const [token , setToken] = React.useState("")
    const navigate = useNavigate()

    const login = () => {
        setIsAuth(true)
        setToken(token)
        navigate('/')
    }

    const logout = () => {
        setIsAuth(false)
    }

    return <AuthContext.Provider value={{isAuth , token , login , logout}}>{children}</AuthContext.Provider>
}