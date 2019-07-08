import React from 'react';
import SearchForm from '../search/search_form';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
            <div>
            </div>
            <div className="nav2-search-outer">
                <div className="nav2-search-inner">

                {/* search bar on spots index page */}

                    <input
                        type="text" 
                        placeholder="Try San Francisco" 
                        id="nav2-search"/>



                </div>
            </div>
            </div>
        )
    }
}

export default SearchBar;




