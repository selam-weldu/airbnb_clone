
import { fetchSpots } from './spot_actions'

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilter = (filter, value) => {
    return ({
        type: UPDATE_FILTER,
        filter,
        value
    });
}


// export const updateFilter = (filter, value) => (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return fetchSpots(getState().ui.filters)(dispatch);
// };


export const updateFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchSpots(getState().ui.filters)(dispatch);
    }
};