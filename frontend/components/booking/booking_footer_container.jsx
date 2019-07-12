import { connect } from 'react-redux';


import { openModal } from '../../actions/modal_actions';
import BookingFooter from './booking_footer';

const msp = state => ({
    // currentUser: state.entities.users[state.session.id],
    currentUser: state.entities.users[state.session.currentUserId],
    spot: Object.values(state.entities.spots)[0]
});

const mdp = dispatch => {
    return({
        openModal: modal => dispatch(openModal(modal))
    })
};

export default connect(msp,mdp)(BookingFooter);