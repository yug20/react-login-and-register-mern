import React, { useState } from 'react'
import "./Register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        // console.log(e.target);
        // console.log(name, value);
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user;

        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login");
                })
        } else {
            alert("invalid");
            console.log("invalid");
        }
    }

    return (
        <>
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <input name='name' value={user.name} type="text" placeholder='your name' onChange={handleChange} />
                <input name='email' value={user.email} type="text" placeholder='your mail' onChange={handleChange} />
                <input name='password' value={user.password} type="password" placeholder='your password' onChange={handleChange} />
                <input name='reEnterPassword' value={user.reEnterPassword} type="password" placeholder='re-enter password' onChange={handleChange} />
                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button"
                    onClick={() => navigate("/login")}
                >login</div>

            </div>
        </>
    )
}

export default Register
