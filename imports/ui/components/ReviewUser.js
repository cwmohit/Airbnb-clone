import React from 'react'
import { UsersCollection } from '../../api/UserCollection';
import { useTracker } from 'meteor/react-meteor-data';
export default function ReviewUser({room,user}) {
    const reviewUser = useTracker(() => UsersCollection.find({ _id: user }).fetch());
    return (
        <>
            {reviewUser[0].email}
        </>
    )
}
