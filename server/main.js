
import { Meteor } from 'meteor/meteor';
import { AirbnbCollection } from '/imports/api/AirbnbCollection';
import {UsersCollection} from '../imports/api/UserCollection'
import {RoomCollection} from '../imports/api/RoomCollection';
import {ReviewCollection} from '../imports/api/ReviewCollection';
function insertLink({ title, url }) {
  AirbnbCollection.insert({title, url, createdAt: new Date()});
}

function insertUser({email,password}){
  UsersCollection.insert({email,password,createdAt: new Date()})
}
function insertRoom({title,city,description,selectedFile,price,rating}){
  RoomCollection.insert({title,city,description,selectedFile,price,rating,createdAt: new Date()})
}
function insertReview({userId,roomId,description}){
  ReviewCollection.insert({userId,roomId,description,createdAt: new Date()})
}
const insertData = data => AirbnbCollection.insert({ title: data });
 
Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (AirbnbCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertData)
  }

  if(RoomCollection.find().count()==0){
    const rooms = [
      {
        title : "Vintage House",
        city: "jaipur",
        description: "1 bedroom . 2 beds . 1 bathroom, Air conditioning . wifi . parking . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/450d6336-51c9-4a59-94ea-bda69e21b7dd.jpg?im_w=960",
        price: 1455,
        rating: 4.5
      },
      {
        title : "The Music Room",
        city: "kota",
        description: "1 bedroom . 1 bed . 1 bathroom, Air conditioning . wifi . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/06fc9ed0-dd3e-47ec-9031-5772b0a41d05.jpg?im_w=960",
        price: 1700,
        rating: 4.8
      },
      {
        title : "Boutique Hotel Room",
        city: "Alwar",
        description: "1 bedroom . 2 beds . 1 bathroom, Air conditioning . wifi . parking ",
        selectedFile: "https://a0.muscache.com/im/pictures/b8b807ae-d90c-4331-9802-dd21ef86506e.jpg?im_w=960",
        price: 750,
        rating: 4.2
      },
      {
        title : "Luxury Home",
        city: "Jodhpur",
        description: "1 bedroom . 2 beds . 2 bathroom, Air conditioning . wifi . parking . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/b614907b-bc34-4c60-b34e-9f5663ab6ee4.jpg?im_w=960",
        price: 2500,
        rating: 4.8
      },
      {
        title : "1 Bed Room",
        city: "jaipur",
        description: "1 bedroom . 1 beds . 1 bathroom, Air conditioning . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/450d6336-51c9-4a59-94ea-bda69e21b7dd.jpg?im_w=960",
        price: 1005,
        rating: 4.4
      },
      {
        title : "AC Exclusive Single Room",
        city: "delhi",
        description: "1 bedroom . 2 beds . 1 bathroom, wifi . parking . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/dec43859-0579-408f-b73c-479e8c8a26de.jpg?im_w=960",
        price: 1800,
        rating: 4.6
      },
      {
        title : "Deluxe Room",
        city: "Ajmer",
        description: "1 bedroom . 2 beds . 1 bathroom",
        selectedFile: "https://a0.muscache.com/im/pictures/c44ee791-e0bf-474b-aeca-4be9364c8eaa.jpg?im_w=960",
        price: 1425,
        rating: 4.5
      },
      {
        title : "3 BHK Vila",
        city: "Shimla",
        description: "3 bedroom . 4 beds . 3 bathroom, Air conditioning . wifi . parking . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/128a3a81-b8f4-455e-b499-dfd1b3956c68.jpg?im_w=960",
        price: 4776,
        rating: 4.5
      },
      {
        title : "Vista Stay",
        city: "Delhi",
        description: "1 bedroom . 1 beds . 1 bathroom, Air conditioning . wifi . parking",
        selectedFile: "https://a0.muscache.com/im/pictures/a883cbcb-5a38-4d01-bf26-f14887a98c06.jpg?im_w=960",
        price: 1200,
        rating: 4.2
      },
      {
        title : "Maharaza Room",
        city: "Mumbai",
        description: "1 bedroom . 2 beds . 1 bathroom, Air conditioning . wifi . parking . kitchen",
        selectedFile: "https://a0.muscache.com/im/pictures/58fdab2a-71e2-463c-a0c0-349b97cbca5b.jpg?im_w=960",
        price: 3500,
        rating: 4.7
      },
    ].forEach(insertRoom)
  }

  if (UsersCollection.find().count() === 0){
    data={
      email: "mohitkandhari1211krh@gmail.com",
      password: "mohit1211"
    }
    insertUser(data)
  }

  if(ReviewCollection.find().count()===0){
    const review={
      userId: "LauAxkSa8ja2ny27M",
      roomId: "A2gvy3CzQt2KyB4rX",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
    insertReview(review);
  }
});
