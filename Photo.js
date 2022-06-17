import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                                            src={ele.thumbnailUrl}
                                            width="250"
                                            height="170"
                                        />
                                        <div className="d-flex justify-content-center align-items-center">
                                                    <div className="">
                                                        <Link to={"/"} className="btn btn-sm btn-outline-secondary">View</Link>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-secondary"
                                                    >
                                                        Delete
                                                    </button>

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