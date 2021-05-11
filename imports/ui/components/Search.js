import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom'
import { RoomCollection } from '../../api/RoomCollection';
import { Link } from 'react-router-dom'
export default function Search() {
    const { searchKey } = useParams();

    const searchResult = useTracker(() => RoomCollection.find({ city: searchKey }).fetch());

    return (
        <div className="container-fluid searchContainer ">
            <div className="row">
                <div className="col-12 m-auto">
                   <div className="row">
                       <div className="col-7">
                       {
                searchResult.length ?
                    searchResult.map(room =>
                        <div className=" roomInstance my-4" key={room._id}>
                            <div className="  my-2 row">
                                <div className="col-lg-5 m-auto col-md-5 col-12">
                                    <img src={room.selectedFile} className="card-img-top roomImg" style={{borderRadius: "30px", height: "230px"}}/>
                                </div>
                                <div className="col-lg-7 col-md-7 m-auto col-12 py-2">
                                    <div className="d-flex justify-content-between mt-2" style={{borderBottom: "2px solid lightgray"}}>

                                        <Link to={"/Room/" + room._id} ><h5 className="room-title">{room.title}</h5></Link>
                                        <p>{room.city}</p>
                                    </div>

                                    
                                    <p className="card-text text-muted my-2">{room.description}</p>
                                    <div className="d-flex mt-4 justify-content-between">
                                        <h5>{room.rating} &#9733;</h5>
                                        <h5>&#8377; {room.price}/night</h5>
                                        {/* <Link to={"/Room/" + room._id} className="btn btn-outline-danger">Checkout</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <div className="mt-5" style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        No Result is found, {searchKey}
                    </div>
            }
                       </div>
                 <div className="col-lg-5 col-md-5">
                 <div className='w-100 d-md-block d-none mapSearch'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30703534.92749614!2d64.41811320802303!3d20.050857256058162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1620724093959!5m2!1sen!2sin" width="600" style={{height: "90vh", border: "0"}} allowfullscreen="" loading="lazy"></iframe></div>
           
                 </div>

                   </div>
                </div>
            </div>
      
        </div>
    )
}
