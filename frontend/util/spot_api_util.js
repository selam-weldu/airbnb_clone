// export const fetchSpots = (data) => {
//     // debugger
//     return (
//         $.ajax({
//             method: 'Get',
//             url: '/api/spots',
//             data
//         })
//     )
// };

export const fetchSpots = (filters) => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/spots?bounds=${JSON.stringify(filters.bounds)}`
    });
}

export const fetchSpot = id => (
    $.ajax({
        method: 'Get',
        url: `/api/spots/${id}`
    })
);

