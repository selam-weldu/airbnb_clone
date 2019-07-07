import React from 'react';

const SpotIndexItem = ({ spot }) => {

   
    return (
        <div className="spot-index-item">
            <li className="spot-li">
               
                <div className="spot-photos">
                    <img src={spot.photoUrl} className="spot-photos"/>
                </div>

                <div className="spot-info">
                    <div className="spot-short-info">
                        <span className="plus">PLUS  </span>
                        <span className="spot-type">  VERIFIED &middot; {spot.listing_type}</span>
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
                        <div>4.9({spot.id - 100 })</div>  
                        <div>${spot.price}/night</div>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default SpotIndexItem;
