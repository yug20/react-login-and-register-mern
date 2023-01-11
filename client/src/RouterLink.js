import React, { useState } from 'react';
import './App.css';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Routes, Route, Router } from "react-router-dom";

function RouterLink() {

    const [user, setLoginUser] = useState({

    })

    return (
        <>
            <div className="App">
                {/* <Router>
                    <Routes>
                        <Route exact path="/">
                            {
                                user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
                            }
                        </Route>
                        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Router> */}
                {/* <Router> */}
                <Routes>
                    <Route exact path="/" element={user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
                    <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
                {/* </Router> */}
            </div>
        </>
    );
}

export default RouterLink;
