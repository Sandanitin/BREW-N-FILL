import { useState } from 'react';
import { FiGift, FiX, FiStar } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingRewardsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Floating Button - Improved for mobile */}
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-brand-yellow hover:bg-yellow-500 text-black p-3 md:p-4 rounded-full shadow-2xl z-40 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                aria-label="Open Rewards Program"
            >
                <FiGift className="text-xl md:text-2xl" />

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-brand-yellow animate-ping opacity-20"></span>

                {/* Tooltip - Hidden on mobile */}
                <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Rewards Program
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-black"></div>
                </div>
            </motion.button>

            {/* Rewards Modal - Fixed Centering */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-brand-yellow to-yellow-500 p-4 md:p-6 text-black relative shrink-0">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-3 right-3 md:top-4 md:right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
                                    aria-label="Close modal"
                                >
                                    <FiX className="text-xl md:text-2xl" />
                                </button>
                                <div className="flex items-center gap-2 mb-2">
                                    <FiStar className="text-2xl md:text-3xl" />
                                    <h2 className="text-2xl md:text-3xl font-bold">Rewards Program</h2>
                                </div>
                                <p className="text-xs md:text-sm">Earn points with every purchase!</p>
                            </div>

                            {/* Content - Scrollable */}
                            <div className="p-4 md:p-6 overflow-y-auto">
                                {/* Points Card */}
                                <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-4 md:p-6 mb-4 md:mb-6">
                                    <p className="text-xs md:text-sm mb-1 md:mb-2">Your Rewards Points</p>
                                    <p className="text-4xl md:text-5xl font-bold mb-1">1,250</p>
                                    <p className="text-xs md:text-sm text-gray-300">Worth ₹125 in rewards</p>
                                </div>

                                {/* How it Works */}
                                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                                    <h3 className="font-bold text-base md:text-lg">How it Works</h3>

                                    <div className="flex gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg md:text-xl">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm md:text-base mb-1">Shop & Earn</h4>
                                            <p className="text-xs md:text-sm text-gray-600">Earn 1 point for every ₹10 spent</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg md:text-xl">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm md:text-base mb-1">Collect Points</h4>
                                            <p className="text-xs md:text-sm text-gray-600">Points accumulate with each purchase</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg md:text-xl">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm md:text-base mb-1">Redeem Rewards</h4>
                                            <p className="text-xs md:text-sm text-gray-600">Use points for discounts on future orders</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bonus Offers */}
                                <div className="bg-brand-yellow/10 border border-brand-yellow rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                                    <h4 className="font-semibold text-sm md:text-base mb-2">Bonus Offers</h4>
                                    <ul className="text-xs md:text-sm space-y-1 text-gray-700">
                                        <li>✨ 500 bonus points on your first order</li>
                                        <li>🎂 Double points on your birthday month</li>
                                        <li>🤝 Refer a friend and earn 200 points</li>
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn-primary w-full py-3 text-sm md:text-base"
                                >
                                    Start Earning Rewards
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingRewardsButton;
