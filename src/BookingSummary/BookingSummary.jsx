import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BookingSummary.scss'
function BookingSummary() {
    const buses = useSelector( (state) => state.busReducer.busesToDisplay)
    const bookerName = useSelector( (state) => state.busReducer.bookerName)
    const journeyDate = useSelector( (state) => state.busReducer.journeyDate)
    const [value, setValue] = useState("");
    const [couponCode, setCouponCode] = useState("")
    let { id } = useParams();
    let couponDiscount = 0;

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

    let busDeatils = getBusDetailsFromId(id)
    let finalSingleTicketPrice = busDeatils.discountPrice > 0 ? busDeatils.discountPrice : busDeatils.price;

    const getfinall = () => {
        return getTicketsOfABooker(bookerName).length * finalSingleTicketPrice - couponDiscount
    }

    const isAppliedCouponCodeValid = () => {
        let coupons = [{code: "FIRST", discount: 20},{code: "NEW", discount: 10},{code: "BUS", discount: 40},{code: "TRY", discount: 100}];
        let requiredCouponDetails = coupons.filter( (coupon) => coupon.code === couponCode)
        
        if(getfinall() > 0){
            if(requiredCouponDetails.length > 0){
                couponDiscount = requiredCouponDetails[0].discount  
                return <div className='validCoupon' style={{color:"green"}}>Hurray! Applied coupon <strong>{couponCode}</strong> fetched you a discount of INR {couponDiscount}</div>  
            }
            else{
                return <div className='invalidCoupon' style={{color:"red"}}>Sorry! Applied coupon <strong>{couponCode}</strong> is invalid</div>
            }
        }
        
    }

    return (
        <div className='bookingSummary'>
             <div className="summary">
               <div className="ticketsSummary">Your tickets booking summary</div>
               <div className="yourTicketInfo">
                    <div className="ticketBookedBy">Ticket booked by : <strong>{bookerName}</strong></div>
                    <div className="numberOfTicketsBooked">Number of tickets : <strong>{getTicketsOfABooker(bookerName).length}</strong></div>
                    <div className="numberOfTicketsBooked">Date of journey : <strong>{journeyDate.toDateString()}</strong></div>
                    <div className="numberOfTicketsBooked">Bus Boarding time : <strong>{busDeatils.fromTime}</strong></div>
                    <div className="seatNumbersBooked">Seat Numbers : <strong>{getTicketsOfABooker(bookerName).join(", ")}</strong></div>
                    <input type="text" className="coupon" placeholder='Enter coupon code' onChange={ (e) => setValue(e.target.value.toUpperCase()) }/>
                    <button className='applyButton' onClick={ () => {setCouponCode(value)}}>Apply</button>
                    {
                        couponCode.length > 0 ? isAppliedCouponCodeValid() : ""
                    }
                    <div className="totalPriceOfTicketsBooked">Total Price : INR <strong>{getfinall().toLocaleString()}</strong></div>
               </div>
            </div>
            <Link to={"/busdetails/" + busDeatils.id}><button className='reviewPageButton'>Go back</button></Link>
        </div>
    )
}

export default BookingSummary
