import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class SpotMap extends React.Component {
    constructor(props) {
        super(props);
        this.renderMap = this.renderMap.bind(this);
    }

    componentDidMount() {
        this.renderMap();
    }

    componentDidUpdate(prevProps) {
        this.MarkerManager.updateMarkers(this.props.spots);
        if (prevProps.location.search != this.props.location.search){
            debugger
            this.renderMap()
        }
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

    renderMap(){

        let newLat, newLng;

        if (this.props.search) {
            // debugger
            newLat = this.props.search.lat;
            newLng = this.props.search.lng
        } else {
            newLat = 37.7758;
            newLng = -122.435;
        }

        const mapOptions = {
            center: {
                lat: parseFloat(newLat),
                lng: parseFloat(newLng)
            },
            zoom: 13
        };


        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.spots);

    }

    componentWillUnmount(){
        google.maps.event.clearListeners(this.map,'idle');
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

export default withRouter(SpotMap);