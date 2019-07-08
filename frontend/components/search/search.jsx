import React from 'react';
import SpotMap from '../spot/spot_map';
import SpotIndex from '../spot/spot_index';


class Search extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="right-side">
                    <SpotMap
                        spots={this.props.spots}
                        updateFilter={this.props.updateFilter} />
                </div>
                
                <div className="left-side">
                    <SpotIndex
                        spots={this.props.spots}
                        fetchSpots={this.props.fetchSpots}
                        fetchSpot={this.props.fetchSpot}
                    />
                </div>

            </div>
        )
    }
}

export default Search;
