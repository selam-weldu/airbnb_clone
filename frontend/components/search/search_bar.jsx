import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: null 
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }


    handleUpdate(e) {
        this.setState({ location: e.target.value })
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            let coord = new google.maps.Geocoder();
            coord.geocode({ "location": this.state.location }, (results, status) => {
                let lat, lng;
                if (status === 'OK') {
                    lat = results[0].geometry.location.lat();
                    lng = results[0].geometry.location.lng();
                    this.props.receiveSearch({ lat, lng });
                    this.props.history.push(`/spots?lat=${lat}&lng=${lng}`);
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
            // <div className="search-bar-container">
            //     <div className="search-bar">
            //         <input
            //             onChange={this.handleUpdate} type="text" placeholder="Try &quot;San Francisco&quot;" className="search-bar-box"
            //             onKeyPress={this.handleEnter} />
            //     </div>
            // </div>

            <div className="nav2-search-outer">
                <div className="nav2-search-inner">
                    <input
                        onChange={this.handleUpdate} type="text" placeholder="Try &quot;San Francisco&quot;" id="nav2-search"
                        onKeyPress={this.handleKeyPress} />
                </div>
            </div>
        )
    }
}

export default SearchBar;




// import React from 'react';

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = {
//             urlhash: ""
//         }
//     }

//     componentDidMount() {
//         this.activateAutocomplete();
//     }

//     activateAutocomplete() {
//         const input = document.getElementById('nav_location_search');
//         const options = {
//             types: ['(cities)']
//         }
//         this.autocomplete = new google.maps.places.Autocomplete(input, options);
//     }

//     handleSubmit(event) {
//         if (event.key === 'Enter') {
//             event.preventDefault();

//             const geocoder = new google.maps.Geocoder();
//             const address = document.getElementById('nav_location_search').value;
//             let formatted_address, geometry

//             geocoder.geocode({ 'address': address }, (results, status) => {
//                 if (status == 'OK') {
//                     formatted_address = results[0].formatted_address
//                     geometry = results[0].geometry

//                     this.location = {
//                         vicinity: formatted_address,
//                         center: {
//                             lat: geometry.location.lat(),
//                             lng: geometry.location.lng()
//                         }
//                     }

//                     const hashContent = `&lat=${this.location.center.lat}&lng=${this.location.center.lng}&checkin=null&checkout=null&guests=1`

//                     this.props.history.push({
//                         pathname: `/index`,
//                         hash: hashContent,
//                         state: location,
//                     })
//                 } else {

//                 }
//             })
//         }
//     }

//     render() {
//         return (
//             <div className="navbar-searchbox-container">
//                 <i className="fa fa-search" aria-hidden="true"></i>
//                 <input
//                     id="nav_location_search"
//                     type="text"
//                     placeholder="Try &quot;San Francisco&quot;"
//                     onKeyPress={this.handleSubmit}
//                 />
//             </div>
//         )
//     }
// }

// export default SearchBar;