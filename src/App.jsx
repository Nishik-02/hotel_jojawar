import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopContactBar from './components/header/TopContactBar';
import Navbar from './components/header/Navbar';
import FloatingWhatsApp from './components/footer/FloatingWhatsApp';
import BookingModal from './components/booking/BookingModal';
import ContactModal from './components/contact/ContactModal';
import ScrollToTop from './components/common/ScrollToTop';

// Multi-page route components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import SustainabilityPage from './pages/SustainabilityPage';
import LocationPage from './pages/LocationPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState({});

  const handleOpenBooking = (prefillData = {}) => {
    setBookingPrefill(prefillData);
    setIsBookingOpen(true);
  };

  const handleSelectRoomForBooking = (room) => {
    setBookingPrefill({
      roomType: room.id,
      roomName: room.name
    });
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ivory-200 text-charcoal-800 flex flex-col font-sans selection:bg-emerald-800 selection:text-gold-200">
        
        {/* Top Contact Bar */}
        <TopContactBar />

        {/* Multi-Page Sticky Navbar */}
        <Navbar 
          onOpenBooking={() => handleOpenBooking({})} 
        />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage onSelectRoomForBooking={handleSelectRoomForBooking} />} />
            <Route path="/experiences" element={<ExperiencesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={() => handleOpenBooking({})} onOpenContact={() => setIsContactOpen(true)} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Global Interactive Booking Modal */}
        <BookingModal 
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialData={bookingPrefill}
        />

        {/* Global Contact Modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

      </div>
    </Router>
  );
}
