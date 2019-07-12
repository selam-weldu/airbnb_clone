
import React from 'react';
import Carousel from 'nuka-carousel';

const BookingIndexItem = ({ booking, spot }) => {

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
                            {/* <span className="plus">PLUS  </span> */}
                        {/* <span className="booking-type">  Check In &middot; &nbsp;{booking.check_in}</span>
                        <br/>
                        <span className="booking-type">  Check Out &middot; &nbsp;{booking.check_out}</span> */}
                            <span> <i className="far fa-heart heart"></i></span>
                            <div className="booking-title">{spot.title}</div>
                            {/* <div className="booking-details">
                                <span>{spot.num_guests} guests &middot; </span>
                                <span>Studio &middot; </span>
                                <span>{spot.num_beds + 1} beds &middot; </span>
                                <span>{spot.num_baths + 1} baths</span>
                            </div> */}
                            {/* <div className="booking">
                            <span>Check In &middot; &nbsp;{booking.check_in}</span>
                                <br/>
                            <span>Check Out &middot; &nbsp;{booking.check_out}</span>
                            </div> */}

                            <div className="booking">
                            <span className="booking-type">  Check In &middot; &nbsp;{booking.check_in}</span>
                            <br />
                            <span className="booking-type">  Check Out &middot; &nbsp;{booking.check_out}</span>
                            </div>
                        </div>
                        <div className="booking-footer-info">
                            <p className="p">${spot.price}/night</p>
                        </div>
                    </div>
                </li>
        </div>
    )
};

export default BookingIndexItem;
