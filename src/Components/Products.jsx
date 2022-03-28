import React from "react";

const Products = () => {

    const [formData , setFormData] = React.useState({
        email:"",
        password:"",
        username:"",
        number:"",
        description:""
    })

    const {name , email , password , username , number , description} = formData;


    const handleChange = (e) => {
        const { name , value } = e.target;

        setFormData({
            ...formData ,
            [name] : value
        })
    }


    const handleSubmit = (e) => {

        fetch(`http://localhost:3001/data`)
        .then((res) => res.json())
        .then((res) => setFormData(res.token))
    }


    return (
        <div>
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
                <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}



export { Products }