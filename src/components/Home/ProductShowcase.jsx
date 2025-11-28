import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductShowcase = () => {
    const products = [
        {
            id: 1,
            name: 'Single Origin Coffee',
            description: 'Premium beans from Ethiopian highlands',
            image: '/images/placeholder-single-origin.jpg',
            textColor: 'text-white',
            bgColor: 'from-gray-900 to-gray-800',
        },
        {
            id: 2,
            name: 'Coffee Capsules',
            description: 'Espresso perfection in every pod',
            image: '/images/placeholder-capsules.jpg',
            textColor: 'text-black',
            bgColor: 'from-brand-yellow-light to-brand-yellow',
        },
        {
            id: 3,
            name: 'Brewing Equipment',
            description: 'Professional-grade coffee makers',
            image: '/images/placeholder-equipment.jpg',
            textColor: 'text-white',
            bgColor: 'from-black to-gray-900',
        },
        {
            id: 4,
            name: 'Merchandise',
            description: 'Premium coffee accessories',
            image: '/images/placeholder-merchandise.jpg',
            textColor: 'text-black',
            bgColor: 'from-gray-100 to-white',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Grid Layout - Apple Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductCard = ({ product, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br ${product.bgColor}`}
        >
            {/* Product Image Placeholder - Using gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-full filter blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        className={`text-4xl font-bold mb-3 ${product.textColor}`}
                    >
                        {product.name}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className={`text-lg ${product.textColor}/80`}
                    >
                        {product.description}
                    </motion.p>
                </div>

                <div className="flex gap-4">
                    <button
                        className={`${product.textColor === 'text-white'
                                ? 'bg-white text-black hover:bg-brand-yellow'
                                : 'bg-black text-white hover:bg-gray-800'
                            } px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                        Buy
                    </button>
                    <button
                        className={`${product.textColor === 'text-white'
                                ? 'border-white text-white hover:bg-white hover:text-black'
                                : 'border-black text-black hover:bg-black hover:text-white'
                            } border-2 px-6 py-3 rounded-full font-semibold transition-all duration-300`}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
    );
};

export default ProductShowcase;
