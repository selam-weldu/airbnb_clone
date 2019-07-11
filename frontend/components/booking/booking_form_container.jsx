import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const msp = (state,ownProps) => ({
    bookings: state.entities.bookings,
    // spot: state.entities.spots[ownProps.match.params.spotId],
    formType: 'booking',
});

const mdp = dispatch => ({
    processForm: (booking) => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
});



export default connect(msp, mdp)(BookingForm);