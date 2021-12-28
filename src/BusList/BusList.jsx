import React from 'react'
import { useSelector } from 'react-redux'
import BusCard from '../BusCard/BusCard'
import './BusList.scss'
function BusList() {
    const buses = useSelector( (state) => state.busReducer.busesToDisplay)
    const searchFailed = useSelector( (state) => state.busReducer.searchFailed)
    
    return (
        <div className='busList'>
            {
                searchFailed ? <div className='noBuses'>Oops! No buses found!  <i class="fa fa-frown-open"></i></div> : ((buses.length === 0) ? <div className='noBuses'>Start searching your bus!  <i class="far fa-smile-beam"></i></div> :
                buses.map( (bus) => {
                    return <BusCard bus={bus}/>
                }))
            }
        </div>
    )
}

export default BusList
