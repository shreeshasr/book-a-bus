import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { bookASeat, removeBookedSeat } from '../Redux/BusSlice';
import "./BusFullDetails.scss"
function BusFullDetails() {
    const buses = useSelector( (state) => state.busReducer.busesToDisplay)
    const bookerName = useSelector( (state) => state.busReducer.bookerName)
    const dispatch = useDispatch()
    let { id } = useParams();

    const getBusDetailsFromId = (id) => {
        for(let i=0;i<buses.length;i++){
            if(parseInt(buses[i].id) === parseInt(id)){
                return buses[i]
            }
        }
    }

    const getTicketsOfABooker = (name) => {
        let ticketsOfBooker= []
        let bookedSeats = busDeatils.bookedSeats.filter( seat => seat.booker === name)
        bookedSeats.map( seat => ticketsOfBooker.push(parseInt(seat.seatNumber)))
        return ticketsOfBooker
    }

    const getBookedSeats = () => {
        let bookedSeats = []
        busDeatils.bookedSeats.map( seat => bookedSeats.push(parseInt(seat.seatNumber)))
        return bookedSeats
    }

    const getFemaleSeats = () => {
        let femaleSeats = []
        let bookedSeats = busDeatils.bookedSeats.filter( seat => seat.gender === "F")
        bookedSeats.map( seat => femaleSeats.push(parseInt(seat.seatNumber)))
        return femaleSeats
    }

    let busDeatils = getBusDetailsFromId(id)
    
    const printNumberOfSeats = () => {
        let seats = [];
        let seatsBooked = getBookedSeats()
        let femaleSeatsBooked = getFemaleSeats()
        let ticketsOfBooker = getTicketsOfABooker(bookerName)
        let decideButtonText;
        for(let i=0; i<busDeatils.totalSeats; i++){
           decideButtonText = ticketsOfBooker.includes(i+1) ?  "cancelBooking" : "notAvailable";
            seats.push(
            <div className={"seatDetails " + (seatsBooked.includes(i+1) ? "booked ": " ") + (femaleSeatsBooked.includes(i+1) ? "female ": "")} >
                <i class="fas fa-bed"></i><div className="seatNumber">{i+1}</div>
                {
                seatsBooked.includes(i+1) ? 
                <button className={'bookedSeat ' + decideButtonText} onClick={ () => dispatch(removeBookedSeat({id: id, seatNumber: i+1, bookerName:bookerName}))}>
                    { ticketsOfBooker.includes(i+1) ?  "Cancel booking" : "Not available"}
                </button> :
                <div className="genderButtons">
                    <button className='maleButton' onClick={ () => dispatch(bookASeat({id:parseInt(id), seatNumber: i+1, gender: "M", booker: bookerName}))}>Male <i class="fas fa-male"></i></button>
                    <button className='femaleButton' onClick={ () => dispatch(bookASeat({id:parseInt(id), seatNumber: i+1, gender: "F", booker: bookerName}))}>Female <i class="fas fa-female"></i></button>
                </div>
            }
            </div>)
        }
        return seats
    }
    return (
        <div className='busFullDetails'>
            <div className="bookingSeatsInfo">
               { busDeatils.availableSeats === 0 ? <div className="noMorebooking">No more bookings allowed. Bus is Full! 😞</div> : <><div className="availableSeatsForBooking">Total {busDeatils.availableSeats} seats are available more for bookings in this bus. 🎊<br/> Grab your seats fast.</div></>}
            </div>
            <div className="seats">
                {
                    printNumberOfSeats()
                }
            </div>
            <div className="colorInfo">
                    <div className="whiteTile">
                        <div className="tile" style={{backgroundColor: "white"}}></div>
                        <div className="whiteInfo"> - seat available for booking</div>
                    </div>
                    <div className="yellowTile">
                        <div className="tile" style={{backgroundColor: "yellow"}}></div>
                        <div className="yellowInfo"> - seat booked for a Male</div>
                    </div>
                    <div className="pinkTile">
                        <div className="tile" style={{backgroundColor: "pink"}}></div>
                        <div className="pinkInfo"> - seat booked for a Female</div>
                    </div>
                </div>
            {
                getTicketsOfABooker(bookerName).length > 0 ? <Link to={"/bookingsummary/" + busDeatils.id}><button className='reviewPageButton'>Review booking</button></Link> : <button className='disabledReviewPageButton' disabled>Review booking</button>
            }
            <Link to={"/home"}><button className='reviewPageButton'>Go back</button></Link>
        </div>
    )
}

export default BusFullDetails
