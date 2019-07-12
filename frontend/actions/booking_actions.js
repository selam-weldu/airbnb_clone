import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';


const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

const receiveBooking = payload => ({
    type: RECEIVE_BOOKING,
    payload
});


const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    bookingId: booking.id
}) 



export const fetchBookings = () => dispatch => {
    return (
        BookingAPIUtil.fetchBookings()
            .then(spots => (dispatch(receiveBookings(spots))
            ))
    )
};

export const fetchBooking = id => dispatch => (
    BookingAPIUtil.fetchBooking(id)
        .then(spot => (dispatch(receiveBooking(spot))
        ))
);

export const createBooking = (booking) => dispatch => (
    BookingAPIUtil.createBooking(booking)
        .then((booking) => dispatch(receiveBooking(booking)))
)


export const updateBooking = (booking) => dispatch => (
    BookingAPIUtil.updateBooking(booking)
        .then((booking) => dispatch(receiveBooking(booking)))
)

export const deleteBooking = (id) => dispatch => (
    BookingAPIUtil.deleteBooking(id)
        .then((booking) => dispatch(removeBooking(booking)))
)