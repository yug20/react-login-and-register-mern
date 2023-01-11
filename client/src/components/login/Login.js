import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
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

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message);
                navigate("/")
                setLoginUser(res.data.user)
            })
    }

    return (
        <>
            <div className="login">
                {/* {console.log("User", user)} */}
                <h1>Login</h1>
                <input name='email' value={user.email} type="text" placeholder='your mail' onChange={handleChange} />
                <input name='password' value={user.password} type="password" placeholder='your password' onChange={handleChange} />
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" type="submit"
                    onClick={() => navigate("/")}
                >
                    Register</div>
            </div>
        </>
    )
}

export default Login
