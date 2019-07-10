import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions';

const msp = (state, ownProps) => {
    const spot = state.entities.spots[ownProps.match.params.spotId];
    const host = spot ? state.entities.users[spot.hostId] : {};

    return {
        spot: spot,
        host: host
    }

};

const mdp = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(
    msp,
    mdp
)(SpotShow);

