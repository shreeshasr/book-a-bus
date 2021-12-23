import { createSlice } from "@reduxjs/toolkit";
import morning from "../images/morning.jpeg"
import bharathi from "../images/bharathi.jpeg"
import poornima from "../images/poornima.jpeg"
import pragathi from "../images/pragathi.jpeg"
import sugama from "../images/sugama.jpeg"
const initialState = {
    buses: [
        {
            name: "Morning Star Travels",
            from: "Bangalore",
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            ratings: 3,
            numberOfRatings: 15336,
            price: 750,
            discountPrice: 700,
            totalSeats: 30,
            restStops: 3,
            availableSeats: 15,
            coronaSaftey: true,
            ac: true,
            sleeper: true,
            image: morning,
            special: [{ title: "track bus", icon: "fa-map-marker-alt"}, { title: "charging point", icon: "fa-charging-station"}, { title: "reading light", icon: "fa-lightbulb"}, { title: "vaccinated staff", icon: "fa-syringe"}]
        },
        {
            name: "Sugama",
            from: "Bangalore",
            to: "Chennai",
            fromTime: "21:30",
            numberOfRatings: 111336,
            toTime: "5:30",
            ratings: 4.8,
            price: 850,
            discountPrice: 800,
            totalSeats: 38,
            restStops: 3,
            availableSeats: 20,
            coronaSaftey: true,
            ac: false,
            sleeper: true,
            image: sugama,
            special: [{ title: "charging point", icon: "fa-charging-station"}, { title: "emergency contact", icon: "fa-phone"}, { title: "track bus", icon: "fa-map-marker-alt"}]
        },
        {
            name: "Pragathi Travels",
            from: "Bangalore",
            to: "Hyderabad",
            fromTime: "21:30",
            toTime: "5:30",
            numberOfRatings: 1036,
            ratings: 3.9,
            price: 710,
            restStops: 3,
            discountPrice: 690,
            totalSeats: 40,
            availableSeats: 0,
            coronaSaftey: true,
            ac: true,
            sleeper: false,
            image: pragathi,
            special: [{ title: "blankets", icon: "fa-bed"}]
        },
        {
            name: "Poornima Travels",
            from: "Bangalore",
            to: "Delhi",
            numberOfRatings: 112,
            fromTime: "21:30",
            toTime: "5:30",
            ratings: 4.5,
            restStops: 3,
            price: 550,
            discountPrice: 500,
            totalSeats: 30,
            availableSeats: 15,
            coronaSaftey: true,
            ac: false,
            sleeper: false,
            image: poornima,
            special: [{ title: "track bus", icon: "fa-map-marker-alt"}, { title: "charging point", icon: "fa-charging-station"}]
        },
        {
            name: "Bharathi Motors",
            from: "Bangalore",
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            numberOfRatings: 73,
            ratings: 3.8,
            price: 550,
            discountPrice: 0,
            restStops: 3,
            totalSeats: 46,
            availableSeats: 20,
            coronaSaftey: true,
            ac: false,
            sleeper: false,
            image: bharathi,
            special: [{ title: "sanitizer", icon: "fa-pump-soap"}]
        },
        {
            name: "Bharathi Motors",
            from: "Bangalore",
            to: "Mumbai",
            fromTime: "21:30",
            numberOfRatings: 743,
            toTime: "5:30",
            ratings: 4.1,
            restStops: 3,
            price: 550,
            discountPrice: 0,
            totalSeats: 36,
            availableSeats: 10,
            coronaSaftey: false,
            ac: false,
            sleeper: false,
            image: bharathi,
            special: [{ title: "music", icon: "fa-music"}, { title: "track bus", icon: "fa-map-marker-alt"}]
        },
        {
            name: "Maruti Motors",
            from: "Bangalore",
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            numberOfRatings: 198,
            ratings: 4.1,
            price: 550,
            restStops: 2,
            discountPrice: 0,
            totalSeats: 36,
            availableSeats: 10,
            coronaSaftey: false,
            ac: false,
            sleeper: true,
            image: bharathi,
            special: [{ title: "music", icon: "fa-music"}]
        },
        {
            name: "Mahalaxmi Motors",
            from: "Bangalore",
            to: "Mangalore",
            numberOfRatings: 16,
            fromTime: "21:30",
            toTime: "5:30",
            restStops: 3,
            ratings: 4.1,
            price: 550,
            discountPrice: 0,
            totalSeats: 36,
            availableSeats: 10,
            coronaSaftey: true,
            ac: false,
            sleeper: true,
            image: bharathi,
            special: [{ title: "medical assistance", icon: "fa-stethoscope"}]
        },
        {
            name: "Bharathi Motors",
            from: "Bangalore",
            numberOfRatings: 8,
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            ratings: 4.1,
            restStops: 3,
            price: 550,
            discountPrice: 0,
            totalSeats: 36,
            availableSeats: 10,
            coronaSaftey: false,
            ac: true,
            sleeper: false,
            image: bharathi,
            special: [{ title: "music", icon: "fa-music"}, { title: "sanitizer", icon: "fa-pump-soap"}]
        },
],
    busesToDisplay: [],
    searchFailed: false,
}

const busSlice = createSlice({
    name : "busSlice",
    initialState,
    reducers: {
        filterBuses: (state, action) => {
            console.log("triggered")
            let newBuses = [];
            for(let i=0;i<state.buses.length;i++){
                if((state.buses[i].from === action.payload.from) && (state.buses[i].to === action.payload.to)){
                    newBuses.push(state.buses[i])
                }
            }
            if(newBuses.length === 0){
                state.searchFailed = true
            }
            else{
                state.searchFailed = false
                state.busesToDisplay = newBuses
            }
            
        },
        getAllBusesAvailableOverall: (state) => {
            state.busesToDisplay = state.buses
        }
    }
})

export const {filterBuses, getAllBusesAvailableOverall} = busSlice.actions;

export default busSlice.reducer