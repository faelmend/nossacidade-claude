import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Explore from './pages/Explore';
import Categories from './pages/Categories';
import Jobs from './pages/Jobs';
import BusinessDetails from './pages/BusinessDetails';
import MediaPartners from './pages/MediaPartners';
import Landing from './pages/Landing';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import LicenseeLanding from './pages/LicenseeLanding';
import MasterPrompt from './pages/MasterPrompt';
import WordpressConverter from './pages/WordpressConverter';

// Layout wrapper to ensure Navbar and Footer are present on inner pages
const MainLayout = () => (
  <div className="flex flex-col min-h-screen font-sans">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - No Navbar/Footer context initially */}
        <Route path="/" element={<Landing />} />

        {/* Public Licensee Sales Page */}
        <Route path="/seja-licenciado" element={<MainLayout />}>
             <Route index element={<LicenseeLanding />} />
        </Route>

        {/* Master Prompt & Backup Tool */}
        <Route path="/master-prompt" element={<MasterPrompt />} />

        {/* WordPress Converter Tool */}
        <Route path="/wp-converter" element={<WordpressConverter />} />

        {/* Auth & Portals (No MainLayout to keep separate context) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* 1. Super Admin (Platform Owner) */}
        <Route path="/admin/super" element={<SuperAdminDashboard />} />
        
        {/* 2. Licensee Portal (City Manager) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* 3. Business Client Portal (Shop Owner) */}
        <Route path="/panel/business" element={<BusinessDashboard />} />

        {/* City Specific Public Routes */}
        <Route path="/:citySlug" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="checkout" element={<Checkout />} /> 
          <Route path="explore" element={<Explore />} />
          <Route path="categories" element={<Categories />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="media-partners" element={<MediaPartners />} /> 
          <Route path="business/:id" element={<BusinessDetails />} />
          {/* Redirect legacy login route to new admin login */}
          <Route path="login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;