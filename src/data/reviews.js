// Product reviews and ratings
export const productReviews = {
    1: [ // Ethiopian Highlands
        {
            id: 1,
            userId: 1,
            userName: 'Demo User',
            rating: 5,
            comment: 'Absolutely love this coffee! The fruity notes are amazing.',
            date: '2024-03-20',
            verified: true,
        },
        {
            id: 2,
            userId: 2,
            userName: 'John Doe',
            rating: 4,
            comment: 'Great coffee, but a bit pricey. Worth it though!',
            date: '2024-03-15',
            verified: true,
        },
    ],
    2: [ // Premium Espresso Blend
        {
            id: 3,
            userId: 4,
            userName: 'Sarah Wilson',
            rating: 5,
            comment: 'Best espresso I\'ve ever made at home. Rich crema every time!',
            date: '2024-03-18',
            verified: true,
        },
    ],
    7: [ // Cold Brew Blend
        {
            id: 4,
            userId: 1,
            userName: 'Demo User',
            rating: 5,
            comment: 'Perfect for cold brew! Smooth, sweet, and no bitterness.',
            date: '2024-03-22',
            verified: true,
        },
        {
            id: 5,
            userId: 2,
            userName: 'John Doe',
            rating: 5,
            comment: 'This is my go-to coffee for summer. Highly recommended!',
            date: '2024-03-10',
            verified: true,
        },
    ],
};

// Get reviews for a specific product
export const getProductReviews = (productId) => {
    return productReviews[productId] || [];
};

// Calculate average rating for a product
export const getAverageRating = (productId) => {
    const reviews = getProductReviews(productId);
    if (reviews.length === 0) return 0;

    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
};
