import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';
import SearchBar from './search_bar';
import { receiveSearch } from '../../actions/search_actions';


const msp = (state, ownProps) => {
    return {
        spots: Object.values(state.entities.spots),
        search: state.ui.search
    }
}

const mdp = (dispatch) => {
    return {
        fetchSpots: () => dispatch(fetchSpots()),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        receiveSearch: search => dispatch(receiveSearch(search))

    }
}


export default withRouter(connect(msp, mdp)(SearchBar));