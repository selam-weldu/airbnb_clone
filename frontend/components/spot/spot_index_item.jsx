import React from 'react';

class SpotIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { spot, amenityList } = this.props;
        let photoUrl;
        if (spot.photoUrls.length >= 1) {
            photoUrl = spot.photoUrls[0];
        }



        return (
            <div className="list-item-container">
                <ul className="list-item-ul">
                    <div className="list-item-content">
                        <div className="list-item-link" onClick={this.handleClick} >

                            <div className="list-item-photo">
                                <img src={photoUrl} className="index-photo" />
                            </div>
                            <div className="list-item-info">

                                <ul className="item-info-ul">
                                    <div className="spot-sf">SAN FRANCISCO</div>
                                    <div className="item-info">
                                        <div className="item-name">
                                            {spot.name}
                                        </div>
                                        <div className="item-guests">
                                            <div className="index-guests">Room for {amenityList.guest_num}</div>
                                        </div>
                                        <div className="item-amenities">
                                            {amenities}
                                        </div>
                                    </div>
                                </ul>
                                <div className="list-item-price-container">
                                    <div className="heart">
                                        heart
                </div>
                                    <div className="list-item-price">
                                        ${spot.price}/night
                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ul>

            </div>
        )
    }
}

export default withRouter(SpotIndexItem);