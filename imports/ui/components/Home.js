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
                       
                        <p className="lead text-white">The<br/>
                        Greatest<br/>
                        Outdoors
                        </p>
                        
                        <h2 >Wishlists curated by Airbnb.</h2>
                    </div>
                    <div className="d-flex justify-content-center">

                        <form className="form-inline s my-2 my-lg-0" style={{background: "white", borderRadius: "30px"}} onSubmit={onHandleSubmit}>
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
            </div>

        </>
    )
}
