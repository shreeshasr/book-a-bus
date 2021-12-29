import { createSlice } from "@reduxjs/toolkit";
import morning from "../images/morning.jpeg"
import bharathi from "../images/bharathi.jpeg"
import poornima from "../images/poornima.jpeg"
import pragathi from "../images/pragathi.jpeg"
import sugama from "../images/sugama.jpeg"
import srs from "../images/srs.jpeg"
import vrl from "../images/vrl.jpeg"
import mahalaxmi from "../images/mahalaxmi.jpeg"
import orange from "../images/orange.png"
const initialState = {
    buses: [
        {
            id: 1,
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
            availableSeats: 20,
            coronaSaftey: true,
            ac: true,
            sleeper: true,
            image: morning,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "track bus", icon: "fa-map-marker-alt"}, { title: "charging point", icon: "fa-charging-station"}, { title: "reading light", icon: "fa-lightbulb"}, { title: "vaccinated staff", icon: "fa-syringe"}]
        },
        {
            id: 2,
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
            availableSeats: 28,
            coronaSaftey: true,
            ac: false,
            sleeper: true,
            image: sugama,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "charging point", icon: "fa-charging-station"}, { title: "emergency contact", icon: "fa-phone"}, { title: "track bus", icon: "fa-map-marker-alt"}]
        },
        {
            id: 3,
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
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "blankets", icon: "fa-bed"}]
        },
        {
            id: 4,
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
            availableSeats: 20,
            coronaSaftey: true,
            ac: false,
            sleeper: false,
            image: poornima,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "track bus", icon: "fa-map-marker-alt"}, { title: "charging point", icon: "fa-charging-station"}]
        },
        {
            id: 5,
            name: "VRL",
            from: "Bangalore",
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            numberOfRatings: 73,
            ratings: 3.8,
            price: 860,
            discountPrice: 0,
            restStops: 3,
            totalSeats: 46,
            availableSeats: 36,
            coronaSaftey: true,
            ac: false,
            sleeper: false,
            image: vrl,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "sanitizer", icon: "fa-pump-soap"}]
        },
        {
            id: 6,
            name: "SRS",
            from: "Bangalore",
            to: "Mumbai",
            fromTime: "21:30",
            numberOfRatings: 743,
            toTime: "5:30",
            ratings: 4.1,
            restStops: 3,
            price: 950,
            discountPrice: 0,
            totalSeats: 36,
            availableSeats: 26,
            coronaSaftey: false,
            ac: false,
            sleeper: false,
            image: srs,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "music", icon: "fa-music"}, { title: "track bus", icon: "fa-map-marker-alt"}]
        },
        {
            id: 7,
            name: "Orange",
            from: "Bangalore",
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            numberOfRatings: 198,
            ratings: 4.1,
            price: 550,
            restStops: 2,
            discountPrice: 0,
            totalSeats: 41,
            availableSeats: 31,
            coronaSaftey: false,
            ac: false,
            sleeper: true,
            image: orange,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "music", icon: "fa-music"}]
        },
        {
            id: 8,
            name: "Mahalaxmi Motors",
            from: "Bangalore",
            to: "Mangalore",
            numberOfRatings: 16,
            fromTime: "21:30",
            toTime: "5:30",
            restStops: 3,
            ratings: 4.1,
            price: 450,
            discountPrice: 0,
            totalSeats: 36,
            availableSeats: 26,
            coronaSaftey: true,
            ac: false,
            sleeper: true,
            image: mahalaxmi,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "medical assistance", icon: "fa-stethoscope"}]
        },
        {
            id: 9,
            name: "Bharathi Motors",
            from: "Bangalore",
            numberOfRatings: 8,
            to: "Mangalore",
            fromTime: "21:30",
            toTime: "5:30",
            ratings: 4.1,
            restStops: 3,
            price: 580,
            discountPrice: 0,
            totalSeats: 18,
            availableSeats: 8,
            coronaSaftey: false,
            ac: true,
            sleeper: false,
            image: bharathi,
            bookedSeats: [{ seatNumber: "1", gender: "M", booker: "XXXX" }, { seatNumber: "18", gender: "M", booker: "XXXX" }, { seatNumber: "3", gender: "F", booker: "XXXX" },{ seatNumber: "9", gender: "M", booker: "XXXX" },{ seatNumber: "15", gender: "M", booker: "XXXX" },{ seatNumber: "10", gender: "M", booker: "XXXX" },{ seatNumber: "21", gender: "F", booker: "XXXX" },{ seatNumber: "1", gender: "F", booker: "XXXX" },{ seatNumber: "20", gender: "M", booker: "XXXX" },{ seatNumber: "28", gender: "F", booker: "XXXX" },{ seatNumber: "29", gender: "F", booker: "XXXX" }],
            special: [{ title: "music", icon: "fa-music"}, { title: "sanitizer", icon: "fa-pump-soap"}]
        },
],
    busesToDisplay: [],
    searchFailed: false,
    bookerName: "",
    journeyDate: new Date()
}

const busSlice = createSlice({
    name : "busSlice",
    initialState,
    reducers: {
        filterBuses: (state, action) => {
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
        setJourneyDate: (state, action) => {
            state.journeyDate = action.payload.journeyDate
        },
        getAllBusesAvailableOverall: (state) => {
            state.busesToDisplay = state.buses
        },
        setTicketBookerName: (state, action) => {
            state.bookerName = action.payload.bookerName
        },
        bookASeat: (state, action) => {
            for(let i=0;i<state.busesToDisplay.length;i++){
                if(state.busesToDisplay[i].id === action.payload.id){
                    state.busesToDisplay[i].bookedSeats.push({seatNumber: action.payload.seatNumber, gender: action.payload.gender, booker: action.payload.booker})
                    state.busesToDisplay[i].availableSeats = state.busesToDisplay[i].availableSeats - 1
                }
            }
        },
        removeBookedSeat: (state, action) => {
            console.log("triggred")
            for(let i=0;i<state.busesToDisplay.length;i++){
                if(state.busesToDisplay[i].id === parseInt(action.payload.id)){
                    state.busesToDisplay[i].bookedSeats = state.busesToDisplay[i].bookedSeats.filter( (seat) => (seat.seatNumber !== action.payload.seatNumber && seat.bookerName !== action.payload.bookerName))
                    state.busesToDisplay[i].availableSeats = state.busesToDisplay[i].availableSeats + 1
                }
            }
        }
        
    }
})

export const {filterBuses, getAllBusesAvailableOverall, setJourneyDate, getBusDetailsFromId, bookASeat, setTicketBookerName, removeBookedSeat} = busSlice.actions;

export default busSlice.reducer