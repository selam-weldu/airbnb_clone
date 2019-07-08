import React from 'react';
import NavbarContainer from './navbar_container';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';
import SearchForm from '../search/search_form';


const Splash
 = (props) => {
    return (
        <div className="main-container">
            <div className="nav-bar">

                <div className="logo">
                    <Link className="logo-img-link" to="/"></Link>
                </div>

                <Modal />

                <header>
                    <NavbarContainer />
                </header>

            </div>

            <div>
                <SearchForm/>
            </div>

        </div>
    );
};

export default Splash



