import React from 'react';
import SpotMapContainer from '../spot_map_container'

const Location = () => {
    return (
        <div className="location-container">
         <div className="location">
            <p>Location</p>     
        </div>  

        <div className="address">
            <p>San Francisco, California, United States</p>
        </div>

        <div className="show_map">
            <SpotMapContainer/>
        </div>
         
        </div>
    )
}

export default Location;