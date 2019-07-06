import * as SpotAPIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';


const receiveSpots = Spots => ({
    type: RECEIVE_SPOTS,
    Spots
});

const receiveSpot = Spot => ({
    type: RECEIVE_SPOT,
    Spot
});



export const fetchSpots = () => dispatch => (
    SpotAPIUtil.fetchSpots()
        .then(spots => (dispatch(receiveSpots(spots))
    ))
);

export const fetchSpot = id => dispatch => (
    SpotAPIUtil.fetchSpot(id)
        .then(spot => (dispatch(receiveSpot(spot))
    ))
);
