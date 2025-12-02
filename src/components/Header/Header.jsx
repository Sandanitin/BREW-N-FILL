import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown, FiMapPin, FiPackage, FiSettings, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext';
import { useAuth } from '../../context/AuthContext';

const Header = ({ onCartClick, onWishlistClick, onLoginClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(106); // Default height
    const { getCartCount, wishlist, openSearch } = useShop();
    const { user, isAuthenticated, logout } = useAuth();
    const headerRef = useRef(null);

    // Track header height
    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    // Promotional offers
    const offers = [
        { text: "Members: Free Shipping on Orders ₹500+", link: "#" },
        { text: "New Year Sale: Up to 40% Off on Selected Items", link: "#" },
        { text: "Buy 2 Get 1 Free on All Coffee Blends", link: "#" },
        { text: "Subscribe & Save 15% on Every Order", link: "#" },
    ];

    // Auto-scroll offers
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(interval);
    }, [offers.length]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setActiveDropdown(null);
            setShowUserMenu(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const navigation = [
        {
            name: 'ROASTED COFFEE',
            href: '/roasted-coffee',
            submenu: [
                { name: 'SINGLE ORIGIN & BLENDS', href: '/roasted-coffee' },
                { name: 'CAPSULES', href: '/roasted-coffee' },
                { name: 'READY TO BREW', href: '/roasted-coffee' },
                { name: 'VALUE PACKS', href: '/roasted-coffee' },
                { name: 'ALL COLLECTIONS', href: '/roasted-coffee' },
            ]
        },
        { name: 'BESTSELLERS', href: '/bestsellers' },
        { name: 'GIFTING', href: '/gifting' },
        { name: 'EQUIPMENT', href: '/equipment' },
        { name: 'MERCHANDISE', href: '/merchandise' },
        { name: 'WHOLESALE', href: '/wholesale' },
        {
            name: 'LEARN',
            href: '/learn',
            submenu: [
                { name: 'EVENTS', href: '/learn' },
                { name: 'BLOG', href: '/learn' },
                { name: 'RECIPE', href: '/learn' },
                { name: 'BREWING GUIDES', href: '/learn' },
                { name: 'INDIAN FLAVOURS', href: '/learn' },
            ]
        },
        { name: 'CELEBRITIES', href: '/celebrities' },
        {
            name: 'ABOUT US',
            href: '/about-us',
            submenu: [
                { name: 'Our Story', href: '/about-us' },
                { name: 'Meet the Founder', href: '/about-us' },
                { name: 'BREW-N-FILL Philosophy', href: '/about-us' },
            ]
        },
        { name: 'CAREERS', href: '/careers' },
        { name: 'CONTACT US', href: '/contact-us' },
    ];

    return (
        <header ref={headerRef} className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-sm' : 'bg-white'
            }`}>
            {/* Promotional Banner - Auto-scrolling Offers */}
            <div className="bg-gray-100 border-b border-gray-200 relative overflow-hidden">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-10 relative">
                        {/* Previous Button - Hidden on very small screens */}
                        <button
                            onClick={() => setCurrentOfferIndex((prev) => (prev - 1 + offers.length) % offers.length)}
                            className="hidden sm:flex absolute left-2 z-10 w-6 h-6 items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                            aria-label="Previous offer"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Offers Container */}
                        <div className="flex-1 flex items-center justify-center overflow-hidden px-2 sm:px-8">
                            <AnimatePresence mode="wait">
                                <motion.a
                                    key={currentOfferIndex}
                                    href={offers[currentOfferIndex].link}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800 hover:text-black transition-colors text-center"
                                >
                                    {offers[currentOfferIndex].text}
                                </motion.a>
                            </AnimatePresence>
                        </div>

                        {/* Next Button - Hidden on very small screens */}
                        <button
                            onClick={() => setCurrentOfferIndex((prev) => (prev + 1) % offers.length)}
                            className="hidden sm:flex absolute right-2 z-10 w-6 h-6 items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                            aria-label="Next offer"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-1">
                    {offers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentOfferIndex(index)}
                            className={`h-0.5 transition-all ${index === currentOfferIndex ? 'w-4 bg-gray-800' : 'w-2 bg-gray-400'
                                }`}
                            aria-label={`Go to offer ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Top Utility Bar - House of Chikankari Style */}
            <div className="hidden lg:block border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 relative">
                        {/* Left Side - Track Order & Country */}
                        <div className="flex items-center gap-4 text-xs">
                            <Link to="#" className="flex items-center gap-1.5 text-gray-700 hover:text-black transition-colors font-medium">
                                <FiMapPin className="text-sm" />
                                TRACK ORDER
                            </Link>
                            <button className="flex items-center gap-1.5 text-gray-700 hover:text-black transition-colors font-medium">
                                <span className="text-base">🇮🇳</span>
                                India
                            </button>
                        </div>

                        {/* Center: Logo */}
                        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center group">
                            <img src="/images/image.png" alt="BREW-N-FILL" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
                        </Link>

                        {/* Right Side - User Account & Icons */}
                        <div className="flex items-center gap-1">
                            <button
                                onClick={openSearch}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors group"
                                aria-label="Search"
                            >
                                <FiSearch className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={onWishlistClick}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative group"
                                aria-label="Wishlist"
                            >
                                <FiHeart className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                                {wishlist.length > 0 && (
                                    <span className="absolute top-1 right-1 bg-brand-yellow text-black text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                        {wishlist.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={onCartClick}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative group"
                                aria-label="Shopping cart"
                            >
                                <FiShoppingCart className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                                {getCartCount() > 0 && (
                                    <span className="absolute top-1 right-1 bg-brand-yellow text-black text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                        {getCartCount()}
                                    </span>
                                )}
                            </button>
                            {isAuthenticated ? (
                                <div className="relative">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowUserMenu(!showUserMenu);
                                        }}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative group"
                                        aria-label="User account"
                                    >
                                        <FiUser className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></span>
                                    </button>
                                    <AnimatePresence>
                                        {showUserMenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-50"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <div className="p-3 bg-gradient-to-br from-brand-yellow/10 to-brand-yellow-light/20 border-b border-gray-100">
                                                    <p className="font-semibold text-sm">{user.name}</p>
                                                    <p className="text-xs text-gray-600">{user.email}</p>
                                                </div>
                                                <Link
                                                    to="#"
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                                    onClick={() => setShowUserMenu(false)}
                                                >
                                                    <FiUser className="text-gray-600" />
                                                    <span className="text-sm font-medium">My Profile</span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                                    onClick={() => setShowUserMenu(false)}
                                                >
                                                    <FiPackage className="text-gray-600" />
                                                    <span className="text-sm font-medium">My Orders</span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                                    onClick={() => setShowUserMenu(false)}
                                                >
                                                    <FiSettings className="text-gray-600" />
                                                    <span className="text-sm font-medium">Settings</span>
                                                </Link>
                                                <div className="border-t border-gray-100">
                                                    <button
                                                        onClick={() => {
                                                            logout();
                                                            setShowUserMenu(false);
                                                        }}
                                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600"
                                                    >
                                                        <FiLogOut />
                                                        <span className="text-sm font-medium">Logout</span>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <button
                                    onClick={onLoginClick}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors group"
                                    aria-label="User account"
                                >
                                    <FiUser className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {/* Mobile Header - Only visible on mobile */}
            <div className="lg:hidden border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 relative">
                        {/* Left: Mobile Menu Button */}
                        <button
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                        </button>

                        {/* Center: Logo - Absolutely centered */}
                        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center group">
                            <img src="/images/image.png" alt="BREW-N-FILL" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                        </Link>

                        {/* Right: User Actions */}
                        <div className="flex items-center gap-1">
                            <button
                                onClick={openSearch}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors group"
                                aria-label="Search"
                            >
                                <FiSearch className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={onCartClick}
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative group"
                                aria-label="Shopping cart"
                            >
                                <FiShoppingCart className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                                {getCartCount() > 0 && (
                                    <span className="absolute top-1 right-1 bg-brand-yellow text-black text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                        {getCartCount()}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu - Below Logo */}
            <div className="hidden lg:block border-b border-gray-100 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-1">
                            {navigation.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Link
                                        to={item.href || '#'}
                                        className="flex items-center gap-1 px-3 py-3.5 text-xs font-medium text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-50"
                                    >
                                        {item.name}
                                        {item.submenu && (
                                            <FiChevronDown className={`text-[10px] transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.submenu && (
                                        <AnimatePresence>
                                            {activeDropdown === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                                                >
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.href}
                                                            className="block px-5 py-3.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-brand-yellow/10 hover:to-brand-yellow-light/20 hover:text-black transition-all border-b border-gray-50 last:border-0"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Premium Slide-in */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ top: `${headerHeight}px` }}
                            className="fixed left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{ top: `${headerHeight}px` }}
                            className="fixed bottom-0 left-0 w-[85%] max-w-sm bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
                        >
                            {/* Mobile Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
                                <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                                    <img src="/images/image.png" alt="BREW-N-FILL" className="h-10 w-auto object-contain" />
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <FiX className="text-xl" />
                                </button>
                            </div>

                            {/* User Profile Section */}
                            <div className="p-4 border-b border-gray-100">
                                {isAuthenticated ? (
                                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-brand-yellow/10 to-brand-yellow-light/20 rounded-2xl">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-full flex items-center justify-center text-lg font-bold text-black shadow-lg">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-base truncate">{user.name}</p>
                                            <p className="text-xs text-gray-600 truncate">{user.email}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            onLoginClick();
                                        }}
                                        className="w-full btn-primary py-3.5 text-sm font-semibold"
                                    >
                                        Login / Sign Up
                                    </button>
                                )}
                            </div>

                            {/* Navigation Items */}
                            <div className="p-4 space-y-1">
                                {navigation.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={item.href || '#'}
                                                className="flex-1 py-3 px-3 text-sm font-semibold text-gray-800 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
                                                onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.submenu && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveDropdown(activeDropdown === index ? null : index);
                                                    }}
                                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                                >
                                                    <FiChevronDown className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu */}
                                        <AnimatePresence>
                                            {item.submenu && activeDropdown === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 pr-2 py-2 space-y-1">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.href}
                                                                className="block py-2.5 px-4 text-sm text-gray-600 hover:text-black hover:bg-gradient-to-r hover:from-brand-yellow/10 hover:to-brand-yellow-light/20 rounded-lg transition-all border-l-2 border-transparent hover:border-brand-yellow"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Footer Links */}
                            <div className="p-4 border-t border-gray-100 space-y-2">
                                <Link to="#" className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                                    <FiMapPin className="text-base" />
                                    Track Order
                                </Link>
                                <button className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors w-full text-left">
                                    <span className="text-base">🇮🇳</span>
                                    India
                                </button>
                            </div>

                            {isAuthenticated && (
                                <div className="p-4 border-t border-gray-100">
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full py-3 text-sm font-semibold text-red-600 border-2 border-red-100 bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FiLogOut />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
