import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // New import
import Home from './components/Home';
import About from './components/About';
import Results from './components/Results';
import Products from './components/Products';
import Shop from './components/Shop';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Use Layout to wrap routes that need header and footer */}
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/ve-chung-toi" element={<Layout><About /></Layout>} />
                <Route path="/ket-qua" element={<Layout><Results /></Layout>} />
                <Route path="/san-pham" element={<Layout><Products /></Layout>} />
                <Route path="/mat-hang" element={<Layout><Shop /></Layout>} />
                <Route path="/muc-gia" element={<Layout><Pricing /></Layout>} />
                <Route path="/lien-he" element={<Layout><Contact /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;