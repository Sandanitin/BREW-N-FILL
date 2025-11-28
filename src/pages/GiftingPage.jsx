import { motion } from 'framer-motion';
import { FiGift, FiHeart, FiPackage } from 'react-icons/fi';

const GiftingPage = () => {
    const giftSets = [
        {
            name: 'Coffee Lover\'s Starter Kit',
            price: 1999,
            image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800',
            items: ['3 Premium Blends', 'French Press', 'Travel Mug']
        },
        {
            name: 'Executive Gift Hamper',
            price: 3999,
            image: 'https://images.unsplash.com/photo-1549298222-1c31e8e8c3c8?w=800',
            items: ['5 Single Origins', 'Burr Grinder', 'Ceramic Cups Set']
        },
        {
            name: 'Holiday Special Box',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800',
            items: ['4 Festive Blends', 'Coffee Scoop', 'Recipe Book']
        },
        {
            name: 'Corporate Gift Set',
            price: 4999,
            image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800',
            items: ['6 Premium Coffees', 'Espresso Machine', 'Branded Merchandise']
        },
    ];

    const occasions = [
        { name: 'Birthday', icon: '🎂', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600' },
        { name: 'Anniversary', icon: '💑', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600' },
        { name: 'Corporate', icon: '💼', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600' },
        { name: 'Festivals', icon: '🎉', img: 'https://images.unsplash.com/photo-1482523838543-5104d51eb9f5?w=600' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="relative h-96 bg-gradient-to-br from-brand-yellow-dark to-brand-yellow overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2
                }}></div>
                <div className="relative container-custom h-full flex items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <FiGift className="text-8xl text-black mx-auto mb-4" />
                        <h1 className="text-6xl font-bold mb-4 text-black">Perfect Gifts</h1>
                        <p className="text-xl text-gray-900">Delight coffee lovers with our curated gift sets</p>
                    </motion.div>
                </div>
            </div>

            {/* Shop by Occasion */}
            <div className="container-custom py-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Shop by Occasion</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {occasions.map((occasion, index) => (
                        <motion.div
                            key={occasion.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={occasion.img}
                                alt={occasion.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                <span className="text-5xl mb-2">{occasion.icon}</span>
                                <h3 className="text-xl font-bold">{occasion.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gift Sets */}
                <h2 className="text-4xl font-bold mb-8">Curated Gift Sets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {giftSets.map((gift, index) => (
                        <motion.div
                            key={gift.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <div className="relative h-64">
                                <img src={gift.image} alt={gift.name} className="w-full h-full object-cover" />
                                <div className="absolute top-3 right-3 bg-brand-yellow text-black px-3 py-1 rounded-full text-sm font-bold">
                                    Gift Set
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{gift.name}</h3>
                                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                    {gift.items.map((item, i) => (
                                        <li key={i}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold">₹{gift.price}</span>
                                    <button className="btn-primary px-4 py-2 text-sm">Add to Cart</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Why Gift Coffee */}
            <div className="bg-white py-16">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold mb-12 text-center">Why Gift Coffee?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <FiHeart className="text-6xl text-brand-yellow mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Thoughtful & Personal</h3>
                            <p className="text-gray-600">Show you care with a premium, curated experience</p>
                        </div>
                        <div className="text-center">
                            <FiPackage className="text-6xl text-brand-yellow mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Beautifully Packaged</h3>
                            <p className="text-gray-600">Elegant presentation ready to impress</p>
                        </div>
                        <div className="text-center">
                            <FiGift className="text-6xl text-brand-yellow mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Customizable</h3>
                            <p className="text-gray-600">Add personal messages and customize sets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftingPage;
