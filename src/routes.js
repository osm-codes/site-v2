import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'

const Routes = () => (
    <BrowserRouter>
        <Switch>            
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Switch>
    </BrowserRouter>
);

export default Routes
