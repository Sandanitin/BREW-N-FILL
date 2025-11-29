import { useState, useEffect } from 'react';
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
    const { getCartCount, wishlist, openSearch } = useShop();
    const { user, isAuthenticated, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-white'
            }`}>
            {/* Top Bar - Country Selector & Track Order (Hidden on mobile) */}
            <div className="hidden md:block bg-black text-white py-2 text-xs">
                <div className="container-custom flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center hover:text-brand-yellow transition-colors">
                            <FiMapPin className="mr-1" />
                            India
                        </button>
                        <Link to="#" className="hover:text-brand-yellow transition-colors">Track Order</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center hover:text-brand-yellow transition-colors"
                                >
                                    <FiUser className="mr-1" />
                                    {user.name}
                                    <FiChevronDown className="ml-1" />
                                </button>
                                {showUserMenu && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-lg shadow-xl overflow-hidden z-50">
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                                        >
                                            <FiUser className="mr-2" />
                                            My Profile
                                        </Link>
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                                        >
                                            <FiPackage className="mr-2" />
                                            My Orders
                                        </Link>
                                        <Link
                                            to="#"
                                            className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                                        >
                                            <FiSettings className="mr-2" />
                                            Settings
                                        </Link>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setShowUserMenu(false);
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600"
                                        >
                                            <FiLogOut className="mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={onLoginClick}
                                className="hover:text-brand-yellow transition-colors"
                            >
                                Community Join (Sign In)
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="h-16 md:h-20 border-b border-gray-200 bg-white flex items-center relative z-50">
                <div className="container-custom w-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Left Side: Mobile Menu & Logo */}
                        <div className="flex items-center gap-2 lg:gap-0">
                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden text-2xl p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                            </button>

                            {/* Logo */}
                            <Link to="/" className="text-lg md:text-2xl font-bold flex items-center whitespace-nowrap">
                                <span className="text-black">BREW-N-FILL</span>
                                <span className="text-xs align-super ml-1">®</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center px-4">
                            {/* This pushes navigation below logo on smaller screens */}
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center gap-1 md:gap-4">
                            <button
                                onClick={openSearch}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-brand-yellow"
                                aria-label="Search"
                            >
                                <FiSearch className="text-xl" />
                            </button>
                            <button
                                onClick={onWishlistClick}
                                className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-brand-yellow relative"
                                aria-label="Wishlist"
                            >
                                <FiHeart className="text-xl" />
                                {wishlist.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-brand-yellow text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                        {wishlist.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={onCartClick}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-brand-yellow relative"
                                aria-label="Shopping cart"
                            >
                                <FiShoppingCart className="text-xl" />
                                <span className="absolute top-0 right-0 bg-brand-yellow text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                    {getCartCount()}
                                </span>
                            </button>

                            {/* Mobile User Icon - HIDDEN to save space, accessible via menu */}
                            {/* <button className="md:hidden ..."> ... </button> */}

                            {/* Desktop User Icon */}
                            <button
                                onClick={isAuthenticated ? () => setShowUserMenu(!showUserMenu) : onLoginClick}
                                className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-brand-yellow relative"
                                aria-label="User account"
                            >
                                <FiUser className="text-xl" />
                                {isAuthenticated && (
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden lg:flex items-center justify-center mt-4 space-x-6">
                        {navigation.map((item, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={item.href || '#'}
                                    className="text-sm font-medium hover:text-brand-yellow transition-colors flex items-center py-2"
                                >
                                    {item.name}
                                    {item.submenu && <FiChevronDown className="ml-1" />}
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
                                                className="absolute top-full left-0 mt-2 w-56 glass-dark rounded-lg shadow-xl overflow-hidden"
                                            >
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subItem.href}
                                                        className="block px-4 py-3 text-sm text-white hover:bg-brand-yellow hover:text-black transition-colors"
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
            </nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-16 bottom-0 left-0 right-0 bg-white z-40 lg:hidden overflow-y-auto pb-10 border-t border-gray-100"
                    >
                        <div className="container-custom space-y-1 py-4">
                            {/* Mobile User Profile Section */}
                            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                                {isAuthenticated ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-xl font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{user.name}</p>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            onLoginClick();
                                        }}
                                        className="w-full btn-primary py-3"
                                    >
                                        Login / Sign Up
                                    </button>
                                )}
                            </div>

                            {navigation.map((item, index) => (
                                <div key={index} className="border-b border-gray-100 last:border-0">
                                    <div className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                                        <Link
                                            to={item.href || '#'}
                                            className="text-base font-semibold text-gray-800 flex-1"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveDropdown(activeDropdown === index ? null : index);
                                                }}
                                                className="p-2 -mr-2 text-gray-500 hover:text-black"
                                                aria-label="Toggle submenu"
                                            >
                                                <FiChevronDown
                                                    className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`}
                                                />
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
                                                className="overflow-hidden bg-gray-50 rounded-lg mb-2"
                                            >
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subItem.href}
                                                        className="block py-3 px-6 text-sm text-gray-600 hover:text-brand-yellow hover:bg-gray-100 transition-colors border-l-2 border-transparent hover:border-brand-yellow"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Mobile Footer Links */}
                            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                <Link to="#" className="text-sm text-gray-500 hover:text-brand-yellow">Track Order</Link>
                                <Link to="#" className="text-sm text-gray-500 hover:text-brand-yellow">Store Locator</Link>
                                <Link to="#" className="text-sm text-gray-500 hover:text-brand-yellow">Help Center</Link>
                                <Link to="#" className="text-sm text-gray-500 hover:text-brand-yellow">Returns</Link>
                            </div>

                            {isAuthenticated && (
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full mt-6 py-3 text-red-500 font-semibold border border-red-100 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
