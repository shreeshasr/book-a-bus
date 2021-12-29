import React, { useState } from 'react'
import './Search.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filterBuses, getAllBusesAvailableOverall, setJourneyDate } from '../Redux/BusSlice';
import { useDispatch, useSelector } from 'react-redux';

function Search() {
    const journeyDate = useSelector( (state) => state.busReducer.journeyDate)
    const [showFromDropdown, setShowFromDropdown] = useState(false)
    const [selectedFromPlace, setSelectedFromPlace] = useState()
    const [showToDropdown, setShowToDropdown] = useState(false)
    const [selectedToPlace, setSelectedToPlace] = useState()
    const dispatch = useDispatch();
    const options = [
        {
          label: "Bangalore (All locations)",
          value: "Bangalore",
        },
        {
          label: "Mangalore (All locations)",
          value: "Mangalore",
        },
        {
          label: "Chennai (All locations)",
          value: "Chennai",
        },
        {
          label: "Hyderabad (All locations)",
          value: "Hyderabad",
        },
        {
          label: "Kochi (All locations)",
          value: "Kochi",
        },
        {
          label: "Mumbai (All locations)",
          value: "Mumbai",
        },
        {
          label: "Delhi (All locations)",
          value: "Delhi",
        },
      ];

    return (
        <div className='search'>
            <div className="searchBox">
                <i className="fa fa-building"></i>
                <input type="text" className='searchInput' placeholder='FROM' value={selectedFromPlace} onChange={ (e) => { setSelectedFromPlace(e.target.value) }} onClick={ () => { setShowFromDropdown(true) }}></input>
                {
                    showFromDropdown ? (
                        <div id="myDropdown" className="from-dropdown-content">
                            <ul>
                                {
                                options.map((option) => (
                                    <li onClick={ () => { setSelectedFromPlace(option.value); setShowFromDropdown(false) }} className={(option.value === selectedToPlace) ? "disabled" : ""}> {option.label}</li>))
                                }   
                            </ul>
                        </div>) : ""
                }
            </div>
            <div className="searchBox">
                <i className="fa fa-building"></i>
                <input type="text" className='searchInput' placeholder='TO' value={selectedToPlace} onChange={ (e) => { setSelectedToPlace(e.target.value) }} onClick={ () => { setShowToDropdown(true); }}></input>
                {
                    showToDropdown ? (
                        <div id="myDropdown" className="to-dropdown-content">
                            <ul>
                                {
                                options.map((option) => (
                                    <li onClick={ () => { setSelectedToPlace(option.value); setShowToDropdown(false) }} className={(option.value === selectedFromPlace) ? "disabled" : ""}> {option.label}</li>))
                                }   
                            </ul>
                        </div>) : ""
                }
            </div>
            <div className="searchBox">
                <i className="fa fa-calendar"></i>
                <DatePicker placeholderText="ONWARD DATE" minDate={new Date()} selected={journeyDate} onChange={date => dispatch(setJourneyDate({journeyDate : date}))}/>
            </div>
            <div className="searchButtons">
              <button className='searchbutton' onClick={() => dispatch(filterBuses({from:selectedFromPlace, to:selectedToPlace}))}>Find buses</button>
              <button className='searchbutton' onClick={() => { dispatch(getAllBusesAvailableOverall()); setSelectedFromPlace(''); setSelectedToPlace(''); dispatch(setJourneyDate({journeyDate: new Date()}))}}>Clear all Filter</button>
            </div>
            
        </div>
    )
}

export default Search
