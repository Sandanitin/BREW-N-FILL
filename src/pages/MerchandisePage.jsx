import React, { useState } from 'react';
import ProductCard from '../components/Products/ProductCard';
import { merchandiseProducts, merchandiseCategories } from '../data/merchandise';

const MerchandisePage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? merchandiseProducts
        : merchandiseProducts.filter(p => p.category === activeCategory);

    return (
        <div className="pt-32 pb-16 container-custom">
            <h1 className="text-4xl font-bold mb-8 text-center">Official Merchandise</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Wear your love for coffee. Exclusive BREW-N-FILL apparel and accessories.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {merchandiseCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? 'bg-black text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </div>
    );
};

export default MerchandisePage;
