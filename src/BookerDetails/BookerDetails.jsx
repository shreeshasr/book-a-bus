import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setTicketBookerName } from '../Redux/BusSlice'
import './BookerDetails.scss'
function BookerDetails() {
    const bookerName = useSelector( (state) => state.busReducer.bookerName)
    const dispatch = useDispatch()

    return (
        <div className='bookerDetails'>
                <div className="userInputs">
                    <div className="companyName">Book a bus</div>
                    <i className="fas fa-bus"></i>
                    <input type="text" className="bookerName" placeholder='Enter ticket booker name' onChange={ (e) => dispatch(setTicketBookerName({bookerName : e.target.value})) }/>
                    
                    {
                        bookerName !== "" ? <Link to="/home"><button className='bookingPageButton'>Go to booking page</button></Link> : <button className='disabledBookingPageButton' disabled>Go to booking page</button>
                    }
                </div>   
        </div>
    )
}

export default BookerDetails
