import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext';
import { searchProducts } from '../../data/products';

const SearchModal = () => {
    const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useShop();
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isSearchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        if (searchQuery.trim()) {
            const searchResults = searchProducts(searchQuery);
            setResults(searchResults);
        } else {
            setResults([]);
        }
    }, [searchQuery]);

    const handleClose = () => {
        closeSearch();
        setResults([]);
    };

    if (!isSearchOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Search Modal Container - Uses Flexbox for perfect centering */}
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 md:pt-24 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-[95%] max-w-2xl pointer-events-auto"
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Search Input */}
                        <div className="p-4 md:p-6 border-b border-gray-200">
                            <div className="flex items-center gap-2 md:gap-3">
                                <FiSearch className="text-xl md:text-2xl text-gray-400" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 text-base md:text-lg outline-none min-w-0"
                                />
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <FiX className="text-xl" />
                                </button>
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-[60vh] md:max-h-96 overflow-y-auto">
                            {searchQuery.trim() === '' ? (
                                <div className="p-8 text-center text-gray-500">
                                    <p>Start typing to search for products...</p>
                                </div>
                            ) : results.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">
                                    <p>No products found for "{searchQuery}"</p>
                                    <p className="text-sm mt-2">Try different keywords</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {results.map((product) => (
                                        <div
                                            key={product.id}
                                            onClick={handleClose}
                                            className="p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center gap-4"
                                        >
                                            {/* Product Image */}
                                            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                {product.image ? (
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-2xl">☕</span>
                                                )}
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1">
                                                <h3 className="font-semibold line-clamp-1">{product.name}</h3>
                                                <p className="text-sm text-gray-600 line-clamp-1">
                                                    {product.description}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="font-bold text-brand-yellow">₹{product.price}</span>
                                                    {product.originalPrice && (
                                                        <span className="text-sm text-gray-400 line-through">
                                                            ₹{product.originalPrice}
                                                        </span>
                                                    )}
                                                    {product.sale && (
                                                        <span className="text-xs bg-brand-yellow text-black px-2 py-0.5 rounded-full font-semibold">
                                                            SALE
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="text-right">
                                                <div className="flex items-center text-brand-yellow text-sm">
                                                    {'★'.repeat(Math.floor(product.rating))}
                                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {results.length > 0 && (
                            <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-600">
                                Found {results.length} product{results.length !== 1 ? 's' : ''}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SearchModal;
