import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';
import { withRouter } from 'react-router-dom';

const msp = (state,ownProps) => {
    return ({
        bookings: state.entities.bookings,
        spot: state.entities.spots[ownProps.match.params.spotId],
        // spotId: ownProps.location.pathname
        //require login goes here
        formType: 'booking',
    })
};

const mdp = dispatch => {
    return ({
        processForm: (booking) => dispatch(createBooking(booking))
    })
    // closeModal: () => dispatch(closeModal()),
    // openModal: () => dispatch(openModal())
};



export default withRouter(connect(msp, mdp)(BookingForm));