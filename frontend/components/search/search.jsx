import React from 'react';
import SpotMap from '../spot/spot_map';
import SpotIndex from '../spot/spot_index';
import NavBarIndex from '../navbar_index/navbar_index';
// import SearchBar from './search_bar';


class Search extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="spot-index-container">

                <div className="nav-bar-container">
                    <NavBarIndex/>
                </div>
                
                <div className="index-map">
                    <div className="right-side">
                        <SpotMap
                            spots={this.props.spots}
                            updateFilter={this.props.updateFilter}
                            search={this.props.search} />
                    </div>

                    <div className="left-side">
                        <SpotIndex
                            spots={this.props.spots}
                            fetchSpots={this.props.fetchSpots}
                            fetchSpot={this.props.fetchSpot}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Search;
