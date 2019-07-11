import React from 'react';

const BookingShow = (props) => {
    return (
        <div className="bookings">
            <ul>
                {props.bookings.forEach(booking => (
                    <li>Booking goes here</li>
                ))}
            </ul>

            <div>
                Bookings go here
            </div>

        </div>
    )

};

export default BookingShow;