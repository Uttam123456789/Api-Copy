import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Album = (prop) => {
    const [album, setAlbum] = useState([]);
    let id = prop.id;
    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then((response) => response.json())
            .then((data) => {
                setAlbum(data);
            })
        console.log('fetch');
    }

    console.log(id)

    useEffect(() => {
        fetchData();

    }, [])


    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input type="text" className="form-control mr-sm-2 " placeholder="Search" aria-label="Search" />

                </form>
            </nav>
            <div className="bg-secondary" id="user">

                {album.map((ele, index) => {
                    return (
                        <>
                            <div className="album py-1" key={index} id="eachUser">
                                <div className="container">
                                    <div className="row">
                                        <div className="card mb-4 shadow-sm">
                                            <img
                                                id="img"
                                                src="https://images.unsplash.com/photo-1621609764710-57a57cb444f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxCUzVZTUxvUGwzSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                                                width="250"
                                                height="170"
                                            />
                                            <div className="card-body">
                                                <h6>{ele.title}</h6>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className="">
                                                        <Link to={"/Photo/" + id} className="btn btn-sm btn-outline-secondary">View</Link>
                                                    </div>
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

export default Album;