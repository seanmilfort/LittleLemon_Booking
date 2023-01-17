import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Booking = (props) => {



    return (

        <BookingForm availableTimes={props.availableTimes}/>
    )
}

export default Booking;