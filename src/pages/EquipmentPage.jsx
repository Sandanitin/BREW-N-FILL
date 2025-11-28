import React from 'react';

const EquipmentPage = () => {
    return (
        <div className="pt-32 pb-16 container-custom">
            <h1 className="text-4xl font-bold mb-8 text-center">Brewing Equipment</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Elevate your coffee experience with our professional-grade brewing equipment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Item 1 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80"
                            alt="Espresso Machine"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Pro Espresso Machine</h3>
                    <p className="text-gray-500 mb-2">Professional Grade</p>
                    <span className="text-brand-yellow font-bold text-lg">₹45,999</span>
                </div>

                {/* Item 2 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=800&q=80"
                            alt="Pour Over Kit"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Pour Over Kit</h3>
                    <p className="text-gray-500 mb-2">For the Purist</p>
                    <span className="text-brand-yellow font-bold text-lg">₹2,499</span>
                </div>

                {/* Item 3 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                            alt="Coffee Grinder"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Precision Grinder</h3>
                    <p className="text-gray-500 mb-2">Consistent Grind</p>
                    <span className="text-brand-yellow font-bold text-lg">₹4,999</span>
                </div>
            </div>
        </div>
    );
};

export default EquipmentPage;
