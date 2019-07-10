import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import ListingMap from './listing_map';
import { fetchSpots } from '../../../actions/spot_actions';
import { updateFilter } from '../../../actions/filter_actions';
import NewSearchForm from '../new/new_search_form';
import { receiveSearch } from '../../../actions/search_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        spots: Object.values(state.entities.spots),
        // city: state.ui.filters.city,
        bounds: state.ui.filters.bounds,
        filters: state.ui.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSpots: () => dispatch(fetchSpots()),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        receiveSearch: search => dispatch(receiveSearch(search))
        // getState: () => dispatch(getState())
    }
}


const NewSearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewSearchForm);
export default withRouter(NewSearchFormContainer)