import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const YouMayAlsoLike = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const recommendedProducts = [
        { id: 1, name: 'Caramel Macchiato Blend', price: 749, image: '/images/placeholder1.jpg' },
        { id: 2, name: 'Mocha Java Premium', price: 849, image: '/images/placeholder2.jpg' },
        { id: 3, name: 'Breakfast Blend Light Roast', price: 699, image: '/images/placeholder3.jpg' },
        { id: 4, name: 'Sumatra Dark Roast', price: 899, image: '/images/placeholder4.jpg' },
        { id: 5, name: 'House Blend Medium', price: 649, image: '/images/placeholder5.jpg' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-8"
                >
                    You May Also Like
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {recommendedProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-3 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                                    ☕
                                </div>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-brand-yellow transition-colors">
                                {product.name}
                            </h3>
                            <p className="font-bold">₹{product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YouMayAlsoLike;
