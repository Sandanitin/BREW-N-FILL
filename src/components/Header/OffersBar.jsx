import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const OffersBar = () => {
    const offers = [
        "Free Shipping on Orders Over ₹999",
        "Get 20% Off on Your First Purchase",
        "Buy 2 Get 1 Free on Selected Items",
        "Join Our Loyalty Program & Earn Rewards",
    ];

    const [currentOffer, setCurrentOffer] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentOffer((prev) => (prev + 1) % offers.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [offers.length]);

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentOffer((prev) => (prev + 1) % offers.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <div className="bg-brand-yellow text-black py-3 relative overflow-hidden">
            <div className="container-custom flex items-center justify-between">
                <button
                    onClick={goToPrevious}
                    className="hover:scale-110 transition-transform z-10"
                    aria-label="Previous offer"
                >
                    <FiChevronLeft className="text-xl" />
                </button>

                <div className="flex-1 flex justify-center overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentOffer}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="text-sm font-semibold text-center absolute"
                        >
                            {offers[currentOffer]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={goToNext}
                    className="hover:scale-110 transition-transform z-10"
                    aria-label="Next offer"
                >
                    <FiChevronRight className="text-xl" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-2">
                {offers.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentOffer ? 1 : -1);
                            setCurrentOffer(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentOffer ? 'bg-black w-6' : 'bg-black/30'
                            }`}
                        aria-label={`Go to offer ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OffersBar;
