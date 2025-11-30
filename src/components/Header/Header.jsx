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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-sm' : 'bg-white'
            }`}>
            {/* Top Utility Bar - House of Chikankari Style */}
            <div className="hidden lg:block border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex justify-between items-center h-10 text-xs">
                        {/* Left Side - Track Order & Country */}
                        <div className="flex items-center gap-4">
                            <Link to="#" className="flex items-center gap-1.5 text-gray-700 hover:text-black transition-colors font-medium">
                                <FiMapPin className="text-sm" />
                                TRACK ORDER
                            </Link>
                            <button className="flex items-center gap-1.5 text-gray-700 hover:text-black transition-colors font-medium">
                                <span className="text-base">🇮🇳</span>
                                India
                            </button>
                        </div>

                        {/* Right Side - User Account */}
                        <div className="flex items-center gap-4">
                            {isAuthenticated ? (
                                <div className="relative">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowUserMenu(!showUserMenu);
                                        }}
                                        className="flex items-center gap-1.5 text-gray-700 hover:text-black transition-colors font-medium"
                                    >
                                        <FiUser className="text-sm" />
                                        {user.name}
                                        <FiChevronDown className={`text-xs transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {showUserMenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
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
                                    className="text-gray-700 hover:text-black transition-colors font-medium"
                                >
                                    Community Join (Sign In)
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Logo Centered */}
            <div className="border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Left: Mobile Menu Button (Mobile Only) */}
                        <button
                            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                        </button>

                        {/* Center: Logo - Always Centered */}
                        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none flex items-center group">
                            <span className="text-xl lg:text-2xl font-semibold tracking-tight text-black group-hover:text-gray-700 transition-colors">
                                BREW-N-FILL
                            </span>
                            <span className="text-[10px] align-super ml-0.5 text-gray-500">®</span>
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
                                onClick={onWishlistClick}
                                className="hidden md:flex w-10 h-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative group"
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
                            <button
                                onClick={isAuthenticated ? (e) => { e.stopPropagation(); setShowUserMenu(!showUserMenu); } : onLoginClick}
                                className="hidden lg:flex w-10 h-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative group"
                                aria-label="User account"
                            >
                                <FiUser className="text-lg text-gray-700 group-hover:text-black group-hover:scale-110 transition-transform" />
                                {isAuthenticated && (
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></span>
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
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed top-0 bottom-0 left-0 w-[85%] max-w-sm bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
                        >
                            {/* Mobile Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
                                <Link to="/" className="text-xl font-semibold tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>
                                    BREW-N-FILL<span className="text-[10px] align-super ml-0.5 text-gray-500">®</span>
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
