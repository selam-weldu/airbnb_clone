import { connect } from 'react-redux';
import { fetchSpots, fetchSpot } from '../../actions/spot_actions';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';


const msp = state => ({
    spots: Object.values(state.entities.spots),
    search: state.ui.search
})

const mdp = dispatch => {
    return ({
        fetchSpots: () => dispatch(fetchSpots()),
        fetchSpot: id => dispatch(fetchSpot(id)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    });
}


export default connect(msp, mdp)(Search);