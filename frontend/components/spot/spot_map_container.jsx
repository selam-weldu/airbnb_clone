import { connect } from 'react-redux';
import SpotMap from './spot_map';
import {updateFilter} from '../../actions/filter_actions';

const msp = (state,ownProps) => ({
    search: state.ui.search,
    spots: Object.values(state.entities.spots),

});

const mdp = dispatch => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter,value))

});

export default connect(
    msp,
    mdp
)(SpotMap);