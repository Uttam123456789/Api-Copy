import React from "react";
import { Link } from "react-router-dom";
import './main/Style.scss';

const Main = (prop) => {
    const randomImg = () => {
        let arrImg = ["https://images.unsplash.com/photo-1653629154351-3072ee211a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1653326243366-39679dc05642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODYwODcwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "https://images.unsplash.com/photo-1653494302481-c13ac57db924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1621609764710-57a57cb444f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxCUzVZTUxvUGwzSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"];
        let randImg = Math.floor(Math.random() * 6);
        return arrImg[randImg];
    }

    return (
        <>
            <div className="album py-5 " key={prop.ele.id} id="eachUser">
                <div className="container">
                    <div className="row">
                        <div className="card mb-1 shadow-sm">
                            <img
                                id="img"
                                src={randomImg()}

                            />
                            <div className="card-body ">
                                <h5>{prop.ele.name}</h5>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="">
                                        <Link to={"/login/" + prop.ele.id} className="btn btn-sm btn-outline-secondary">Log in</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Main;