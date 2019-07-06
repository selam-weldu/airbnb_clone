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

