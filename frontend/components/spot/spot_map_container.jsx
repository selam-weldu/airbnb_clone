import { connect } from 'react-redux';
import SpotMap from './spot_map';
import {updateFilter} from '../../actions/filter_actions';

const mapStateToProps = (state,ownProps) => ({
    search: state.ui.search,
    spots: Object.values(state.entities.spots),

});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter,value))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotMap);