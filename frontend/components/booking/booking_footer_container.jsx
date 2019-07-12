import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';
import BookingFooter from './booking_footer';

const msp = (state,ownProps) => {
    return({
        currentUser: state.entities.users[state.session.currentUserId],
        // spot: Object.values(state.entities.spots)[0]
        spot: state.entities.spots[ownProps.match.params.spotId]
    })
};

const mdp = dispatch => {
    return({
        openModal: modal => dispatch(openModal(modal))
    })
};

export default withRouter(connect(msp,mdp)(BookingFooter));