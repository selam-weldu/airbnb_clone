import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { withRouter } from 'react-router-dom';

class NewSearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            address: null, 
            check_in: new Date(), 
            check_out: new Date(), 
            guests: null }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
    }

    handleGuest(event) {
        let value = Number(event.target.value);
        this.setState({ guests: value })
    }

    handleCheckIn(date) {
        this.setState({ check_in: date, check_out: date })
    }

    handleCheckOut(date) {
        this.setState({ check_out: date })
    }

    handleUpdate(e) {
        this.setState({ address: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let coord = new google.maps.Geocoder();
        coord.geocode({ "address": this.state.address }, (results, status) => {
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

    render() {
        const guests = [1, 2, 3, 4].map(num => (
            <option className="guests-list" value={num} placeholder="Guests" key={String(num)} >{num}</option>
        ))
        return (
            <div className="search-body">
                <div className="search-search-container">
                    <div className="search-search">
                        <div className="search-search-head">
                            <div className="search-head-text">
                                Book unique places to stay and things to do.
                            </div>

                            <div className="search-search-inputs">

                                <div className="search-input-container">
                                    <p className="search-input-label">WHERE</p>
                                    <div className="search-input-div">
                                        <input id="address-input" onChange={this.handleUpdate} type="text" placeholder="Try &quot;San Francisco&quot;" className="search-input" />
                                    </div>
                                </div>


                                <div className="search-input-container">
                                    <div className="search-dates">

                                        <div className="search-input-div-date">
                                            <p className="search-input-label">CHECK-IN</p>
                                            <DatePicker
                                                selected={this.state.check_in}
                                                onChange={this.handleCheckIn}
                                                // placeholder="mm/dd/yyyy"
                                            />
                                        </div>

                                        <div className="search-input-div-date">
                                            <p className="search-input-label">CHECK-OUT</p>
                                            <DatePicker
                                                selected={this.state.check_out}
                                                onChange={this.handleCheckOut}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="search-input-container">
                                    <p className="search-input-label">GUESTS</p>
                                    <div className="search-input-div">

                                        <select className="search-guests" placeholder="Guests">
                                            {guests}
                                        </select>
                                    </div>
                                </div>

                                <div className="search-submit-wrap">
                                    <button onClick={this.handleSubmit} className="search-submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewSearchForm;