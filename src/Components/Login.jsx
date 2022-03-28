import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import styled from "styled-components"

const Login = () => {

    const [loginData , setLoginData] = React.useState({
        password:"",
        username:""
    })

    const {password , username } = loginData;

    const {login} = React.useContext(AuthContext);

    const handleChange = (e) => {
        const { name , value } = e.target;

        setLoginData({
            ...loginData ,
            [name] : value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method : "POST",
            body : JSON.stringify(loginData),
            headers: {"Content-Type":"application/json"}
        })
        .then((res) => res.json())
        .then((res) => login(res.token))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="password" placeholder="password" value={password} onChange={handleChange} />
                <br />
                <input type="username" name="username" placeholder="username" value={username} onChange={handleChange} />
                <br />
                <input type="submit" value="LOGIN" />
           </form>
        </div>
    )
}

export { Login }