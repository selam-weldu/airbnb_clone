import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import BookingFooter from './booking_footer';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    msp,
    mdp
)(BookingFooter);