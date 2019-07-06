export const fetchSpots = () => (
    $.ajax({
        method: 'get',
        url: '/api/spots'
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