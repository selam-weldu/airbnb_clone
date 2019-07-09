import React from 'react';

const ShowSplash = ({spot}) => {
    return(
        <div className="show-splash-container">
            <div className="title-logo-container">
                <div className="plus-logo">Airbnb Plus</div>
                <div className="title">spot title</div>
            </div>
            <div className="main-photo-container">
                <div className="photo">spot main photo</div>
            </div>
        </div>
    )
}

export default ShowSplash;