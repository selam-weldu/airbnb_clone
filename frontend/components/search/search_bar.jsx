import React from 'react';
import AutoSearchBar from './autocomplete';
// import { Searchbar } from 'react-native-paper';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({ address: e.target.value })
    }

    handleKeyDown(e) {
     
        if(e.key === 'Enter'){
            e.preventDefault();
            let coords = new google.maps.Geocoder();
            coords.geocode({ "address": this.state.address }, (results, status) => {
                let lat, lng;
                if (status === 'OK') {
                   
                    lat = results[0].geometry.location.lat()
                    lng = results[0].geometry.location.lng()
                    this.props.receiveSearch({ lat, lng });
                    this.props.history.push(`/spots?lat=${lat}&lng=${lng}/`)
                } else {
                    lat = 37.7558;
                    lng = -122.435;
                    this.props.receiveSearch({ lat, lng })
                    this.props.history.push(`/spots?lat=${lat}&lng=${lng}`)
                }
            })
        }
    }


    render() {
        return (
            <div>
                <div className="nav2-search-outer">
                    <div className="nav2-search-inner">

                    {/* search bar on spots index page */}

                         <input
                            onChange={this.handleChange}
                            value={this.state.address}
                            type="text" 
                            placeholder="Try &quot;San Francisco&quot;" 
                            id="nav2-search"
                            onKeyPress={this.handleKeyDown} /> 
                            {/* <AutoSearchBar/> */}

                            {/* <Searchbar 
                                placeholder="Try &quot;San Francisco&quot;"
                                onChangeText={query => {this.setState({address: query});}}
                                value={this.state.address}
                                onIconPress={this.handleKeyDown}/> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar);



///////////////////////////////////// autocomplete






