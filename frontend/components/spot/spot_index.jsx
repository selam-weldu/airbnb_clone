import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotMapContainer from './spot_map_container';
import NavBarIndexContainer from '../search/navbar_index/navbar_index_container';


class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

//    componentDidMount(){
  
//    }

    render() {
        
        const spots = this.props.spots.map(spot => (
                <SpotIndexItem 
                    key={spot.id} 
                    spot={spot}/>
        ));

        return (
            <div className="spots-index-container">

                <div className="nav-bar-container">
                    <NavBarIndexContainer />
                </div>

                <div className="spots-index-header">
                    <div className="spot-logo-container">
                        <img className="index-logo" src={''} />
                    </div>
                    <div className="index-aside">
                        <div className="aside-text">

                        </div>
                    </div>
                </div>

                <div className="spots-container">

                    <div className="left-side-container">
                        <div className="spots-header">
                            Airbnb Plus places to stay in San Francisco
                    </div>
                        <div className="spots-ul">

                            <ul>{spots}</ul>
                        </div>

                    </div>

                    <div className="right-side-container">
                        <SpotMapContainer/>
                    </div>
                    


                </div>
            </div>
        );
    }
}

export default SpotIndex;