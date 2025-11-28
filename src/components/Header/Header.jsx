import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown, FiMapPin } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext';

const Header = ({ onCartClick, onWishlistClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { getCartCount, wishlist, openSearch } = useShop();

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
            {/* Top Bar - Country Selector & Track Order */}
            <div className="bg-black text-white py-2 text-xs">
                <div className="container-custom flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center hover:text-brand-yellow transition-colors">
                            <FiMapPin className="mr-1" />
                            India
                        </button>
                        <Link to="#" className="hover:text-brand-yellow transition-colors">Track Order</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="#" className="hover:text-brand-yellow transition-colors">Community Join (Sign In)</Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="py-4 border-b border-gray-200">
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-2xl"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>

                        {/* Logo - Centered */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
                            <Link to="/" className="text-2xl font-bold flex items-center">
                                <span className="text-black">BREW-N-FILL</span>
                                <span className="text-xs align-super ml-1">®</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Hidden on Mobile */}
                        <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
                            {/* This pushes navigation below logo on smaller screens */}
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={openSearch}
                                className="hover:text-brand-yellow transition-colors"
                                aria-label="Search"
                            >
                                <FiSearch className="text-xl" />
                            </button>
                            <button
                                onClick={onWishlistClick}
                                className="hover:text-brand-yellow transition-colors relative"
                                aria-label="Wishlist"
                            >
                                <FiHeart className="text-xl" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                        {wishlist.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={onCartClick}
                                className="hover:text-brand-yellow transition-colors relative"
                                aria-label="Shopping cart"
                            >
                                <FiShoppingCart className="text-xl" />
                                <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {getCartCount()}
                                </span>
                            </button>
                            <button className="hover:text-brand-yellow transition-colors" aria-label="User account">
                                <FiUser className="text-xl" />
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-200"
                    >
                        <div className="container-custom py-4 space-y-2">
                            {navigation.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        to={item.href || '#'}
                                        className="block py-2 text-sm font-medium hover:text-brand-yellow transition-colors"
                                        onClick={() => {
                                            if (item.submenu) {
                                                setActiveDropdown(activeDropdown === index ? null : index);
                                            } else {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}
                                    >
                                        {item.name}
                                        {item.submenu && <FiChevronDown className="inline ml-1" />}
                                    </Link>
                                    {item.submenu && activeDropdown === index && (
                                        <div className="pl-4 space-y-1">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.href}
                                                    className="block py-2 text-sm text-gray-600 hover:text-brand-yellow transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
