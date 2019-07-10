import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
});

const mdp = dispatch => ({
        processForm: (user) => dispatch(login(user)),
        // clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal())
});

// const mdp = dispatch => {
//     return {
//         processForm: (user) => dispatch(login(user)),
//         clearErrors: () => dispatch(clearErrors()),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('signup'))}>
//                 Sign up
//             </button>
//         ),
//         closeModal: () => dispatch(closeModal())
//     };
// };

export default connect(msp, mdp)(SessionForm);