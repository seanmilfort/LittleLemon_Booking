import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import { useState } from "react";


const Main = () => {

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    function updateTimes() {
        setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={availableTimes} />} />
            </Routes>
        </main>
    )
}

export default Main;