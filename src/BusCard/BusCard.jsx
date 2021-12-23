import React from 'react'
import './BusCard.scss'
function BusCard({bus}) {
    return (
        <div className='busCard'>
            <div className="cardLeft">
                 <img className="busImage" src={bus.image} alt={bus.name}/>
                 <div className="specialities">
                    {
                        bus.special.map( (item) => {
                            return <i title={item.title} className={"fa " + item.icon}></i>
                        })
                    }
                </div>
                <span className="busRestStops">{bus.restStops} rest stops</span>
                <div className="tags">
                    { (bus.sleeper ? <div className='sleeper'>Sleeper</div> : <div className='sitting'>Seater</div>)}
                    { (bus.ac ? <div className='ac'>AC</div> : <div className='nonac'>Non AC</div>)}
                    { (bus.coronaSaftey ? <div className='ac'>Corona Saftey</div> : "")}
                </div>
            </div>
            <div className="cardRight">
                <div className="busName">{bus.name}</div>
                <div className="busFromTo">{bus.from} <i className="fa fa-arrow-right"></i> {bus.to}</div>
                <div className="busRating">{bus.ratings} <i className="fa fa-star"></i> <span className='totalNumberOfReviews'> ({bus.numberOfRatings.toLocaleString()} <i class="fas fa-pen"></i>)</span></div>
               
                <div className="busPrice">INR <span className={(bus.discountPrice > 0) ? "strike" : "bold"}>{bus.price}</span></div>
                { (bus.discountPrice > 0 ? <strong className='discountPrice'> {bus.discountPrice}</strong> : "")}
                <div className="busAvailableSeats">{bus.availableSeats} seats available</div>
                <button className='bookSeatButton'>Book seats</button>
            </div>
            
        </div>
    )
}

export default BusCard
