import React from 'react';

class SearchForm extends React.Component { 
    constructor(props){
        super(props);
        this.state ={
            address: ""
        }
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  

    handleChange(e){
        this.setState({address: e.target.value})
    }

    handleSubmit(e){
   
        e.preventDefault();
        let coords = new google.maps.Geocoder();
        coords.geocode({"address": this.state.address},(results,status)=>{
            let lat, lng;
            if(status === 'OK'){
             
                lat = results[0].geometry.location.lat()
                lng = results[0].geometry.location.lng()
                this.props.receiveSearch({lat,lng});
                this.props.history.push(`/spots?lat=${lat}&lng=${lng}/`)
            } else {
                lat = 37.7558;
                lng = -122.435;
                this.props.receiveSearch({ lat, lng })
                this.props.history.push(`/spots?lat=${lat}&lng=${lng}`)
            }   
        })
    }

    render() {

    return (
    <div className="search-form-container">
        <div className="search-form">
            <form className="search-form-form" onSubmit={this.handleSubmit}>
                <div className="search-form-header">
                    Book unique places to stay and things to do.
            </div>
                <div className="where-input">
                    <label>WHERE
                        <br/>
                    <input
                            onChange={this.handleChange}
                            value={this.state.address}
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
                        <button onClick={this.handleSubmit} type="button">Search</button>
                </div>
            </form>
        </div>
    </div>
);
    }

}
export default SearchForm;


