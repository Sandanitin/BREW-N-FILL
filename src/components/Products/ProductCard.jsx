import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { useShop } from '../../context/ShopContext';

const ProductCard = ({ product, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { isInWishlist, toggleWishlist, addToCart } = useShop();
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);

    const isFavorite = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product, selectedSize);
    };

    const handleToggleWishlist = () => {
        toggleWishlist(product);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="product-card bg-white rounded-xl overflow-hidden border border-gray-200 group"
        >
            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square bg-gray-100">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-6xl opacity-20">☕</div>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                        onClick={handleAddToCart}
                        className="bg-white text-black p-3 rounded-full hover:bg-brand-yellow transition-colors"
                        aria-label="Add to cart"
                    >
                        <FiShoppingCart className="text-xl" />
                    </button>
                </div>

                {/* Favorite Button */}
                <button
                    onClick={handleToggleWishlist}
                    className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-brand-yellow transition-colors z-10"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <FiHeart
                        className={`text-lg transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'
                            }`}
                    />
                </button>

                {/* Sale Badge */}
                {product.sale && (
                    <div className="absolute top-3 left-3 bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold">
                        SALE
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-brand-yellow transition-colors">
                    {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-brand-yellow text-sm">
                        {'★'.repeat(Math.floor(product.rating || 4))}
                        {'☆'.repeat(5 - Math.floor(product.rating || 4))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews || 0})</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            ₹{product.originalPrice}
                        </span>
                    )}
                </div>

                {/* Size Selector */}
                {product.sizes && (
                    <div className="mb-3">
                        <p className="text-xs text-gray-600 mb-2">Size:</p>
                        <div className="flex gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-3 py-1 text-xs border rounded-lg transition-all ${selectedSize === size
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-300 hover:border-black'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add to Cart Button */}
                <button onClick={handleAddToCart} className="w-full btn-secondary py-2 text-sm">
                    ADD TO BAG
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
