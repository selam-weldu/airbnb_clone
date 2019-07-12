import React from 'react';
import BookingUser from '../booking/booking_user';
import BookingIndexItem from '../booking/booking_index_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {

        debugger

        if (this.props.userId === undefined) return null;
        if (this.props.user === undefined) return null;
        if (this.props.bookings === undefined) return null;
        if (this.props.spots === undefined) return null;
       

        debugger

        const bookings = this.props.bookings.map(booking => {
            let spot = undefined;
            this.props.spots.forEach(potentialSpot => {
                if (booking.spot_id === potentialSpot.id) {
                    spot = potentialSpot;
                }
            })
            return (
                <BookingIndexItem
                    key={booking.id}
                    booking={booking}
                    spot={spot} />
            )

        });


        return (
            <div className='user-show'>
                <div className="booking-user">
                    <BookingUser
                        currentUser={this.props.currentUser} />
                </div>


                <div className='spots-ul'>
                    <ul>
                        {bookings}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserShow;
