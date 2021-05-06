import React,{useContext, useState,useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {UserContext} from '../App';
export default function Header({user}) {
    const setUser=useContext(UserContext) 
    
    const logoutClick=()=>{
        setUser({userLogin: false, userId: ''});
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify({userLogin: false, _id:"" }));
    }
    
    // useEffect(()=>{ 
    //     if(!user.userLogin){
    //       localStorage.setItem("user", JSON.stringify({userLogin: user.userLogin, _id: user.userId }));
    //     }
    // },[user])

     const authCheck=()=>{
        if(user.userLogin===false){
            return false
          }
         else{
             return true
         }
     }
    return (
        <div className="container-fluid " style={{background: "black"}}>

        <div className="container">
            <nav className="navbar  py-2 navbar-expand-lg navbar-dark " style={{background: "black"}}>
                <Link className="navbar-brand" to="/">Airbnbs</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{border: "none"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                           { authCheck() ?
                            <Link className="nav-link" to="/Auth" onClick={logoutClick}>LogOut</Link> : <Link className="nav-link" to="/Auth">Login</Link>
                           }
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
        </div>
    )
}
