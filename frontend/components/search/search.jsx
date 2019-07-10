import React from 'react';
import SpotMap from '../spot/spot_map';
import SpotIndex from '../spot/spot_index';
import NavBarIndexContainer from '../search/navbar_index/navbar_index_container';
// import SearchBar from './search_bar';
// import SpotMapContainer from '../spot/spot_map_container';


class Search extends React.Component {
    constructor(props){
        super(props);
        // this.render = this.render.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchSpots();
    // }

    render(){
        return(
            <div className="spot-index-container">

                {/* <div className="nav-bar-container">
                    <NavBarIndexContainer/>
                </div> */}
                
                <div className="index-map">
                    {/* <div className="right-side"> */}
                        {/* <SpotMap
                            spots={this.props.spots}
                            updateFilter={this.props.updateFilter}
                            search={this.props.search} /> */}
                            {/* <SpotMapContainer/> */}
                    {/* </div> */}

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
