import React from 'react';

const MerchandisePage = () => {
    return (
        <div className="pt-32 pb-16 container-custom">
            <h1 className="text-4xl font-bold mb-8 text-center">Official Merchandise</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Wear your love for coffee. Exclusive BREW-N-FILL apparel and accessories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Item 1 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                        <img
                            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80"
                            alt="T-Shirt"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Signature Tee</h3>
                    <span className="text-brand-yellow font-bold">₹999</span>
                </div>

                {/* Item 2 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                        <img
                            src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80"
                            alt="Coffee Mug"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Ceramic Mug</h3>
                    <span className="text-brand-yellow font-bold">₹499</span>
                </div>

                {/* Item 3 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                        <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
                            alt="Hoodie"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Cozy Hoodie</h3>
                    <span className="text-brand-yellow font-bold">₹1,999</span>
                </div>

                {/* Item 4 */}
                <div className="group">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                        <img
                            src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80"
                            alt="Tote Bag"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Canvas Tote</h3>
                    <span className="text-brand-yellow font-bold">₹399</span>
                </div>
            </div>
        </div>
    );
};

export default MerchandisePage;
