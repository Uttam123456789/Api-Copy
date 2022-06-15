import React from 'react'

const NavBar = () => {
    let check = false;

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
                        check ? <button className="btn btn-outline-success my-2 my-sm-0" onClick={LogOut}>Log Out</button> :
                            <NavLink to={"/login"} className="btn btn-outline-success my-2 my-sm-0">Log in</NavLink>

                    }


                </div>
            </nav>
        </>
    )
}

export default NavBar