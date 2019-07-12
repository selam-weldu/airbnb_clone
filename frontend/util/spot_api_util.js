export const fetchSpots = (data) => {
    return $.ajax({
        method: "GET",
        url: `/api/spots?bounds=${JSON.stringify(data.bounds)}`
    });
}

export const fetchSpot = id => (
    $.ajax({
        method: 'Get',
        url: `/api/spots/${id}`
    })
);

