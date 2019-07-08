import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const mapOptions = {
            center: {
                lat: 37.7758, // this.props.search.lat
                lng: -122.435 
            }, 
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();

            let bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };

            this.props.updateFilter("bounds", bounds);
        });
    }



    render() {
        return (
            <div
                className="map-container"
                ref={map => this.mapNode = map}> 
            </div>
        );
    }
}

export default SpotMap;