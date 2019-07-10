import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions';

const msp = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    // users: Object.values(state.entities.users)
    users: state.entities.users

});

const mdp = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(
    msp,
    mdp
)(SpotShow);