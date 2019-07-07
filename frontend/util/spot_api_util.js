export const fetchSpots = () => {
    // debugger
    return (
        $.ajax({
            method: 'Get',
            url: '/api/spots'
        })
    )
};

export const fetchSpot = id => (
    $.ajax({
        method: 'Get',
        url: `/api/spots/${id}`
    })
);

