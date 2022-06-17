import React from 'react';
import { NavLink, Outlet ,useNavigate } from "react-router-dom";

const NavBar = () => {
    let navigate = useNavigate();
    let check = JSON.parse(localStorage.getItem('isLogin')).length;
    console.log(check);

    const LogOut = () =>{
        localStorage.setItem('isLogin',JSON.stringify([]));
        navigate("/AllUser");
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
                            <NavLink className="nav-link" to={"/AllUser"} Link>All User </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link" to={"/login"} Link>DashBoard</NavLink>

                        </li>
                    </ul>
                    {
                        (check === 0 )?  <NavLink to={"/login"} className="btn btn-outline-success my-2 my-sm-0">Log in</NavLink>
                        :<button className="btn btn-outline-success my-2 my-sm-0" onClick={LogOut}>Log Out</button> 
                           

                    }


                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar