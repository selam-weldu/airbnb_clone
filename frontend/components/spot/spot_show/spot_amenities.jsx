import React from 'react';

const SpotAmenities = () => {
    return (
        <div className="show-amenities-container">
            <div className="amenities-header">
                <span>Amenities</span>
            </div>

            <div className="amenities-header2">
                <p>These amenities are available to you.</p>
            </div>

            <div className="amenities-photos">

                <div className="photo-container">
                    <img src="https://a0.muscache.com/airbnb/static/select/pdp/amenities/tile-view-2x/parking.png"/> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./parking.png"/> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./coffee-maker.png" />
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./dryer.png" />
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./elevator.png" />
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./essentials.png" /> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./extra-pillows-blankets.png" /> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./hair-dryer.png" />
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./iron.png" /> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./kitchen.png" /> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./tv.png" /> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./washer.png" /> 
                    <div className="photo-title">Free parking on premises</div>
                </div>
                <div className="photo-container">
                    <img src="./wireless-internet.png" />  
                    <div className="photo-title">Free parking on premises</div>
                </div>
                {/* <div><img src="./app/assets/images/amenities/parking.png"/> </div> */}
            </div>
            
        </div>
    )
}

export default SpotAmenities;