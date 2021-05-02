import React, { useState,useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { RoomCollection } from '../../api/RoomCollection';
import { Link } from 'react-router-dom';
export default function Rooms() {
    const [sort,setSort]=useState("");
    let defaultrooms = useTracker(() => RoomCollection.find({}).fetch());

    let sortbyprice = useTracker(() =>
        RoomCollection.find({}, {
            sort: { price: 1 }
        }).fetch()
    );

    let sortbyrating = useTracker(() =>
        RoomCollection.find({}, {
            sort: { rating: -1 }
        }).fetch()
    );


    const renderDefault= defaultrooms.map(room => <div key={room._id} className="col-lg-4 my-2">
    <div className="card" >
        <img className="card-img-top" src={room.selectedFile} alt="Card image cap" style={{ height: "250px" }} />
        <div className="card-body">
            <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{room.title}</h5>
                <p className="text-muted">{room.city}</p>
            </div>
            <p className="card-text text-muted">{room.description}</p>
            <div className="d-flex justify-content-between">
                <p className="card-text">&#8377; {room.price}/night</p>
                <p className="card-text">{room.rating} &#9733;</p>
            </div>
            <Link to={"room/" + room._id} className="btn btn-primary">Checkout</Link>
        </div>
    </div>
</div>
)

const renderbyPrice = sortbyprice.map(room => <div key={room._id} className="col-lg-4 my-2">
<div className="card" >
    <img className="card-img-top" src={room.selectedFile} alt="Card image cap" style={{ height: "250px" }} />
    <div className="card-body">
        <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>{room.title}</h5>
            <p className="text-muted">{room.city}</p>
        </div>
        <p className="card-text text-muted">{room.description}</p>
        <div className="d-flex justify-content-between">
            <p className="card-text">&#8377; {room.price}/night</p>
            <p className="card-text">{room.rating} &#9733;</p>
        </div>
        <Link to={"room/" + room._id} className="btn btn-primary">Checkout</Link>
    </div>
</div>
</div>
)
const renderRating = sortbyrating.map(room => <div key={room._id} className="col-lg-4 my-2">
<div className="card" >
    <img className="card-img-top" src={room.selectedFile} alt="Card image cap" style={{ height: "250px" }} />
    <div className="card-body">
        <div className="card-title" style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>{room.title}</h5>
            <p className="text-muted">{room.city}</p>
        </div>
        <p className="card-text text-muted">{room.description}</p>
        <div className="d-flex justify-content-between">
            <p className="card-text">&#8377; {room.price}/night</p>
            <p className="card-text">{room.rating} &#9733;</p>
        </div>
        <Link to={"room/" + room._id} className="btn btn-primary">Checkout</Link>
    </div>
</div>
</div>
)
    return (
        <div className="container">
        <div className="container-fluid">
            <div className="row my-3">
              <div className="col-lg-4 m-auto col-md-4 col-6">

                <label>Sort By</label>
                <select onChange={(e)=>setSort(e.target.value)}   className="form-control" id="exampleFormControlSelect1">
                     <option defaultValue>Choose...</option>
                    <option>price</option>
                    <option>rating</option>
                </select>
              </div>
            </div>
            </div>
            <div className="row">
                {  sort==="" ? renderDefault : (sort==="price" ? renderbyPrice : renderRating)
                }

            </div>
        </div>
    )
}
