import React from 'react';
import SpotMapContainer from '../spot_map_container'

const Location = ({loc_detail}) => {
    return (
        <div className="location-container">
            <div className="thin-line-location"></div>
         <div className="location">
            <p>Location</p>     
        </div>  

        <div className="address">
            <span>San Francisco, California, United States</span>
        </div>

        <div className="loca_detail">
            <span>{loc_detail}</span>
        </div>

        <div className="show-map">
            <SpotMapContainer/>
        </div>
         
        </div>
    )
}

export default Location;