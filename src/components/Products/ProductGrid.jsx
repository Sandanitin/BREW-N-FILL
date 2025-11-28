import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import ProductCard from './ProductCard';
import { allProducts, categories } from '../../data/products';

const ProductGrid = () => {
    const [sortBy, setSortBy] = useState('featured');
    const [category, setCategory] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    // Filter and sort products
    const getFilteredProducts = () => {
        let filtered = category === 'All'
            ? allProducts
            : allProducts.filter(p => p.category === category);

        // Sort
        switch (sortBy) {
            case 'price-low':
                return [...filtered].sort((a, b) => a.price - b.price);
            case 'price-high':
                return [...filtered].sort((a, b) => b.price - a.price);
            case 'rating':
                return [...filtered].sort((a, b) => b.rating - a.rating);
            case 'newest':
                return [...filtered].filter(p => p.newArrival);
            default:
                return filtered;
        }
    };

    const products = getFilteredProducts();

    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-2">Our Collection</h2>
                    <p className="text-gray-600">Discover premium coffee roasted to perfection</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-full transition-all ${category === cat
                                    ? 'bg-black text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Filters & Sort */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors"
                    >
                        <FiFilter />
                        <span>Filters</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors cursor-pointer focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found in this category</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
