import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { withRouter } from 'react-router-dom';

class NewSearchForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { address: null }
        this.state = { address: null, check_in: new Date(), check_out: new Date(), num_guest: null }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        let value = Number(event.target.value);
        // 
        this.setState({ num_guest: value })
        //  
    }

    handleChange1(date) {
        this.setState({ check_in: date, check_out: date })
    }

    handleChange2(date) {
        //  
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
            <div className="splash-body">
                <div className="splash-search-container">
                    <div className="splash-search">
                        <div className="splash-search-head">
                            <div className="splash-head-text">
                                Book unique places to stay and things to do.
                </div>

                            <div className="splash-search-inputs">

                                <div className="splash-input-container">
                                    <p className="splash-input-label">WHERE</p>
                                    <div className="splash-input-div">
                                        {/* <input className="splash-input" type="text" placeholder="San Francisco, CA, United States" /> */}
                                        <input id="address-input" onChange={this.handleUpdate} type="text" placeholder="Try &quot;San Francisco&quot;" className="splash-input" />
                                    </div>
                                </div>


                                <div className="splash-input-container">
                                    <div className="splash-dates">

                                        <div className="splash-input-div-date">
                                            <p className="splash-input-label">CHECK-IN</p>
                                                {/* <input type="date" /> */}
                                            <DatePicker
                                                selected={this.state.check_in}
                                                onChange={this.handleChange1}
                                                placeholder="mm/dd/yyyy"
                                            />
                                            {/* <input className="splash-input" type="text" placeholder="mm/dd/yyyy" /> */}
                                        </div>

                                        <div className="splash-input-div-date">
                                            <p className="splash-input-label">CHECK-OUT</p>
                                                {/* <input type="date" /> */}
                                            <DatePicker
                                                selected={this.state.check_out}
                                                onChange={this.handleChange2}
                                            />
                                            {/* <input className="splash-input" type="text" placeholder="mm/dd/yyyy" /> */}
                                        </div>

                                    </div>
                                </div>

                                <div className="splash-input-container">
                                    <p className="splash-input-label">GUESTS</p>
                                    <div className="splash-input-div">

                                        <select className="splash-guests" placeholder="Guests">
                                            {guests}
                                        </select>
                                    </div>
                                </div>

                                <div className="splash-submit-wrap">
                                    <button onClick={this.handleSubmit} className="splash-submit">Search</button>
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