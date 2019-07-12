import * as SpotAPIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';


const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    spots
});

const receiveSpot = payload => ({
    type: RECEIVE_SPOT,
    payload
});



export const fetchSpots = (filters) => dispatch => {
    return(
        SpotAPIUtil.fetchSpots(filters)
            .then(spots => (dispatch(receiveSpots(spots))
        ))
    )
};

export const fetchSpot = id => dispatch => (
    SpotAPIUtil.fetchSpot(id)
        .then(spot => (dispatch(receiveSpot(spot))
    ))
);
