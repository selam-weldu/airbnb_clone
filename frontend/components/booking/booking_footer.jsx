import React from 'react';


class BookingFooter extends React.Component {
    render(){

        let { openModal } = this.props
        return(
            <div className="booking-footer-submit">
                <div className="footer-left">
                    <img src="https://waterbnb-seed.s3-us-west-1.amazonaws.com/footer.png" />
                </div>
                <div className="footer-right">
                    <div className="footer-price-container">
                        {/* <span>${price}/night</span> */}
                        <span>${this.props.spot.price}/night</span>
                    </div>
                    {/* <button className="footer-button" onClick={() => openModal('booking')}>Check availability</button> */}
                    {/* <button className="footer-button" onClick={props.openModal('booking')}>Check availability</button> */}
                </div>
            </div>
        )
    }
}

export default BookingFooter;

// const BookingFooter = ( {openModal} ) => {
//     // const price = props.spot.price
//     return (
//         <div className="booking-footer-submit">
//             <div className="footer-left">
//                 <img src="https://waterbnb-seed.s3-us-west-1.amazonaws.com/footer.png" />
//             </div>
//             <div className="footer-right">
//                 <div className="footer-price-container">
//                     {/* <span>${price}/night</span> */}
//                     <span>$150/night</span>
//                 </div>
//                 <button className="footer-button" onClick={() => openModal('booking')}>Check availability</button>
//                 {/* <button className="footer-button" onClick={props.openModal('booking')}>Check availability</button> */}
//             </div>
//         </div>
//     );
// };


