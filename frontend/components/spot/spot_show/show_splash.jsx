import React from 'react';

const ShowSplash = ({spot}) => {
    return(
        <div className="show-splash-container">
            <div className="title-logo-container">
                <div className="plus-logo">
                    <img className="pluss" src="https://waterbnb-seed.s3-us-west-1.amazonaws.com/airbnb_plus.png"/>
                    {/* <img className="pluss" src="https://static.makeuseof.com/wp-content/uploads/2018/02/airbnb-plus-logo-670x335.png"/> */}
                </div>
                <div className="title">
                    <span>{spot.title}</span>
                </div>
            </div>
            <div className="main-photo-container">
                <img src={spot.photoUrls[0]} className="photo" />
            </div>
        </div>
    )
}

export default ShowSplash;