import { useState } from 'react';
import { FiGift, FiX, FiStar, FiAward, FiTrendingUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingRewardsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Floating Button - Apple-inspired with premium feel */}
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark hover:from-brand-yellow-dark hover:to-brand-yellow text-black p-4 md:p-5 rounded-full shadow-2xl z-40 group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    delay: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                aria-label="Open Rewards Program"
            >
                <FiGift className="text-2xl md:text-3xl relative z-10" />

                {/* Animated pulse ring */}
                <span className="absolute inset-0 rounded-full bg-brand-yellow animate-ping opacity-30"></span>

                {/* Shimmer effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></span>

                {/* Tooltip - Hidden on mobile, Apple-style on desktop */}
                <div className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-xl text-white px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl">
                    Rewards Program
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-[6px] border-transparent border-l-black/90"></div>
                </div>
            </motion.button>

            {/* Rewards Modal - Apple-inspired Premium Design */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-apple"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Header with gradient */}
                            <div className="relative bg-gradient-to-br from-brand-yellow via-brand-yellow-dark to-brand-yellow p-8 md:p-10 text-black overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200 backdrop-blur-sm"
                                    aria-label="Close modal"
                                >
                                    <FiX className="text-xl" />
                                </button>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                            <FiStar className="text-2xl" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Rewards</h2>
                                    </div>
                                    <p className="text-sm md:text-base text-black/70 font-medium">
                                        Earn points with every purchase
                                    </p>
                                </div>
                            </div>

                            {/* Content - Scrollable */}
                            <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                                {/* Points Card */}
                                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white rounded-2xl p-6 md:p-8 mb-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <FiTrendingUp className="text-brand-yellow" />
                                            <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">Your Balance</p>
                                        </div>
                                        <p className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">1,250</p>
                                        <p className="text-sm md:text-base text-gray-400">Worth ₹125 in rewards</p>
                                    </div>
                                </div>

                                {/* How it Works */}
                                <div className="space-y-5 mb-6">
                                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">How it Works</h3>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                                            1
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="font-semibold text-base mb-1.5 text-gray-900">Shop & Earn</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Earn 1 point for every ₹10 spent</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                                            2
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="font-semibold text-base mb-1.5 text-gray-900">Collect Points</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Points accumulate with each purchase</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                                            3
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="font-semibold text-base mb-1.5 text-gray-900">Redeem Rewards</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Use points for discounts on future orders</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bonus Offers */}
                                <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow-light/20 border border-brand-yellow/30 rounded-2xl p-5 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FiAward className="text-brand-yellow-dark text-lg" />
                                        <h4 className="font-semibold text-base text-gray-900">Bonus Offers</h4>
                                    </div>
                                    <ul className="text-sm space-y-2.5 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">✨</span>
                                            <span>500 bonus points on your first order</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">🎂</span>
                                            <span>Double points on your birthday month</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">🤝</span>
                                            <span>Refer a friend and earn 200 points</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn-primary w-full py-4 text-base font-semibold"
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
