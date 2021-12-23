import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
        </Routes>
      </Provider>
        
    </div>
  );
}

export default App;
