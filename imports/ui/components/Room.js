import React,{useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import { RoomCollection } from '../../api/RoomCollection';
import {ReviewCollection} from '../../api/ReviewCollection';
import ReviewUser from './ReviewUser'
export default function Room() {
    const [review,setReview]=useState({
        userId: "",  roomId: "", description: ""
    });
    const { id } = useParams();
    const room = useTracker(() => RoomCollection.find({ _id: id }).fetch());
    const reviewResult = useTracker(() => ReviewCollection.find({ roomId: id }).fetch());
    const user=JSON.parse(localStorage.getItem("user"))._id;
    const onReviewSubmit=(e)=>{
      e.preventDefault();
      if(JSON.parse(localStorage.getItem("user"))._id){

          ReviewCollection.insert({
            userId: review.userId ,roomId: review.roomId, description: review.description, createdAt: new Date()
         })
      }else{
          alert("please login first");
      }
     setReview({
         userId: "", roomId: "", description: ""
     })
    }
   const CheckClick = (e)=>{
    e.preventDefault();
    alert("Available")
   }


    const renderReviews=reviewResult.map((reviewInstance)=>

        <div className="col-lg-6 col-md-6 col-12" key={reviewInstance._id}>
            <div className="card  border-light mb-3" >
                <div className="card-header d-flex"><i className="fa icon fa-2x fa-user-circle mx-2" aria-hidden="true"></i><div className="m-0 p-0"><p className="my-0 font-weight-bold"><ReviewUser room={id} user={reviewInstance.userId}/></p><small className="my-0 text-muted">{reviewInstance.createdAt.toDateString()}</small></div></div>
                <div className="card-body">
                    <p>{reviewInstance.description}</p>
                </div>
            </div>
        </div>
        )
 

    return (
        <>
            <div className="RoomSection">
                {
                    room.map(room => <div key={room._id} >
                        <div className="HeaderImage">
                            <div className="jumbotron d-flex roomHeader p-3 p-md-5 text-white rounded " style={{ background: `url(${room.selectedFile})` }}>
                                <div className="col-md-6 px-0 m-auto text-center " >
                                    <h1 className="roomTitle font-italic" style={{ borderBottom: "2px solid #56ce10" }}>{room.title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-12 order-1 order-md-0 order-lg-0">
                                    <div className="Accessibility">
                                        <h3>Accessibility</h3>
                                        {room.description}
                                    </div> <hr />
                                    <div className="rulesSection">
                                        <h3>Rules</h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                     </p>
                                    </div>
                                    <div className="Reviews">
                                        <div className="d-flex justify-content-between">
                                            <h3>Reviews</h3>
                                            <h3>Rating - {room.rating} &#9733;</h3>
                                        </div><hr />
                                        <form className="my-2" onSubmit={onReviewSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="review">Leave a Review</label>
                                                <textarea value={review.description} onChange={(e)=>setReview({ userId: user,  roomId: id,description: e.target.value})} className="form-control" id="review" rows="3" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-outline-info ">Submit</button>
                                        </form>
                                    </div>
                                    <div className="row">
                                        {renderReviews}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 order-0 order-md-0 order-lg-0">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">&#8377; {room.price}/night</h5>
                                            <form >
                                                <div className="form-row ">
                                                    <div className="col-6">
                                                        <label>Check-In</label>
                                                        <input type="date" className="form-control" />
                                                    </div>

                                                    <div className="col-6">
                                                        <label>Check-Out</label>
                                                        <input type="date" className="form-control" />
                                                    </div>
                                                    <select className="form-control my-2">
                                                        <option>1 Guest</option>
                                                        <option>2 Guest</option>
                                                        <option>3 Guest</option>
                                                        <option>4 Guest</option>
                                                        <option>&gt; 4 Guest</option>
                                                    </select>
                                                </div>
                                                <button onClick={CheckClick} className="btn btn-outline-danger btn-block">Check Availability</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>

        </>
    )
}
