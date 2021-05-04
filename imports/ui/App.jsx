import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Home from './components/Home'
import {HashRouter, Route,Switch, Redirect} from 'react-router-dom';
import Auth from './components/Auth.js';
import Room from './components/Room.js';
import Search from './components/Search.js';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
export const UserContext=React.createContext();

export const App = () => {
  const [user,setUser] = useState({
    userLogin: false, userId: ''
  })

useEffect(() => {
   if(JSON.parse(localStorage.getItem("user")).userLogin==="true"){
     setUser({
       userLogin: "true", userId: JSON.parse(localStorage.getItem("user"))._id
     })
   }
}, [])
  
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
   
   <UserContext.Provider value={setUser}>
    <Route path='/Auth' exact render={()=>user.userLogin?<Redirect to='/' />: <Auth/>}/>
   </UserContext.Provider>
    <h1>Welcome to Mohit!</h1>
  </Switch> 
  <Footer/>
  </HashRouter>
  );
};
