import React,{useState, useEffect, useRef} from 'react';
import Header from './components/Header';
import Home from './components/Home'
import {HashRouter, Route,Switch, Redirect} from 'react-router-dom';
import Auth from './components/Auth.js';
import Room from './components/Room.js';
import Search from './components/Search.js';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Host from './components/Host';
import Inspired from './components/Inspired';
export const UserContext=React.createContext();
export const App = () => {
  const [user,setUser] = useState({
    userLogin: false, userId: ''
  })

useEffect(() => {
   
  if(user.userLogin===false){
    if(!localStorage.getItem("user")){
      localStorage.setItem("user", JSON.stringify({userLogin: false, _id: "" }));
    }
    if( JSON.parse(localStorage.getItem("user")).userLogin!==false) {
      setUser({
        userLogin: "true", userId: JSON.parse(localStorage.getItem("user"))._id
      })
    }
  }
  console.log(user)
},[user])

  return(
  <HashRouter>  
  <ScrollTop/>
   <UserContext.Provider value={setUser}>
   <Header user={user}/>
   </UserContext.Provider>
  <Switch>
    <Route path='/' exact component={()=><Home />}/>
    <Route path='/Room/:id' component={Room}/> 
       <Route path='/search/:searchKey' component={Search}/>
  <Route path='/host' render={()=>JSON.parse(localStorage.getItem("user")).userLogin==="true"? <Host />: <Redirect to='/Auth'/> }/>
  <Route path="/inspired" component={Inspired}/>
   <UserContext.Provider value={setUser}>
    <Route path='/Auth' exact render={()=>JSON.parse(localStorage.getItem("user")).userLogin==="true"?<Redirect to='/' />: <Auth/>}/>
   </UserContext.Provider>
  
    <h1>Welcome to Mohit!</h1>
  </Switch> 
  <Footer/>
  </HashRouter>
  );
};

