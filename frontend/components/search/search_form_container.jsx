import { connect } from 'react-redux';
import SearchForm from './search_form';
import {receiveSearch } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';


const msp = (state,ownProps) => ({
  search: state.ui.search
})

const mdp = dispatch => {
    return ({
        receiveSearch: (search) => dispatch(receiveSearch(search))
    });
}


export default withRouter(connect(msp, mdp)(SearchForm));