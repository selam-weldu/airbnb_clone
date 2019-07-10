import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

import SessionForm from './session_form';

const msp = ({ errors }) => ({
        errors: errors.session,
        formType: 'signup',
});
// const msp = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'signup',
//     };
// };

const mdp = dispatch => ({
        processForm: (user) => dispatch(signup(user)),
        // clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal())
});

// const mdp = dispatch => {
//     return {
//         processForm: (user) => dispatch(signup(user)),
//         clearErrors: () => dispatch(clearErrors()),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('login'))}>
//                 Log in
//             </button>
//         ),
//         closeModal: () => dispatch(closeModal())
//     };
// };

export default connect(msp, mdp)(SessionForm);