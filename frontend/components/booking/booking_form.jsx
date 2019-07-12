import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spot_id: this.props.spot.id,
            check_in: new Date(),
            check_out: new Date(),
            num_guest: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
    }

    handleGuest(event) {
        let value = Number(event.target.value);
        this.setState({ num_guest: value })
    }

    handleCheckIn(date) {
        this.setState({ check_in: date })
        // this.setState({ check_in: date, check_out: date })
    }

    handleCheckOut(date) {
        this.setState({ check_out: date })
    }

    handleSubmit(e) {
        e.preventDefault();
        const booking = Object.assign({},this.state);
        this.props.processForm(booking)
            .then(this.props.history.push('/booking'))
            // .then(this.props.closeModal)
    }

    render() {
        const guests = [1,2,3,4].map(num => (
            <option className="guests-list" value={num} key={String(num)} >{num}</option>
        ))
        return (
            <div className="booking-search-body">
                <div className="booking-search-container">
                    <div className="booking-search">
                        <div className="booking-search-head">
                            <div onClick={this.props.closeModal} className="closee-x">&times;</div>
                            <div className="booking-head-text">
                                <span>${this.props.spot.price}/night</span>
                            </div>

                            <div className="booking-search-inputs">

                                <div className="booking-input-container">
                                    <div className="booking-dates">

                                        <div className="booking-input-div-date">
                                            <p className="booking-input-label">CHECK-IN</p>
                                            <DatePicker
                                                selected={this.state.check_in}
                                                onChange={this.handleCheckIn}
                                            />
                                        </div>

                                        <div className="booking-input-div-date">
                                            <p className="booking-input-label">CHECK-OUT</p>
                                            <DatePicker
                                                selected={this.state.check_out}
                                                onChange={this.handleCheckOut}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="booking-input-container">
                                    <p className="boooking-input-label">GUESTS</p>
                                    <div className="booking-input-div">

                                        <select className="booking-guests" placeholder="Guests">
                                            {guests}
                                        </select>
                                    </div>
                                </div>

                                <div className="booking-submit-wrap">
                                    <button onClick={this.handleSubmit} className="footer-button">Book</button>
                                    {/* <button onClick={this.handleSubmit} className="booking-submit">Book</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(BookingForm);



// import React from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// class BookingForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { check_in: new Date(), check_out: new Date(), num_guest: null, listing_id: Number(this.props.listingId[0]), owner_id: this.props.listing.owner_id }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange1 = this.handleChange1.bind(this);
//         this.handleChange2 = this.handleChange2.bind(this);
//         this.handleSelect = this.handleSelect.bind(this);
//     }

//     handleSelect(event) {
//         let value = Number(event.target.value);
//         this.setState({ num_guest: value })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.processForm(this.state);
//         this.props.closeModal();
//     }

//     handleChange1(date) {
//         this.setState({ check_in: date, check_out: date })
//     }

//     handleChange2(date) {
//         this.setState({ check_out: date })
//     }

//     render() {
//         const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
//             <option value={num} key={num} className="booking-guests" placeholder="Guests">{num} guest</option>
//         ))
       
//         return (
          
//             <div className="booking-form">
//                 <div className="modal-price-container">
//                     <div className="modal-price">${this.props.listing.price} / day</div>
//                 </div>

//                 <div className="booking-dates-container">
//                     <label className="booking-label">Dates</label>
//                     <div className="booking-dates" >
//                         <div className="booking-start">
//                             <DatePicker
//                                 selected={this.state.check_in}
//                                 onChange={this.handleChange1}
//                                 id="date2"
//                             />
//                         </div>

//                         <div className="booking-end">
//                             <DatePicker
//                                 selected={this.state.check_out}
//                                 onChange={this.handleChange2}
//                                 id="date2"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="booking-guests-container">
//                     <label className="booking-label">Guests</label>
//                     <div className="booking-guests2">
//                         <select onChange={this.handleSelect} className="booking-guests" >
//                             {guests}
//                         </select>
//                     </div>
//                 </div>

//                 <div className="booking-submit-container">
//                     <button onClick={this.handleSubmit} className="booking-submit">Request to Book</button>
//                 </div>

//                 <div className="modal-charge">You won't be charged yet</div>

//             </div>
   
//         )
//     }
// }

// export default BookingForm;


