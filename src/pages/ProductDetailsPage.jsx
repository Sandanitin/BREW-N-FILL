import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiMinus, FiPlus, FiChevronDown, FiChevronUp, FiShare2, FiTruck, FiRefreshCw, FiShield } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { getProductById } from '../utils/productUtils';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleWishlist, isInWishlist } = useShop();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeAccordion, setActiveAccordion] = useState('details');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProduct = getProductById(id);
        if (foundProduct) {
            setProduct(foundProduct);
            if (foundProduct.sizes && foundProduct.sizes.length > 0) {
                setSelectedSize(foundProduct.sizes[0]);
            }
            setLoading(false);
        } else {
            // Redirect to home if product not found
            navigate('/');
        }
    }, [id, navigate]);

    if (loading || !product) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const isFavorite = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product, selectedSize, quantity);
    };

    const toggleAccordion = (section) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    return (
        <div className="pt-24 pb-16 container-custom min-h-screen">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column - Images */}
                <div className="w-full lg:w-3/5">
                    <div className="flex gap-4">
                        {/* Thumbnails - Hidden on mobile, visible on desktop */}
                        <div className="hidden lg:flex flex-col gap-4 w-24 shrink-0">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-black transition-all">
                                    <img
                                        src={product.image}
                                        alt={`${product.name} view ${i}`}
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative group">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => toggleWishlist(product)}
                                className="absolute top-4 right-4 bg-white/90 p-3 rounded-full hover:bg-brand-yellow transition-colors z-10 shadow-sm"
                            >
                                <FiHeart
                                    className={`text-xl transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Product Info (Sticky) */}
                <div className="w-full lg:w-2/5 lg:sticky lg:top-24 h-fit">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-2xl font-bold">₹{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                            )}
                            {product.sale && (
                                <span className="bg-brand-yellow text-black px-2 py-1 text-xs font-bold rounded">SALE</span>
                            )}
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-brand-yellow">
                                {'★'.repeat(Math.floor(product.rating || 4))}
                                {'☆'.repeat(5 - Math.floor(product.rating || 4))}
                            </div>
                            <span className="text-sm text-gray-500 underline cursor-pointer">{product.reviews || 0} Reviews</span>
                        </div>
                    </div>

                    {/* Size Selector */}
                    {product.sizes && (
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-sm tracking-wide">SIZES</span>
                                <button className="text-xs underline text-gray-500 hover:text-black">SIZE CHART</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[3rem] h-10 px-3 border rounded flex items-center justify-center text-sm font-medium transition-all ${selectedSize === size
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-300 hover:border-black text-gray-700'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="space-y-4 mb-8">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white py-4 font-bold tracking-widest hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                        >
                            <FiShoppingCart /> ADD TO BAG
                        </button>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                            <FiTruck /> Free 1-2 day delivery on 5k+ pincodes
                        </div>
                    </div>

                    {/* Accordions */}
                    <div className="border-t border-gray-200">
                        {/* Details */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion('details')}
                                className="w-full py-4 flex justify-between items-center font-bold text-sm tracking-wide"
                            >
                                DETAILS
                                {activeAccordion === 'details' ? <FiMinus /> : <FiPlus />}
                            </button>
                            <AnimatePresence>
                                {activeAccordion === 'details' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-gray-600 text-sm leading-relaxed">
                                            <p className="mb-4">{product.description}</p>
                                            {product.features && (
                                                <ul className="list-disc pl-5 space-y-1">
                                                    {product.features.map((feature, idx) => (
                                                        <li key={idx}>{feature}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                                                <p><span className="font-semibold">Category:</span> {product.category}</p>
                                                <p><span className="font-semibold">SKU:</span> {product.id}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Reviews */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion('reviews')}
                                className="w-full py-4 flex justify-between items-center font-bold text-sm tracking-wide"
                            >
                                REVIEWS
                                {activeAccordion === 'reviews' ? <FiMinus /> : <FiPlus />}
                            </button>
                            <AnimatePresence>
                                {activeAccordion === 'reviews' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-gray-600 text-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-2xl font-bold text-black">{product.rating}</span>
                                                <div className="flex text-brand-yellow text-sm">
                                                    {'★'.repeat(Math.floor(product.rating || 4))}
                                                    {'☆'.repeat(5 - Math.floor(product.rating || 4))}
                                                </div>
                                            </div>
                                            <p>Based on {product.reviews} reviews</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Delivery */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion('delivery')}
                                className="w-full py-4 flex justify-between items-center font-bold text-sm tracking-wide"
                            >
                                DELIVERY
                                {activeAccordion === 'delivery' ? <FiMinus /> : <FiPlus />}
                            </button>
                            <AnimatePresence>
                                {activeAccordion === 'delivery' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-gray-600 text-sm">
                                            <div className="mb-3">
                                                <p className="font-semibold mb-1 flex items-center gap-2"><FiTruck /> Standard Delivery</p>
                                                <p>Free shipping on orders over ₹999. Delivered within 3-5 business days.</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold mb-1">Express Delivery</p>
                                                <p>Available at checkout for select pincodes.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Returns */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion('returns')}
                                className="w-full py-4 flex justify-between items-center font-bold text-sm tracking-wide"
                            >
                                RETURNS
                                {activeAccordion === 'returns' ? <FiMinus /> : <FiPlus />}
                            </button>
                            <AnimatePresence>
                                {activeAccordion === 'returns' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-gray-600 text-sm">
                                            <ul className="list-decimal pl-5 space-y-2">
                                                <li>Hassle-free returns within 7 days under specific product and promotion conditions.</li>
                                                <li>Refunds for prepaid orders revert to the original payment method.</li>
                                                <li>Report defective items within 24 hours of delivery.</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
