import React, { useState } from 'react';
import Rooms from './Rooms';
import { Link, Redirect } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
export default function Home() {
    const [search, setSearch] = useState("");


    const onHandleSubmit = (e) => {
        e.preventDefault();
        setSearcch("")
    }

    return (
        <>
            <div className="HeaderImage">
                <div className="jumbotron homeImg p-3 p-md-5 text-white rounded " >
                    <div className="col-md-6 px-0  " >
                       
                        <p className="lead text-white d-flex flex-column"><span className="my-0">The</span>
                        <span className="my-0">Greatest</span>
                        <span className="my-0">Outdoors</span>
                        </p>
                        
                        <h2 className="airbnbDescription">Wishlists curated by Airbnb.</h2>
                    </div>
                    <div className="d-flex justify-content-center">

                        <form className="form-inline searchForm s my-2 my-lg-0" style={{background: "white", borderRadius: "30px"}} onSubmit={onHandleSubmit}>
                            <input className="form-control searchForm mr-sm-2" style={{fontSize: "30px", border: "none"}} type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Where are you going?" aria-label="Search" required/>
                           {
                               search===""?  <button className="btn btn-outline-light text-dark searchBtn my-2 my-sm-0" type="submit"><SearchIcon/></button> :<Link to={"/search/" + search}>
                                <button className="btn btn-outline-light text-dark searchBtn my-2 my-sm-0" type="submit"><SearchIcon/></button>
                            </Link>
                           }
                        </form>
                    </div>

                </div>
                <Rooms />
                <div className="container mt-5" >
                   <h1 className="my-2">Explore nearby</h1>
                   <div className="row">
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               <Link to="/search/jaipur">Jaipur</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               <Link to="/search/delhi">Delhi</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               
                               <Link to="/search/Mumbai">Mumbai</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               <Link to="/search/Shimla">shimla</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               <Link to="/search/Ajmer">Ajmer</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               <Link to="/search/Jodhpur">Jodhpur</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk">
                               <Link to="/search/kota">kota</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                      <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                         <div className="row  d-flex" >
                              <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{width: "70px", height: "70px",borderRadius:"14px", marginRight: "12px"}}/>
                              <div className="exploreDesk"> 
                               <Link to="/search/Alwar">Alwar</Link>
                               <p>9 hours drive</p>
                              </div>                             
                         </div>
                      </div>
                   </div>
                </div>
            </div>

        </>
    )
}
