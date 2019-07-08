import React from 'react';
import SpotIndexItem from './spot_index_item';



class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

//    componentDidMount(){
//        this.props.fetchSpots();
//    }

    render() {
        
        const spots = this.props.spots.map(spot => (
                <SpotIndexItem 
                    key={spot.id} 
                    spot={spot}/>
        ));

        return (
            <div className="spots-index-container">

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

        
                    <div className="spots-header">
                        Airbnb Plus places to stay in San Francisco
                    </div>
       
                    <div>
                        <ul>{spots}</ul>
                    </div>


                </div>
            </div>
        );
    }
}

export default SpotIndex;