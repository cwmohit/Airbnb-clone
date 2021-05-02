import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom'
import { RoomCollection } from '../../api/RoomCollection';
import {Link} from 'react-router-dom'
export default function Search() {
    const { searchKey } = useParams();
   
    const searchResult = useTracker(() => RoomCollection.find({ city: searchKey }).fetch());
    
    return (
        <div className="container mt-5">
            {
              searchResult.length ? 
                 searchResult.map(room =>
                    <div className="card  border-dark mb-3" key={room._id}>                      
                        <div className="card-body row">
                            <div className="col-lg-4 m-auto col-md-4 col-12">
                                <img src={room.selectedFile} className="card-img-top" />
                            </div>
                            <div className="col-lg-8 col-md-8 m-auto col-12 py-2">
                                <div className="d-flex justify-content-between mt-2">

                                <h5 className="card-title">{room.title}</h5>
                                <p>{room.city}</p>
                                </div>

                                <hr/>
                                <p className="card-text text-muted">{room.description}</p>
                                <div className="d-flex justify-content-between">
                                    <h5>&#8377; {room.price}/night</h5>
                                    <h5>{room.rating} &#9733;</h5>
                                    <Link to={"/Room/"+room._id} className="btn btn-outline-danger">Checkout</Link>
                                </div>
                            </div>
                        </div> 
                    </div>
                ) : <div>No Result is found, {searchKey}</div>
            }
        </div>
    )
}
