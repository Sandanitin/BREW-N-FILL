import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductShowcase = () => {
    const products = [
        {
            id: 1,
            name: 'Single Origin Coffee',
            description: 'Premium beans from Ethiopian highlands',
            image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
            textColor: 'text-white',
            bgColor: 'from-gray-900 to-gray-800',
        },
        {
            id: 2,
            name: 'Coffee Capsules',
            description: 'Espresso perfection in every pod',
            image: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=800&q=80',
            textColor: 'text-black',
            bgColor: 'from-brand-yellow-light to-brand-yellow',
        },
        {
            id: 3,
            name: 'Brewing Equipment',
            description: 'Professional-grade coffee makers',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
            textColor: 'text-white',
            bgColor: 'from-black to-gray-900',
        },
        {
            id: 4,
            name: 'Merchandise',
            description: 'Premium coffee accessories',
            image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
            textColor: 'text-white',
            bgColor: 'from-gray-900 to-black',
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
            {/* Product Image */}
            <div className="absolute inset-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        className={`text-4xl font-bold mb-3 text-white`}
                    >
                        {product.name}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className={`text-lg text-white/90`}
                    >
                        {product.description}
                    </motion.p>
                </div>

                <div className="flex gap-4">
                    <button
                        className={`bg-white text-black hover:bg-brand-yellow px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                        Buy
                    </button>
                    <button
                        className={`border-white text-white hover:bg-white hover:text-black border-2 px-6 py-3 rounded-full font-semibold transition-all duration-300`}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductShowcase;
