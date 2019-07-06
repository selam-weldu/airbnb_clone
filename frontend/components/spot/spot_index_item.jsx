import React from 'react';
import { Link } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => {

    return (
        <li className="spot-index-item">
                <span>{spot.title}</span>
                <span>{spot.description}</span>
                <img src={spot.photoUrl[0]} alt={spot.title} />
                <span>${spot.price}/night</span>
        </li>
    )
};

export default SpotIndexItem;