import React from 'react';

const WholesalePage = () => {
    return (
        <div className="pt-32 pb-16 container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold mb-6">Partner With Us</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Bring the premium taste of BREW-N-FILL to your cafe, restaurant, or office. We offer competitive wholesale pricing and dedicated support.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-bold">✓</span>
                            <span>Premium Grade Beans</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-bold">✓</span>
                            <span>Barista Training Support</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-bold">✓</span>
                            <span>Custom Blends Available</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Wholesale Inquiry</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Volume (kg)</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none">
                                <option>Less than 10kg</option>
                                <option>10kg - 50kg</option>
                                <option>50kg - 100kg</option>
                                <option>100kg+</option>
                            </select>
                        </div>
                        <button className="w-full btn-primary mt-4">Submit Inquiry</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WholesalePage;
