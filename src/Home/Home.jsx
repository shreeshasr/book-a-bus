import React from 'react'
import BusList from '../BusList/BusList'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

function Home() {

    return (
        <div className='home'>
            <Navbar/>
            <Search/>
            <BusList/>
        </div>
    )
}

export default Home
