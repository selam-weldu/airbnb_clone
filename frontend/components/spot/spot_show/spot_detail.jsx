import React from 'react';

const SpotDetail = ({ spot }) => {
    return (
        <div className="spot-detail-container">
            <div className="spot-show-details">
                <span>{spot.num_guests + 1} guests &nbsp; </span>
                <span>Studio &nbsp; </span>
                <span>{spot.num_beds + 1} beds &nbsp; </span>
                <span>{spot.num_baths + 1} baths</span>
            </div>

            <div className="spot-description">
                <span>{spot.description}</span>
            </div>
        </div>
    )
}

export default SpotDetail;