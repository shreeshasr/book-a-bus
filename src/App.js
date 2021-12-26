import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import BookerDetails from './BookerDetails/BookerDetails';
import BookingSummary from './BookingSummary/BookingSummary';
import BusFullDetails from './BusFullDetails/BusFullDetails';
import Home from './Home/Home';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
            <Route path="/" exact element={<BookerDetails/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/busdetails/:id" element={<BusFullDetails/>}/>
            <Route path="/bookingsummary/:id" element={<BookingSummary/>}/>
        </Routes>
      </Provider>
        
    </div>
  );
}

export default App;
