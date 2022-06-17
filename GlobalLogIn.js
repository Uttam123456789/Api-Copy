import React, { useState } from 'react';
import './main/Style.scss';
import { useNavigate } from 'react-router-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

const GlobalLogIn = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    let users = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const Check = () => {

        let newmail = mail.trim();
        let newpass = password.trim()

        if(newmail.length !== 0 && newpass.length !== 0){
        for(let i = 0 ; i < users.length ; i++){
            if(users[i].email===mail && users[i].username){
                alert("match");
                
                localStorage.setItem('isLogin',JSON.stringify(users[i]));
                navigate("/Dashboard/"+ (i+1));
                break;
                
            }
            else if(i === users.length-1){
                alert("Wrong mail or Password !!!");
                navigate("/AllUser");
                break;
                
            }
            
        }
    }else{
        alert("Please enter Mail And Password");
    }



        setMail('');
        setPassword('');
    }
    console.log(mail);
    const handleMail = (event) => {
        setMail(event.target.value);
    } 
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    return (
        <>

            <div className="login" >
                <form className="form-signin">
                    <img className="mb-4" src="https://banner2.cleanpng.com/20180426/lwq/kisspng-computer-icons-login-management-user-5ae155f3386149.6695613615247170432309.jpg" alt="" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus value={mail} onChange={handleMail} />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={handlePassword} />
                    <div className="checkbox mb-3">
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={Check}>Sign in</button>
                </form>
            </div>
        </>
    )
}

export default GlobalLogIn;