import React, { useState } from 'react';
import Rooms from './Rooms';
import { Link, Redirect } from 'react-router-dom';

export default function Home() {
    const [search, setSearch] = useState("");
   
    
    const onHandleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <div className="HeaderImage">
                <div className="jumbotron homeImg p-3 p-md-5 text-white rounded " >
                    <div className="col-md-6 px-0 m-auto text-center " >
                        <h1 className=" font-italic" style={{ borderBottom: "2px solid #56ce10" }}>Welcome to Airbnbs</h1>
                        <p className="lead text-white my-3">The Airbnbs is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="d-flex justify-content-center">

                        <form className="form-inline s my-2 my-lg-0" onSubmit={onHandleSubmit}>
                            <input className="form-control mr-sm-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Location...." aria-label="Search" required/>
                           {
                               search===""?  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> :<Link to={"search/" + search}>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </Link>
                           }
                        </form>
                    </div>

                </div>
                <Rooms/>
            </div>
            
        </>
    )
}
