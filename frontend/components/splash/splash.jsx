import React from 'react';
import NavbarContainer from './navbar_container';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';
import SearchForm from '../search/search_form';
import Footer from './footer';
import SearchFormContainer from '../search/search_form_container';
import NewSearchFormContainer from '../splash/new/new_search_form_container';


const Splash = (props) => {
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

            {/* <div>
                <SearchFormContainer/>
            </div> */}

            <div>
                <NewSearchFormContainer/>
            </div>

            <div>
                <Footer/>
            </div>

        </div>
    );
};

export default Splash;



