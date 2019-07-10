import React from 'react';
import SpotMapContainer from '../spot_map_container';
import ShowSplash from './show_splash';
import SpotDetail from './spot_detail';import SpotPhotos from './spot_photos';
import SpotAmenities from './spot_amenities';
import Location from './location';
import NavBarIndexContainer from '../../search/navbar_index/navbar_index_container';
import HostInfo from './host_info';
import MiniHostInfo from './mini_host_info';
import SpotAd from './spot_ad';


class SpotShow extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    render() {

        if(!this.props.spot) return null;

        const spot = this.props.spot;
        return(
            <div className="spot-show-main">

                <div>
                    <NavBarIndexContainer/>
                </div>

                <div>
                    <ShowSplash
                        spot={this.props.spot}/>
                </div>

                <div className="show-bottom">
                    <div className="spot-host">
                        <div>
                            <SpotDetail
                                spot={this.props.spot}/>
                        </div>

                        {/* <div>
                            <MiniHostInfo
                                host={this.props.host}/>
                        </div> */}
                    </div>

                    <div>
                        <SpotPhotos
                            photoUrls={this.props.spot.photoUrls}/>
                    </div>

                    <div>
                        <SpotAd/>
                    </div>

                    <div>
                        <SpotAmenities/>
                    </div>

                    {/* <div>
                        <HostInfo
                            host={this.props.host}/>
                    </div> */}

                    <div>
                        <Location
                            location={this.props.spot.location}
                            loc_detail={this.props.spot.loc_detail}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default SpotShow;