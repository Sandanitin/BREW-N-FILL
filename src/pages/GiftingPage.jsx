import { motion } from 'framer-motion';
import { FiGift, FiHeart, FiPackage } from 'react-icons/fi';
import ProductCard from '../components/Products/ProductCard';
import { giftingProducts, giftingOccasions } from '../data/gifting';

const GiftingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-16 md:pt-0">
            {/* Hero - Responsive Height */}
            <div className="relative h-72 md:h-96 bg-gradient-to-br from-brand-yellow-dark to-brand-yellow overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2
                }}></div>
                <div className="relative container-custom h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <FiGift className="text-6xl md:text-8xl text-black mx-auto mb-3 md:mb-4" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-black">Perfect Gifts</h1>
                        <p className="text-base md:text-xl text-gray-900 font-medium">Delight coffee lovers with our curated gift sets</p>
                    </motion.div>
                </div>
            </div>

            {/* Shop by Occasion */}
            <div className="container-custom py-12 md:py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Shop by Occasion</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                    {giftingOccasions.map((occasion, index) => (
                        <motion.div
                            key={occasion.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-36 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md"
                        >
                            <img
                                src={occasion.img}
                                alt={occasion.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                <span className="text-3xl md:text-5xl mb-1 md:mb-2">{occasion.icon}</span>
                                <h3 className="text-base md:text-xl font-bold">{occasion.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gift Sets */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Curated Gift Sets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {giftingProducts.map((gift, index) => (
                        <ProductCard key={gift.id} product={gift} index={index} />
                    ))}
                </div>
            </div>

            {/* Why Gift Coffee */}
            <div className="bg-white py-12 md:py-16">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Why Gift Coffee?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        <div className="text-center">
                            <FiHeart className="text-5xl md:text-6xl text-brand-yellow mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-bold mb-2">Thoughtful & Personal</h3>
                            <p className="text-sm md:text-base text-gray-600">Show you care with a premium, curated experience</p>
                        </div>
                        <div className="text-center">
                            <FiPackage className="text-5xl md:text-6xl text-brand-yellow mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-bold mb-2">Beautifully Packaged</h3>
                            <p className="text-sm md:text-base text-gray-600">Elegant presentation ready to impress</p>
                        </div>
                        <div className="text-center">
                            <FiGift className="text-5xl md:text-6xl text-brand-yellow mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-bold mb-2">Customizable</h3>
                            <p className="text-sm md:text-base text-gray-600">Add personal messages and customize sets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftingPage;
