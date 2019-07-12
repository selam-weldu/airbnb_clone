export const fetchBookings = () => {
    return $.ajax({
        method: "GET",
        url: `/api/bookings`
    });
}

export const fetchBooking = id => (
    $.ajax({
        method: 'Get',
        url: `/api/bookings/${id}`
    })
);

export const createBooking = booking => (
    $.ajax({
        method: 'Post',
        url:`/api/bookings`,
        data : { booking }
    })
);

export const updateBooking = booking => (
    $.ajax({
        method: 'Patch',
        url: `api/bookings/${booking.id}`,
        data: { booking }
    })
);

export const deleteBooking = id => (
    $.ajax({
        method: 'Delete',
        url: `api/bookings/${id}`
    })
);

