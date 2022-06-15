import React, { useState, useEffect } from 'react'

const Photo = () => {
    const [photo, setPhoto] = useState([]);


    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((response) => response.json())
            .then((json) => {
                setPhoto(json)
            })
    }
    console.log(photo);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">All User <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DashBoard</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" >Log in</button>
                    </form>
                </div>
            </nav>
            <input className="form-control w-75 m-3" type="text" placeholder="Search" />
            {/* Photo */}
            <div className="bg-secondary" id="user">
                {photo.map((ele, index) => {
                    return (
                        <>
                            <div className="" key={index} id="eachUser">
                                <div className="">
                                    <div className="row">
                                    <div className="card mb-4 shadow-sm">
                                        <img
                                            id="img"
                                            src={photo[index].url}
                                            width="250"
                                            height="170"
                                        />
                                        <div className="card-body">

                                            <div className="d-flex justify-content-space-around align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
</div>
                        </>
                    )
                })
                }
            </div>
        </>
    )
}

export default Photo;