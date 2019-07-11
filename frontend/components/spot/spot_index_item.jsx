import React from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({ spot }) => {



    return (
        <div className="spot-index-item">
                <Link className="link" to={`/spots/${spot.id}`}>
            <li className="spot-li">
               
                     <div className="spot-photos">
                         <Carousel>
                            <img src={spot.photoUrls[0]} className="spot-photos"/>
                            <img src={spot.photoUrls[1]} className="spot-photos"/>
                            <img src={spot.photoUrls[2]} className="spot-photos"/>
                            <img src={spot.photoUrls[3]} className="spot-photos"/>
                            <img src={spot.photoUrls[4]} className="spot-photos"/>
                            <img src={spot.photoUrls[5]} className="spot-photos"/>
                            <img src={spot.photoUrls[6]} className="spot-photos"/>
                             {/* <img src={spot.photoUrls[7]} className="spot-photos"/> */}
                        </Carousel>
                     </div>


                <div className="spot-info">
                    <div className="spot-short-info">
                        <span className="plus">PLUS  </span>
                        <span className="spot-type">  VERIFIED &middot; {spot.listing_type}</span>
                        <span> <i className="far fa-heart heart"></i></span>
                        <div className="spot-title">{spot.title}</div>
                        <div className="spot-details">
                            <span>{spot.num_guests} guests &middot; </span>
                            <span>Studio &middot; </span>
                            <span>{spot.num_beds + 1} beds &middot; </span>
                            <span>{spot.num_baths + 1} baths</span>
                        </div>
                        <div className="amenities">
                            <span>Free parking &middot; </span>
                            <span>wifi &middot; </span>
                            <span>tv &middot; </span>
                            <span>kitchen</span>
                        </div>
                    </div>
                    <div className="spot-footer-info">
                        <p>&#9733;4.9({spot.id - 200 })</p>  
                        <p>${spot.price}/night</p>
                    </div>
                </div>
            </li>
                </Link>
        </div>
    )
};

export default SpotIndexItem;
