import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Register = () => {

    const [formData , setFormData] = React.useState({
        email:"",
        password:"",
        username:"",
        number:"",
        description:""
    })

    const {name , email , password , username , number , description} = formData;

    const {register} = React.useContext(AuthContext);

    const handleChange = (e) => {
        const { name , value } = e.target;

        setFormData({
            ...formData ,
            [name] : value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method : "POST",
            body : JSON.stringify(formData),
            headers : {"Content-Type":"application/json"}
        })
        .then((res) => res.json())
        .then((res) => register(res.token))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={name} onChange={handleChange} />
                <br />
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
                <br />
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                <br />
                <input type="text" name="username" placeholder="username" value={username} onChange={handleChange} />
                <br />
                <input type="text" name="number" placeholder="number" value={number} onChange={handleChange} />
                <br />
                <input type="text" name="description" placeholder="description" value={description} onChange={handleChange} />
                <br />
                <input type="submit" value="Redirect to Login Page" />
           </form>
        </div>
    )
}

export { Register }