import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header/Header';
import OffersBar from './components/Header/OffersBar';
import Footer from './components/Footer/Footer';
import FloatingRewardsButton from './components/FloatingRewardsButton';
import CartModal from './components/Cart/CartModal';
import SearchModal from './components/Search/SearchModal';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import RoastedCoffeePage from './pages/RoastedCoffeePage';
import BestsellersPage from './pages/BestsellersPage';
import GiftingPage from './pages/GiftingPage';
import EquipmentPage from './pages/EquipmentPage';
import MerchandisePage from './pages/MerchandisePage';
import WholesalePage from './pages/WholesalePage';
import LearnPage from './pages/LearnPage';
import CelebritiesPage from './pages/CelebritiesPage';
import AboutUsPage from './pages/AboutUsPage';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col">
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#FFC107',
                secondary: '#fff',
              },
            },
          }}
        />

        {/* Header */}
        <Header
          onCartClick={() => setIsCartOpen(true)}
          onWishlistClick={() => setIsWishlistOpen(true)}
        />

        {/* Offers Bar */}
        <OffersBar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roasted-coffee" element={<RoastedCoffeePage />} />
            <Route path="/bestsellers" element={<BestsellersPage />} />
            <Route path="/gifting" element={<GiftingPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/merchandise" element={<MerchandisePage />} />
            <Route path="/wholesale" element={<WholesalePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/celebrities" element={<CelebritiesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Rewards Button */}
        <FloatingRewardsButton />

        {/* Modals */}
        <AnimatePresence>
          {isCartOpen && (
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          )}
        </AnimatePresence>

        <SearchModal />
      </div>
    </ShopProvider>
  );
}

export default App;
