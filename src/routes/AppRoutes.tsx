import React from 'react'
import { Routes, Route } from 'react-router-dom'

// ------------------ PAGES --------------------
import Home from '../pages/Home'
import Search from '../pages/Search'
import Product from '../pages/Product'
import Host from '../pages/Host'
// ---------------------------------------------
const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/host" element={<Host />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    )
}

export default AppRoutes
