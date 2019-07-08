class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(spots) {
        let spotObj = {};
        spots.forEach(spot => spotObj[spot.id] = spot);

        spots
            .filter(spot => !this.markers[spot.id])
            .forEach(newSpot => this.createMarkerFromSpot(newSpot));

        Object.keys(this.markers)
            .filter(spotId => !spotObj[spotId])
            .forEach(spotId => this.removeMarker(this.markers[spotId]));

    }

   
    createMarkerFromSpot(spot) {
        const position = new google.maps.LatLng(spot.lat, spot.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            spotId: spot.id
        });

        marker.addListener('click', () => this.handleClick(spot));
        this.markers[marker.spotId] = marker;
    }

    removeMarker(marker) {
        if (this.markers[marker.id]) {
            this.markers[marker.id].setMap(null);
            delete this.markers[marker.id];
        }

    }
}

export default MarkerManager;