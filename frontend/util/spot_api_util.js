export const fetchSpots = data => (
    $.ajax({
        method: 'get',
        url: '/api/spots',
        data
    })
);

export const fetchSpot = id => (
    $.ajax({
        method: 'get',
        url: `/api/spots/${id}`
    })
);


// export const fetchUserSpots = id => (
//     $.ajax({
//         method: 'get',
//         url: `/api/spots/?host_id=${id}`
//     })
// );