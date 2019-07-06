import React from 'react';
import SpotIndexItem from './spot_index_item';


class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

   componentDidMount(){
       this.props.fetchSpots();
   }

    render() {
        
        const spots = this.props.spots.map(spot => {
            return (
                <SpotIndexItem 
                    key={spot.id} 
                    spot={spot}/>
            )
        });

        return (
            <div className="spots-index-container">

                <div className="spots-index-header">
                    <div className="spot-logo-container">
                        <img className="index-logo" src={''} />
                    </div>
                    <div className="index-aside">
                        <div className="aside-text">
                            Look at this place!
                        </div>
                    </div>
                </div>

                <div className="spots-container">

                    <div className="spots-header-container">
                        <div className="spots-header">
                            <p>This is a great place to stay.</p>
                        </div>
                    </div>

                    <ul className="spots-ul">
                        {spots}
                    </ul>

                    {/* <div className="index-footer-container">
                        <div className="index-footer-container2">
                            <div className="index-personal">LinkedIn</div>
                            <div className="index-personal">·</div>
                            <div className="index-personal">GitHub</div>
                            <div className="index-personal">·</div>
                            <div className="index-personal">Portfolio</div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default SpotIndex;