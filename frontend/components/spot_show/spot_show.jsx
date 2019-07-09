import React from 'react';
import SpotMapContainer from '../spot/spot_map_container';
import ShowSplash from './show_splash';
import SpotDetail from './spot_detail';l

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
                <div> Spots Show page babyyyyy</div>
                <div>
                    <ShowSplash
                        spot={this.props.spot}/>
                </div>

                <div>
                    <SpotDetail
                        spot={this.props.spot}/>
                </div>

            </div>
        )
    }
}

export default SpotShow;