import React from "react";

class AutoSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            { "types": ["geocode"] });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        this.props.onPlaceLoaded(place);
    }


    render() {
        return (
            <input ref={this.autocompleteInput} onChange={this.update('location')} id="nav2-search" id="autocomplete" placeholder="Enter your address"
                type="text"></input>
        );
    }
}

export default AutoSearchBar;