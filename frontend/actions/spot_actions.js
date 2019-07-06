import * as SpotAPIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';


export const receiveSpots = Spots => ({
    type: RECEIVE_SPOTS,
    Spots
});

export const receiveSpot = Spot => ({
    type: RECEIVE_SPOT,
    Spot
});



export const fetchSpots = filters => dispatch => (
    SpotAPIUtil.fetchSpots(filters)
        .then(Spots => (dispatch(receiveSpotes(Spots))
    ))
);

export const fetchSpot = id => dispatch => (
    SpotAPIUtil.fetchSpot(id)
        .then(spot => (dispatch(receiveSpot(spot))
    ))
);
