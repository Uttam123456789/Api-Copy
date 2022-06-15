import React, { useState, useEffect } from "react";

import Main from "./Main";

import './main/Style.scss';
import { NavLink, useNavigate } from "react-router-dom";


const AddTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => window.localStorage.setItem("user", JSON.stringify(json)));

    let navigate = useNavigate();
    let users = JSON.parse(localStorage.getItem("user"));

    const LogOut = () => {
        localStorage.setItem('check', false);
        
        localStorage.setItem('isLogin', null);

        navigate("/");
    }

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to={"/"} Link>All User </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link" to={"/Dashboard"} Link>DashBoard</NavLink>

                        </li>
                    </ul>
                    {/* localStorage */}
                    {
                        false ? <button className="btn btn-outline-success my-2 my-sm-0" onClick={LogOut}>Log Out</button> :
                            <NavLink to={"/login"} className="btn btn-outline-success my-2 my-sm-0">Log in</NavLink>

                    }


                </div>
            </nav>
            <div className="bg-secondary" id="user">
                {users.map((ele) => {
                    return (


                        <Main ele={ele} />
                    )
                })
                }
            </div>
            {/* <LogIn /> */}
            {/* <User /> */}
        </>);
};

export default AddTodo;