import React from 'react';
import {Link} from 'react-router-dom'
const Inspired = () => {
    return (
        <div style={{ backgroundColor: "#F7F7F7" }}>
            <div className="jumbotron InspiredBg text-white rounded " >
                <div className="d-flex  justify-content-center">
                    <div className="d-flex flex-column text-center">

                        <h2 className="font-weight-bold">Wishlists by Airbnb</h2>
                        <h1 className="heading1 font-weight-bold">The Greatest Outdoors</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 m-auto">
                        <h4 className="text-center">A curated collection of stays and experiences to inspire your next nature trip.</h4>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-4 mt-4 col-12 mx-auto">
                                <div className="card inspiredCard" >
                                    <div className="card-body inspiredCardbody">
                                        <h2 className="card-title font-weight-bold">Mindful Retreats by Mindy Kaling</h2>
                                        <p>16 Picks</p>                             
                                    </div>
                                    <img className="card-img-top inspiredImg" src="https://a0.muscache.com/im/pictures/8f9d6900-658c-4a6c-93b5-72585f70ccc1.jpg?im_w=320" alt="Card image cap" />
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 mt-4 col-12 mx-auto">
                                <div className="card inspiredCard" >
                                    <div className="card-body inspiredCardbody">
                                        <h2 className="card-title font-weight-bold">Earthy Architecture</h2>
                                        <p>11 Picks</p>                             
                                    </div>
                                    <img className="card-img-top inspiredImg" src="https://a0.muscache.com/im/pictures/172eaf51-6aaa-4beb-b671-5e76a82a1367.jpg?im_w=320" alt="Card image cap" />
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 mt-4 col-12 mx-auto">
                                <div className="card inspiredCard" >
                                    <div className="card-body inspiredCardbody">
                                        <h2 className="card-title font-weight-bold">Design in the Wild</h2>
                                        <p>12 Picks</p>                             
                                    </div>
                                    <img className="card-img-top inspiredImg" src="https://a0.muscache.com/im/pictures/de7e1d97-8251-4c7f-934c-2ac76f843d65.jpg?im_w=320" alt="Card image cap" />
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 mt-4 col-12 mx-auto">
                                <div className="card inspiredCard" >
                                    <div className="card-body inspiredCardbody">
                                        <h2 className="card-title font-weight-bold">Pastoral Places</h2>
                                        <p>12 Picks</p>                             
                                    </div>
                                    <img className="card-img-top inspiredImg" src="https://a0.muscache.com/im/pictures/f15bd3a8-4bfd-4d4a-9c47-de75394ebc19.jpg?im_w=320" alt="Card image cap" />
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 mt-4 col-12 mx-auto">
                                <div className="card inspiredCard" >
                                    <div className="card-body inspiredCardbody">
                                        <h2 className="card-title font-weight-bold">Happy Campers</h2>
                                        <p>12 Picks</p>                             
                                    </div>
                                    <img className="card-img-top inspiredImg" src="https://a0.muscache.com/im/pictures/60f6f943-640a-4b48-9615-92a4fc5db4bf.jpg?im_w=320" alt="Card image cap" />
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 mt-4 col-12 mx-auto">
                                <div className="card inspiredCard" >
                                    <div className="card-body inspiredCardbody">
                                        <h2 className="card-title font-weight-bold">Just Add Water</h2>
                                        <p>12 Picks</p>                             
                                    </div>
                                    <img className="card-img-top inspiredImg" src="https://a0.muscache.com/im/pictures/0376f4d7-6e42-4b0f-a107-0d3f3e3925d3.jpg?im_w=320" alt="Card image cap" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                     <div className="col-11 m-auto">
                         <div className="jumbotron InspiredInstanceImage">
                           <div className="container">
                               <h1 className="font-weight-bold mb-3" style={{fontSize: "50px"}}>Start Wishing</h1>
                              <Link to='/'><button className="btn btn-light WishingBtn"> Search Outdoor Stays </button></Link> 
                           </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Inspired;