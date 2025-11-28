import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../components/Products/ProductCard';
import { allProducts } from '../data/products';

const RoastedCoffeePage = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const categories = [
        { name: 'All Collections', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800' },
        { name: 'Single Origin', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800' },
        { name: 'Blends', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800' },
        { name: 'Capsules', img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800' },
        { name: 'Ready to Brew', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800' },
        { name: 'Value Packs', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <div className="relative h-96 bg-black overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600"
                    alt="Roasted Coffee"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-6xl font-bold mb-4">Roasted Coffee</h1>
                        <p className="text-xl">Premium beans roasted to perfection</p>
                    </motion.div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container-custom py-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={category.img}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                                <h3 className="text-white text-2xl font-bold p-6">{category.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All Products */}
                <h2 className="text-4xl font-bold mb-8">All Roasted Coffee</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoastedCoffeePage;
