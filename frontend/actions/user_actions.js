import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload
})


export const fetchUser= (id) => dispatch => {
    return (
        UserAPIUtil.fetchUser(id)
            .then(user => (dispatch(receiveUser(user))
            ))
    )
};