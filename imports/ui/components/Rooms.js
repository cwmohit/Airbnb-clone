import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { RoomCollection } from '../../api/RoomCollection';
import { Link } from 'react-router-dom';
export default function Rooms() {
    const [sort, setSort] = useState({
        sortby: "", sortOrder: 'Accending'
    });
    let defaultrooms = useTracker(() => RoomCollection.find({}).fetch());

    let sortbypriceAccending = useTracker(() =>
        RoomCollection.find({}, {
            sort: { price: 1 }
        }).fetch()
    );
    let sortbypriceDesending = useTracker(() =>
        RoomCollection.find({}, {
            sort: { price: -1 }
        }).fetch()
    );

    let sortbyratingAccending = useTracker(() =>
        RoomCollection.find({}, {
            sort: { rating: 1 }
        }).fetch()
    );
    let sortbyratingDesending = useTracker(() =>
        RoomCollection.find({}, {
            sort: { rating: -1 }
        }).fetch()
    );

    const renderDefault = defaultrooms.map(room => <div key={room._id} className="col-lg-4 my-2">
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

    const renderbyPriceAccending = sortbypriceAccending.map(room => <div key={room._id} className="col-lg-4 my-2">
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

    const renderbyPriceDesending = sortbypriceDesending.map(room => <div key={room._id} className="col-lg-4 my-2">
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

    const renderRatingAccending = sortbyratingAccending.map(room => <div key={room._id} className="col-lg-4 my-2">
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

    const renderRatingDesending = sortbyratingDesending.map(room => <div key={room._id} className="col-lg-4 my-2">
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
                    <div className="col-lg-5 m-auto col-md-5 col-12">

                    <div className="d-flex" style={{justifyContent: "space-around"}}> 

                        <label>Sort By</label>
                        <div className="form-check">
                            <input onChange={(e)=>setSort({...sort,sortby: e.target.value})}  className="form-check-input" type="radio" name="sortby" id="price" value="price" />
                            <label className="form-check-label" htmlFor="price">
                                Price
  </label>

                        </div>
                        <div className="form-check">
                            <input onChange={(e)=>setSort({...sort,sortby: e.target.value})} className="form-check-input" type="radio" name="sortby" id="rating" value="rating" />
                            <label className="form-check-label" htmlFor="rating">
                                Rating
  </label>

                        </div>
                    </div>
                        <select onChange={(e) => setSort({...sort,sortOrder: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option defaultValue>Choose...</option>
                            <option value="Accending">Ascending</option>
                            <option value="Desending">Descending</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
             
              { sort.sortby==="" && renderDefault}
              { sort.sortby==="price" && sort.sortOrder==="Accending" && renderbyPriceAccending}
              { sort.sortby==="price" && sort.sortOrder==="Desending" && renderbyPriceDesending}
              { sort.sortby==="rating" && sort.sortOrder==="Accending" && renderRatingAccending}
              { sort.sortby==="rating" && sort.sortOrder==="Desending" && renderRatingDesending}
            </div>
        </div>
    )
}
