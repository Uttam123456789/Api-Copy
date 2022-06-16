import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Protected = (prop) => {
    const { id } = useParams();
    // const { Component } = prop;
    const navigate = useNavigate();

    let login = JSON.parse(localStorage.getItem('isLogin'));
    console.log(login.id);
    console.log(id);

    useEffect(() => {

        if (prop.dash === "dashboard") {
            if (login.length === 0) {
                navigate("/login");
            } else if (login.length !== 0) {
                navigate("/Dashboard" + login.id);
            }

            console.log("test success", login);
        }
        else if (prop.photo === "photo") {
            if (login.length === 0) {
                navigate("/login");
            }
            else if(login.length !== 0 && login.id){
              
               
            }
        }
    }, [])

    return (
        <div>
            {/* <Component /> */}
        </div>
    )
}
export default Protected;