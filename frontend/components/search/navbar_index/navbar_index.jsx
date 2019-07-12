import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar_container';
import { withRouter } from 'react-router-dom';
// import SearchBar from '../search/autocomplete';

class NavBarIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.props.history.push('/bookings')
    // }

    render() {
        let { openModal, updateFilter, filters, currentUser } = this.props;

        const loggedInButtons = (
            <div className="nav2-buttons-container">
                <button className="nav2-button" onClick={this.props.logout}>Logout</button>
                {/* <div className="welcome-name-guest">Welcome, {currentUser.username}!</div> */}
            </div>
        );


        const loggedOutButtons = (
            <div className="nav2-buttons-container">
                <button className="nav2-button" onClick={() => openModal('login')}>Log in</button>
                <button className="nav2-button" onClick={() => openModal('signup')}>Sign up</button>

            </div>
        );

        if (this.props.location.pathname === '/') {
            return null;
        } else {
            return (
                <header className="nav2-head">
                    <div className="nav2-container">

                        <div className="nav2-search-container">
                            <div className="nav2-logo">
                                <Link to={"/"} >
                                    <img className="logo2" src="http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" />
                                </Link>
                            </div>


                            <SearchBarContainer />
                            {/* <SearchBar/> */}
                        

                        </div>

                        {this.props.currentUser ? loggedInButtons : loggedOutButtons}

                    </div>
                </header>
            )
        }
    }
}

export default withRouter(NavBarIndex);