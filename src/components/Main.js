import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </main>
    )
}

export default Main;