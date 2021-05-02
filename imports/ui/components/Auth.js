import { useTracker } from 'meteor/react-meteor-data';
import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import { UsersCollection } from '../../api/UserCollection';
import { AirbnbCollection } from '../../api/AirbnbCollection'
import uuid from 'react-uuid';

export function Register() {
    const setUser = useContext(UserContext);
    const [authRegister, setAuthRegister] = useState({
        email: "", password: "", cpassword: ""
    })
    const counts = useTracker(() =>
    UsersCollection.find({email: authRegister.email}).count()
   );

    const authChange = (e) => {
        e.preventDefault();
        setAuthRegister({
            ...authRegister, [e.target.name]: e.target.value
        })
    }
    
    const registerSubmit = (e) => {
        e.preventDefault();

        if(counts){
            alert("Email Already exist");
        }else{
            if (authRegister.password === authRegister.cpassword) {
                let id = uuid()
                UsersCollection.insert({
                   _id: id, email: authRegister.email, password: authRegister.password, createdAt: new Date()
                })
               
                localStorage.setItem("user", JSON.stringify({userLogin: "true", _id:id }));
                
                setUser({
                    userLogin: true, userId: id
                })
                const userResult = localStorage.getItem("user");
               
            } else {
                alert("Password doesn't match")
            }

        }
    }
    return (
        <div className="container">
            <div className="row loginRow">
                <div className="col-lg-6 loginForm p-3 col-12 col-md-6 m-auto">
                    <form onSubmit={registerSubmit}>
                        <div className="form-group">
                            <label htmlFor="emil">Email address</label>
                            <input type="email" name="email" value={authRegister.email} onChange={authChange} className="form-control" id="email" aria-describedby="email" placeholder="Enter your email" required/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={authRegister.password} onChange={authChange} className="form-control" id="password" placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" name="cpassword" value={authRegister.cpassword} onChange={authChange} className="form-control" id="cpassword" placeholder="Confirm Password" required/>
                        </div>
                        <button type="submit" className="btn btn-info">SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export function Login() {
    const setUser = useContext(UserContext);
    const [AuthLogin, setAuthLogin] = useState({
        email: "", password: ""
    })
    const counts = useTracker(() =>
    UsersCollection.find({email: AuthLogin.email, password: AuthLogin.password}).count()
   );
    const data = useTracker(() =>
    UsersCollection.find({email: AuthLogin.email, password: AuthLogin.password}).fetch()
   );
    const authChange = (e) => {
        e.preventDefault();
        setAuthLogin({
            ...AuthLogin, [e.target.name]: e.target.value
        })
    }
    const loginSubmit = (e) => {
        e.preventDefault();
       
        if(counts){
          
             localStorage.setItem("user", JSON.stringify({userLogin: "true", _id:data[0]._id }));
           
             const userResult = localStorage.getItem("user");
               
            setUser({
                userLogin: true, userId: data._id
            })
        }else{
            alert("Invalid creadentials")
        }
    }
    return (
        <div className="container">
            <div className="row loginRow">
                <div className="col-lg-6 loginForm p-3 col-12 col-md-6 m-auto">
                    <form onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label htmlFor="emil">Email address</label>
                            <input type="email" onChange={authChange} name="email" value={AuthLogin.email} className="form-control" id="email" aria-describedby="email" placeholder="Enter your email" required/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input name="password" onChange={authChange} value={AuthLogin.password} type="password" className="form-control" id="password" placeholder="Password" required/>
                        </div>

                        <button type="submit" className="btn btn-info">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default function Auth() {
    const [authButton, setAuthButton] = useState('login');
  
    return (
        <div className="container auth">

            <div className="authButtons mt-4">
                <button onClick={() => setAuthButton('login')} className="btn mx-1 btn-outline-info">Login</button>
                <button onClick={() => setAuthButton('signup')} className="btn mx-1 btn-outline-info">SignUp</button>
            </div>

            {authButton === 'login' ? <Login /> : <Register />}
        </div>
    )
}
