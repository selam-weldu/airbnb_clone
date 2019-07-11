import React from 'react';


const BookingFooter = ({ openModal }) => {

    return (
        <div className="booking-submit">
            <button onClick={() => openModal('booking')}>Book the Spot!</button>
        </div>
    );
};

export default BookingFooter;