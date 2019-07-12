
import React from 'react';
import Carousel from 'nuka-carousel';

class BookingIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this)
    }



    deleteBooking(e) {
        e.preventDefault();
        let bookingId = this.props.booking.id;
        this.props.deleteBooking(bookingId)
            .then(() => this.props.fetchUser(this.props.userId));
    }

    render(){
        const { booking, spot } = this.props;

        return (
            <div className="booking-index-item">
                    <li className="booking-li">

                        <div className="booking-photos">
                            <Carousel>
                                <img src={spot.photoUrls[0]} className="spot-photos" />
                                <img src={spot.photoUrls[1]} className="spot-photos" />
                                <img src={spot.photoUrls[2]} className="spot-photos" />
                                <img src={spot.photoUrls[3]} className="spot-photos" />
                                <img src={spot.photoUrls[4]} className="spot-photos" />
                                <img src={spot.photoUrls[5]} className="spot-photos" />
                                <img src={spot.photoUrls[6]} className="spot-photos" />
                                {/* <img src={spot.photoUrls[7]} className="spot-photos"/> */}
                            </Carousel>
                        </div>


                        <div className="booking-info">
                            <div className="booking-short-info">
                                {/* <span> <i className="far fa-heart heart"></i></span> */}
                                <div className="booking-title">{spot.title}</div>
                                <br/>
                            
                                <div className="booking">
                                    <span className="booking-type">  From &middot; &nbsp;{booking.check_in}</span>
                                    <br />
                                    <span className="booking-type">  To &middot; &nbsp;{booking.check_out}</span>
                                </div>
                            </div>
                            <div className="booking-footer-info">
                                <p className="p">${spot.price}/night</p>
                                <button className="booking-delete" onClick={this.deleteBooking}>Delete Booking</button>
                            </div>
                        </div>
                    </li>
            </div>
        )
    }
};

export default BookingIndexItem;
