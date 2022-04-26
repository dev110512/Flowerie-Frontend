import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Venues from '../../components/HomeComponents/Venues'
import Tool from '../../components/HomeComponents/Tool'
import Vendor from '../../components/HomeComponents/Vendor'
import Navbar from '../../components/navbars/Navbar'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Hero />
            <Venues />
            <Tool />
            <Vendor />
            <LoginModal />
            <SignupModal />
        </>
    )
}

export default Home
