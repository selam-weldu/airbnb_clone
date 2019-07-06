
import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchSpots} from '../../actions/spot_actions';


const msp = state => ({
    spots: Object.value(state.entities.spots)
})

const mdp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
})



export default connect(msp,mdp)(SpotIndex);