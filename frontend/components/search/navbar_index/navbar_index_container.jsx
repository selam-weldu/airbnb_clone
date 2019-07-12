import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import NavBarIndex from './navbar_index';
import { updateFilter } from '../../../actions/filter_actions';

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.entities.users[state.session.currentUserId],
        filters: state.ui.filters,
        spots: Object.values(state.entities.spots)
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    }
}

export default connect(msp, mdp)(NavBarIndex);


