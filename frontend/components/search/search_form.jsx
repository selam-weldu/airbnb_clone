import React from 'react';

class SearchForm extends React.Component { 
    constructor(props){
        super(props);
        this.navigateToSearch = this.navigateToSearch.bind(this)
    }

    // handleChange(filter, updateFilter) => e => (
    //     updateFilter(filter, parseInt(e.currentTarget.value))
    // );

    navigateToSearch() {
        // this.props.history.push('/spots');
    }

    render() {

    return (
    <div className="search-form-container">
        <div className="search-form">
            <form className="search-form-form">
                <div className="search-form-header">
                    Book unique places to stay and things to do.
            </div>
                <div className="where-input">
                    <label>WHERE
                        <br/>
                    <input
                            type="text"
                            placeholder="San Francisco,CA,Unite States" />
                    </label>
                </div>
                <div className="check">
                    <div className="check-in">
                        <label>CHECK-IN
                            <input type="date" />
                        </label>
                    </div>
                    <div className="check-out">
                        <label>CHECKOUT
                            <input type="date" />
                        </label>
                    </div>
                </div>
                <div className="guests-input">
                    <label>GUESTS
                        <br/>
                        <input
                            type="text"
                            placeholder="Guests" />
                    </label>
                </div>
                <div className="search-button-container">
                        <button onClick={this.navigateToSearch}type="button">Search</button>
                </div>
            </form>
        </div>
    </div>
);
    }

}
export default SearchForm;


