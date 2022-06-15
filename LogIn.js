import React, { useState } from 'react';
import './main/Style.scss';
import {BrowserRouter as Router, Routes, Route,  useParams ,useNavigate  } from 'react-router-dom';

const LogIn = () => {

    const[password, setPassword] = useState('');
    const {id} =useParams();
    let user = JSON.parse(localStorage.getItem('user'));
    
    const navigate = useNavigate();
 
    const Check = () =>{
        if(password === user[id-1].username){
            localStorage.setItem('isLogin',JSON.stringify([user[id-1]]));
            localStorage.setItem('check',false);
            navigate("/Dashboard/:id");
            
        }else{
            alert(" not match");
        }
      
        
        setPassword('');

    }
    
    const handlePassword =(event) =>{
        setPassword(event.target.value);
    }
   
    console.log(password);
    
    return (
        <>
        
            <div className="login" >
                <form className="form-signin">
                    <img className="mb-4" src="https://banner2.cleanpng.com/20180426/lwq/kisspng-computer-icons-login-management-user-5ae155f3386149.6695613615247170432309.jpg" alt=""  />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required  value={user[id-1].email} readOnly/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required autoFocus value={password} onChange={handlePassword}/>
                    <div className="checkbox mb-3">

                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={Check}>Sign in</button>
                </form>
            </div>
        </>
    )
}

export default LogIn;