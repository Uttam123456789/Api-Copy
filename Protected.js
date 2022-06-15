import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (prop) => {
    const { Component } = prop;
    const navigate = useNavigate();

    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('isLogin'));
        if (true) {
            navigate("/login");
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}
export default Protected;