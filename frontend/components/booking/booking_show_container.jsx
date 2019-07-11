import { connect } from 'react-redux';
import BookingShow from './booking_show';

import { fetchBookings } from '../../util/booking_api_util';


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    bookings: Object.values(state.entities.bookings)
});

const mdp = dispatch => ({
    fetchBookings: () => dispatch(fetchBookings())
});

export default connect(msp, mdp)(BookingShow);