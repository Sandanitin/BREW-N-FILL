import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';
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

            {/* Cart Sidebar - Fully mobile responsive */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
                {/* Header - Smaller padding on mobile */}
                <div className="p-4 md:p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                            <FiShoppingBag className="text-brand-yellow" />
                            Cart
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Close cart"
                        >
                            <FiX className="text-xl md:text-2xl" />
                        </button>
                    </div>
                    {cart.length > 0 && (
                        <p className="text-xs md:text-sm text-gray-600 mt-2">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)} items in cart
                        </p>
                    )}
                </div>

                {/* Cart Items - Mobile optimized scrolling */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6">
                    {cart.length === 0 ? (
                        <div className="text-center py-12">
                            <FiShoppingBag className="text-5xl md:text-6xl text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-base md:text-lg mb-2">Your cart is empty</p>
                            <p className="text-xs md:text-sm text-gray-400">Add some delicious coffee to get started!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={`${item.id}-${item.size}`}
                                    className="flex gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg"
                                >
                                    {/* Product Image */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-2xl md:text-3xl">☕</span>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-xs md:text-sm line-clamp-2 mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 mb-1 md:mb-2">Size: {item.size}</p>
                                        <p className="font-bold text-sm md:text-base text-brand-yellow">₹{item.price}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="text-red-500 hover:text-red-700 transition-colors p-1"
                                            aria-label="Remove item"
                                        >
                                            <FiTrash2 className="text-sm" />
                                        </button>

                                        <div className="flex items-center gap-1 md:gap-2 bg-white rounded-full border border-gray-300">
                                            <button
                                                onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100 rounded-l-full transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <FiMinus className="text-xs" />
                                            </button>
                                            <span className="text-xs md:text-sm font-semibold w-6 md:w-8 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 rounded-r-full transition-colors"
                                                aria-label="Increase quantity"
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
                                    className="text-xs md:text-sm text-red-500 hover:text-red-700 transition-colors w-full text-center py-2"
                                >
                                    Clear Cart
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer - Mobile optimized */}
                {cart.length > 0 && (
                    <div className="p-4 md:p-6 border-t border-gray-200 bg-gray-50">
                        <div className="flex justify-between items-center mb-3 md:mb-4">
                            <span className="text-base md:text-lg font-semibold">Subtotal:</span>
                            <span className="text-xl md:text-2xl font-bold text-brand-yellow">
                                ₹{getCartTotal().toFixed(2)}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3 md:mb-4">
                            Shipping and taxes calculated at checkout
                        </p>
                        <button className="btn-primary w-full text-sm md:text-base py-2.5 md:py-3">
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full mt-2 md:mt-3 px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 hover:text-black transition-colors"
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
