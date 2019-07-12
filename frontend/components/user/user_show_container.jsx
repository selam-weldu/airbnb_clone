import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const msp = (state, ownProps) => {
    const userId = state.session.currentUserId;
    const user = userId ? state.entities.users[userId] : {};
    
    return ({
        userId: userId,
        user: user,
        bookings: Object.values(state.entities.bookings),
        spots: Object.values(state.entities.spots),
        currentUser: state.entities.users[state.session.currentUserId]
    });
}


const mdp = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    // deleteBooking: (id) => dispatch(deleteBooking(id))
});

export default connect(msp,mdp)(UserShow);



