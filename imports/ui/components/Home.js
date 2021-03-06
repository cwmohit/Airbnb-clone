import React, { useState } from 'react';
import Rooms from './Rooms';
import "./css/Home";
import { Link, Redirect } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
export default function Home() {
  const [search, setSearch] = useState("");
const [adults,setAdults]=useState(0);
const [childs,setChilds]=useState(0);
const [infants,setInfants]=useState(0);
const [dropmenu,setDropmenu]=useState("d-flex");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearcch("")
  }

  return (
    <>
      <div className="HeaderImage">

        <div className="jumbotron homeImg text-white rounded " >
          <div className="d-flex  justify-content-center">
          <form className="form-inline row py-2 d-md-none d-flex s my-2 my-lg-0" style={{ background: "white", borderRadius: "30px" }} onSubmit={onHandleSubmit}>
              <div className="col-lg-3 col-md-3 d-flex col-10 m-auto">

                <input className=" searchForm mr-sm-2 w-100" style={{ fontSize: "24px", border: "none" }} type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Where are you going?" aria-label="Search" required />
                {
                  search === "" ? <button className="btn btn-circle text-dark searchBtn my-2 my-sm-0" type="submit"><SearchIcon /></button> : <Link to={"/search/" + search}>
                    <button className="btn btn-circle text-dark searchBtn my-2 my-sm-0" type="submit"><SearchIcon /></button>
                  </Link>
                }
              </div>
           </form>   
            <form className="form-inline d-md-flex d-none row py-2  s my-2 my-lg-0" style={{ background: "white", borderRadius: "30px" }} onSubmit={onHandleSubmit}>
              <div className="col-lg-3 col-md-3 d-flex flex-column col-10 m-auto">
                <label className="text-dark  ml-2 labelSearch font-weight-bold">Location</label>
                <input className=" searchForm ml-2 mr-sm-2" style={{ fontSize: "16px", border: "none" }} type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Where are you going?" aria-label="Search" required />

              </div>

              <div className="col-lg-3 col-md-3">
                <label className="text-dark labelSearch">Check-In</label>
                <input type="date" className=" border-none" />
              </div>

              <div className="col-lg-3 col-md-3">
                <label className="text-dark labelSearch">Check-Out</label>
                <input type="date" className=" border-none" />
              </div>
            
              <div className="dropdown d-flex  col-lg-3 col-md-3">
                <input type="text" placeholder={adults+childs+infants>0 ? adults+childs+infants+" Guests" : "Add Guest"}  className="w-50 dropdown-toggle border-none" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                {
                  search === "" ? <button className="btn btn-circle text-dark searchBtn my-2 my-sm-0" type="submit"><SearchIcon /></button> : <Link to={"/search/" + search}>
                    <button className="btn btn-circle text-dark searchBtn my-2 my-sm-0" type="submit"><SearchIcon /></button>
                  </Link>
                }
                <div className={"dropdown-menu addGuestsDropDown"}  aria-labelledby="dropdownMenuButton">
                  <div className="dropdown-item d-flex"><h4>Adults</h4><div className="d-flex align-items-center"><p className="mx-2 addbtn btn btn-light m-auto" onClick={()=>setAdults(adults+1)}><AddIcon /></p><span>{adults}</span> <p className="mx-2 minusbtn btn btn-light m-auto" onClick={()=>setAdults(adults-1)}><RemoveIcon /></p></div></div>
                
                  <div className="dropdown-item d-flex"><h4>Childrens</h4><div className="d-flex align-items-center"><p className="mx-2 addbtn btn btn-light m-auto" onClick={()=>setChilds(childs+1)}><AddIcon /></p><span>{childs}</span> <p className="mx-2 minusbtn btn btn-light m-auto" onClick={()=>setAdults(adults-1)}><RemoveIcon /></p></div></div>
                  
                  <div className="dropdown-item d-flex"><h4>Infants</h4><div className="d-flex align-items-center"><p className="mx-2 addbtn btn btn-light m-auto" onClick={()=>setInfants(infants+1)}><AddIcon /></p><span>{infants}</span> <p className="mx-2 minusbtn btn btn-light m-auto" onClick={()=>setAdults(adults-1)}><RemoveIcon /></p></div></div>
                </div>
              </div>
            </form>
          </div>
          <div className="px-0 outDoordescription row" >
            <div className="col-11 m-auto">

              <p className="lead text-white d-flex flex-column"><span className="my-0">The</span>
                <span className="my-0">Greatest</span>
                <span className="my-0">Outdoors</span>
              </p>

              <h2 className="airbnbDescription">Wishlists curated by Airbnb.</h2>
              <Link to='/inspired'><button className="btn btn-dark">Get Inspired</button></Link>
            </div>
          </div>


        </div>
       
        <div className="container-fluid mt-5" >
          <div className="row">
            <div className="col-11 m-auto">

              <h1 className="my-2 font-weight-bold">Explore nearby</h1>
              <div className="row">
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/jaipur">Jaipur</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/delhi">Delhi</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">

                      <Link to="/search/Mumbai">Mumbai</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/Shimla">shimla</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/Ajmer">Ajmer</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/24e04078-6c6d-4827-93bf-c2d246570199.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/Jodhpur">Jodhpur</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/3849e3f1-d275-43fb-8957-4c90f26e14db.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/kota">kota</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 my-2 col-10 mx-auto ">
                  <div className="row ml-3 d-flex" >
                    <img src="https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240" style={{ width: "70px", height: "70px", borderRadius: "14px", marginRight: "12px" }} />
                    <div className="exploreDesk">
                      <Link to="/search/Alwar">Alwar</Link>
                      <p>9 hours drive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 mb-3" >
          <div className="row">
            <div className="col-11 m-auto">

              <h1 className="font-weight-bold mb-2"> Live Anywhere</h1>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320" className="LiveAnywhereImage img-thumbnail" />
                  <h5 className="ml-3 mt-1">Outdoor getaways</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320" className="LiveAnywhereImage img-thumbnail" />
                  <h5 className="ml-3 mt-1">Unique stays</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320" className="LiveAnywhereImage img-thumbnail" />
                  <h5 className="ml-3 mt-1">Entire homes</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320" className="LiveAnywhereImage img-thumbnail" />
                  <h5 className="ml-3 mt-1">Pets allowed</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-11 m-auto">

              <div className="becomeHostImage mx-2 row">
                <div className="col-lg-5 ml-lg-4 ml-md-2 ml-1 col-md-5 col-10 my-auto">
                  <h2 className="text-white  font-weight-bold hostHeading" >Become a Host</h2>
                  <p className="text-white  hostDes">Earn extra income and unlock upportunities by sharing your space</p>
                  <button className="btn btn-light learnMore">Learn More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container-fluid mt-5 mb-3" >
          <div className="row">
            <div className="col-11 m-auto">

              <h2 className="font-weight-bold mb-2">Discover Experiences</h2>
              <h5 className="mb-3">Unique activities with local experts ??? in person or online.</h5>
              <div className="row">
                <div className="col-lg-4  col-md-4 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320" className="LiveAnywhereImage w-100 img-thumbnail" />
                  <h5 className="ml-3 mt-1">Featured Collection: Wanderlust</h5>
                  <p className="ml-3 text-muted mt-1">Travel from home with online Experience</p>
                </div>
                <div className="col-lg-4   col-md-4 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320" className="LiveAnywhereImage w-100 img-thumbnail" />
                  <h5 className="ml-3 mt-1">Online Experience</h5>
                  <p className="ml-3 text-muted  mt-1">Travel from home with online Experience</p>
                </div>
                <div className="col-lg-4   col-md-4 col-10 m-auto">
                  <img src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320" className="LiveAnywhereImage w-100 img-thumbnail" />
                  <h5 className="ml-3 mt-1">Experiences</h5>
                  <p className="ml-3 text-muted  mt-1">Travel from home with online Experience</p>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-11 m-auto">

              <Rooms />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
