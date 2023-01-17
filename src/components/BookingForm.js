import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");

   const handleSumbit = (e) => {
   e.preventDefault();
   alert(date)
   };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <div>
              <label>Choose Date</label>
              <input value={date} onChange={(e) => setDate(e.target.value)} type={"date"} />
            </div>
            <div>
              <label>Choose Time</label>
              <select>
               <option>Select Time</option>
               {props.availableTimes.map(availableTimes => {return <option>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label>Number of Guests</label>
              <input value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={1} min={1} max={10}></input>
            </div>
            <div>
              <label>Occasion</label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
               <option>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <input type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
