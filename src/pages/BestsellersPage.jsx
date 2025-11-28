import { motion } from 'framer-motion';
import ProductCard from '../components/Products/ProductCard';
import { allProducts } from '../data/products';

const BestsellersPage = () => {
    // Get top rated and most reviewed products as bestsellers
    const bestsellers = [...allProducts]
        .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
        .slice(0, 8);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-brand-yellow to-brand-yellow-dark overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3
                }}></div>
                <div className="relative container-custom h-full flex items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-6xl font-bold mb-4 text-black">Bestsellers</h1>
                        <p className="text-xl text-gray-900">Customer favorites & top-rated blends</p>
                    </motion.div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white py-12 border-b">
                <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-brand-yellow mb-2">10,000+</h3>
                        <p className="text-gray-600">Happy Customers</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-brand-yellow mb-2">4.8★</h3>
                        <p className="text-gray-600">Average Rating</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-brand-yellow mb-2">50+</h3>
                        <p className="text-gray-600">Awards Won</p>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="container-custom py-16">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-2">Our Bestsellers</h2>
                    <p className="text-gray-600">These are the coffees our customers can't get enough of</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {bestsellers.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>

            {/* Why Bestsellers */}
            <div className="bg-black text-white py-16">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold mb-12 text-center">Why These Are Bestsellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Top Rated</h3>
                            <p className="text-gray-300">Consistently high ratings from our community</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">🔄</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Most Reordered</h3>
                            <p className="text-gray-300">Customers keep coming back for more</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">💬</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Highly Recommended</h3>
                            <p className="text-gray-300">Word of mouth favorites</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestsellersPage;
