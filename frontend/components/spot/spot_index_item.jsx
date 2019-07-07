import React from 'react';

const SpotIndexItem = ({ spot }) => {

//     let photoUrl;
//     spot.photoUrls.forEach(url => (
//         photoUrl = url;
//     ));

// let photoUrl;
// if (listing.photoUrls.length >= 1) {
//     photoUrl = listing.photoUrls[0];
// }
   
    return (
        <div className="spot-index-item">
            <li className="spot-li">
               
                <div className="slideshow-container">
                    <div className="spot-photos mySlides fade">
                        <img src={spot.photoUrls[0]} className="spot-photos"/>
                        <img src={spot.photoUrls[1]} className="spot-photos"/>
                        <img src={spot.photoUrls[1]} className="spot-photos"/>
                        <img src={spot.photoUrls[3]} className="spot-photos"/>
                        <img src={spot.photoUrls[4]} className="spot-photos"/>
                        <img src={spot.photoUrls[5]} className="spot-photos"/>
                        <img src={spot.photoUrls[6]} className="spot-photos"/>
                        <img src={spot.photoUrls[7]} className="spot-photos"/>

                        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onclick="plusSlides(1)">&#10095;</a>

                        {/* <div style="text-align:center">
                            <span className="dot" onClick="currentSlide(1)"></span>
                            <span className="dot" onClick="currentSlide(2)"></span>
                            <span className="dot" onClick="currentSlide(3)"></span>
                        </div> */}
                    </div>
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
                        <p>&#9733;4.9({spot.id - 100 })</p>  
                        <p>${spot.price}/night</p>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default SpotIndexItem;
