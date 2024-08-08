import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

// pages imports
import Home from './pages/Home'
import Recommendations from './pages/Recommendations'

import GastrologyR1Live from './pages/Gastrology/GastrologyR1Live'
import GastrologyR1Time from './pages/Gastrology/GastrologyR1Time'
import GastrologyR1Spec from './pages/Gastrology/GastrologyR1Spec'
import GastrologyR1Cap from './pages/Gastrology/GastrologyR1Cap'

import NeurologyR1Live from './pages/Neurology/NeurologyR1Live'
import NeurologyR1Time from './pages/Neurology/NeurologyR1Time'
import NeurologyR1Spec from './pages/Neurology/NeurologyR1Spec'
import NeurologyR1Cap from './pages/Neurology/NeurologyR1Cap'

import OncologyR1Live from './pages/Oncology/OncologyR1Live'
import OncologyR1Time from './pages/Oncology/OncologyR1Time'
import OncologyR1Spec from './pages/Oncology/OncologyR1Spec'
import OncologyR1Cap from './pages/Oncology/OncologyR1Cap'

import RadiologyR1Live from './pages/RadiologyR1/RadiologyR1Live'
import RadiologyR1Time from './pages/RadiologyR1/RadiologyR1Time'
import RadiologyR1Spec from './pages/RadiologyR1/RadiologyR1Spec'
import RadiologyR1Cap from './pages/RadiologyR1/RadiologyR1Cap'

import RadiologyR2Live from './pages/RadiologyR2/RadiologyR2Live'
import RadiologyR2Time from './pages/RadiologyR2/RadiologyR2Time'
import RadiologyR2Spec from './pages/RadiologyR2/RadiologyR2Spec'
import RadiologyR2Cap from './pages/RadiologyR2/RadiologyR2Cap'
// end of pages

function App() {

  return (
    <Router>
      <div className="global-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recommendations" element={<Recommendations />} />

          <Route path="/GastrologyR1Live" element={<GastrologyR1Live />} />
          <Route path="/GastrologyR1Time" element={<GastrologyR1Time />} />
          <Route path="/GastrologyR1Spec" element={<GastrologyR1Spec />} />
          <Route path="/GastrologyR1Cap" element={<GastrologyR1Cap />} />

          <Route path="/NeurologyR1Live" element={<NeurologyR1Live />} />
          <Route path="/NeurologyR1Time" element={<NeurologyR1Time />} />
          <Route path="/NeurologyR1Spec" element={<NeurologyR1Spec />} />
          <Route path="/NeurologyR1Cap" element={<NeurologyR1Cap />} />

          <Route path="/OncologyR1Live" element={<OncologyR1Live />} />
          <Route path="/OncologyR1Time" element={<OncologyR1Time />} />
          <Route path="/OncologyR1Spec" element={<OncologyR1Spec />} />
          <Route path="/OncologyR1Cap" element={<OncologyR1Cap />} />

          <Route path="/RadiologyR1Live" element={<RadiologyR1Live />} />
          <Route path="/RadiologyR1Time" element={<RadiologyR1Time />} />
          <Route path="/RadiologyR1Spec" element={<RadiologyR1Spec />} />
          <Route path="/RadiologyR1Cap" element={<RadiologyR1Cap />} />

          <Route path="/RadiologyR2Live" element={<RadiologyR2Live />} />
          <Route path="/RadiologyR2Time" element={<RadiologyR2Time />} />
          <Route path="/RadiologyR2Spec" element={<RadiologyR2Spec />} />
          <Route path="/RadiologyR2Cap" element={<RadiologyR2Cap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
