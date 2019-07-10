import React from 'react';

const SpotPhotos = ({ photoUrls }) => {
    return (
        <div className="show-photos-container">
            <div className="thin-line-show"></div>
            <div className="photos-header"> Tour this condominium </div>
            <div className="spot-photoss">
                <img src={photoUrls[0]} className="photoss"/>
                <img src={photoUrls[1]} className="photoss"/>
                <img src={photoUrls[2]} className="photoss"/>
                <img src={photoUrls[3]} className="photoss"/>
                <img src={photoUrls[4]} className="photoss"/>
                <img src={photoUrls[5]} className="photoss"/>
                <img src={photoUrls[6]} className="photoss"/>
                <img src={photoUrls[7]} className="photoss"/>
            </div>
        </div>
    )
}

export default SpotPhotos;
