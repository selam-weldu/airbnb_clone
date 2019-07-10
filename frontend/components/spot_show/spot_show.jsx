import React from 'react';
import SpotMapContainer from '../spot/spot_map_container';
import ShowSplash from './show_splash';
import SpotDetail from './spot_detail';import SpotPhotos from './spot_photos';
import SpotAmenities from './spot_amenities';
import Location from './location';
import NavBarIndexContainer from '../navbar_index/navbar_index_container';
// import HostInfo from './host_info';


class SpotShow extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.SpotId)
    }

    render() {

        if(!this.props.spot) return null;

        const spot = this.props.spot;
        return(
            <div>

                <div>
                    <NavBarIndexContainer/>
                </div>

                <div>
                    <ShowSplash
                        spot={this.props.spot}/>
                </div>

                <div>
                    <SpotDetail
                        spot={this.props.spot}/>
                </div>

                <div>
                    <SpotPhotos
                        photoUrls={this.props.spot.photoUrls}/>
                </div>

                <div>
                    <SpotAmenities/>
                </div>

                {/* <div>
                    <HostInfo/>
                </div> */}

                <div>
                    <Location
                        location={this.props.spot.location}
                        loc_detail={this.props.spot.loc_detail}/>
                </div>

            </div>
        )
    }
}

export default SpotShow;