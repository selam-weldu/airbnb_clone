import React from 'react';


class BookingUser extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="booking-user">
                <img src={this.props.currentUser.photoUrl} className="profile-pic" />
                <div className="welcome-guest">
                    <div>Hello,demoUser!</div>
                </div> 
            </div>
        )
    }
}

export default BookingUser;