import React from 'react';
import { Link } from 'react-router-dom';

const AlbumSearch = ({ album, input }) => {

    let newArr = album.filter((ele, index) => {
        return ele.title === input;
    })
    console.log("akjf", newArr);
    return (
        <>
            {
                newArr.map((ele, index) => {
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
                                                        <Link to={"/Photo/" + index} className="btn btn-sm btn-outline-secondary">View</Link>
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
                            </div>
                        </>
                    )
                })
            }


        </>

    )
}

export default AlbumSearch