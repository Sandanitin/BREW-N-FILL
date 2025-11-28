import { useState } from 'react';
import { FiGift, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingRewardsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 bg-brand-yellow hover:bg-brand-yellow-dark text-black p-4 rounded-full shadow-2xl z-40 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <FiGift className="text-2xl" />

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-brand-yellow animate-ping opacity-20"></span>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Rewards
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-black"></div>
                </div>
            </motion.button>

            {/* Rewards Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-brand-yellow to-brand-yellow-dark p-6 text-black relative">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
                                >
                                    <FiX className="text-2xl" />
                                </button>
                                <h2 className="text-3xl font-bold mb-2">Rewards Program</h2>
                                <p className="text-sm">Earn points with every purchase!</p>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-6 mb-6">
                                    <p className="text-sm mb-2">Your Rewards Points</p>
                                    <p className="text-5xl font-bold mb-1">1,250</p>
                                    <p className="text-sm text-gray-300">Worth ₹125 in rewards</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <h3 className="font-bold text-lg">How it Works</h3>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Shop & Earn</h4>
                                            <p className="text-sm text-gray-600">Earn 1 point for every ₹10 spent</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Collect Points</h4>
                                            <p className="text-sm text-gray-600">Points accumulate with each purchase</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Redeem Rewards</h4>
                                            <p className="text-sm text-gray-600">Use points for discounts on future orders</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-brand-yellow/10 border border-brand-yellow rounded-lg p-4 mb-6">
                                    <h4 className="font-semibold mb-2">Bonus Offers</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 500 bonus points on your first order</li>
                                        <li>• Double points on your birthday month</li>
                                        <li>• Refer a friend and earn 200 points</li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn-primary w-full"
                                >
                                    Start Earning Rewards
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingRewardsButton;
