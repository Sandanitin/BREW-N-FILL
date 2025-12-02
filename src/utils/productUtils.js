import { allProducts } from '../data/products';
import { equipmentProducts } from '../data/equipment';
import { merchandiseProducts } from '../data/merchandise';
import { giftingProducts } from '../data/gifting';

// Combine all products into a single array
export const getAllProducts = () => {
    return [
        ...allProducts,
        ...equipmentProducts,
        ...merchandiseProducts,
        ...giftingProducts
    ];
};

export const getProductById = (id) => {
    const products = getAllProducts();
    // Handle both string and number IDs
    return products.find(p => String(p.id) === String(id));
};
