import { useState } from 'react';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, updateCartQuantity, removeFromCart, getCartTotal, clearCart } = useShop();

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Cart Sidebar */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <FiShoppingBag className="text-brand-yellow" />
                            Shopping Cart
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <FiX className="text-2xl" />
                        </button>
                    </div>
                    {cart.length > 0 && (
                        <p className="text-sm text-gray-600 mt-2">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)} items in cart
                        </p>
                    )}
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cart.length === 0 ? (
                        <div className="text-center py-12">
                            <FiShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
                            <p className="text-sm text-gray-400">Add some delicious coffee to get started!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={`${item.id}-${item.size}`}
                                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                                >
                                    {/* Product Image */}
                                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-3xl">☕</span>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 mb-2">Size: {item.size}</p>
                                        <p className="font-bold text-brand-yellow">₹{item.price}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="text-red-500 hover:text-red-700 transition-colors p-1"
                                        >
                                            <FiTrash2 />
                                        </button>

                                        <div className="flex items-center gap-2 bg-white rounded-full border border-gray-300">
                                            <button
                                                onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100 rounded-l-full transition-colors"
                                            >
                                                <FiMinus className="text-xs" />
                                            </button>
                                            <span className="text-sm font-semibold w-8 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 rounded-r-full transition-colors"
                                            >
                                                <FiPlus className="text-xs" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {cart.length > 0 && (
                                <button
                                    onClick={clearCart}
                                    className="text-sm text-red-500 hover:text-red-700 transition-colors w-full text-center py-2"
                                >
                                    Clear Cart
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Subtotal:</span>
                            <span className="text-2xl font-bold text-brand-yellow">
                                ₹{getCartTotal().toFixed(2)}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">
                            Shipping and taxes calculated at checkout
                        </p>
                        <button className="btn-primary w-full text-lg">
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full mt-3 px-6 py-3 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default CartModal;
