import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
            </div>

            {/* Content */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-4"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-6"
                >
                    <span className="text-white">Brew Your</span>
                    <br />
                    <span className="gradient-text text-7xl md:text-9xl">Perfect Cup</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    Discover premium coffee from around the world, roasted to perfection for every moment
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="btn-primary text-lg px-8 py-4">
                        Shop Now
                    </button>
                    <button className="btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
                        Explore Collections
                    </button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
