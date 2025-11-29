// Sample order data for user accounts
export const dummyOrders = {
    1: [ // Demo User's orders
        {
            id: 'ORD-2024-001',
            userId: 1,
            date: '2024-03-15',
            status: 'delivered',
            total: 1798,
            items: [
                {
                    productId: 1,
                    name: 'Arabica Single Origin - Ethiopian Highlands',
                    quantity: 2,
                    size: '500g',
                    price: 899,
                },
            ],
            shippingAddress: {
                name: 'Demo User',
                address: '123 Coffee Lane',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400001',
                phone: '9876543210',
            },
        },
        {
            id: 'ORD-2024-002',
            userId: 1,
            date: '2024-03-20',
            status: 'shipped',
            total: 1698,
            items: [
                {
                    productId: 2,
                    name: 'Premium Espresso Blend',
                    quantity: 1,
                    size: '500g',
                    price: 799,
                },
                {
                    productId: 7,
                    name: 'Cold Brew Blend',
                    quantity: 1,
                    size: '500g',
                    price: 899,
                },
            ],
            shippingAddress: {
                name: 'Demo User',
                address: '123 Coffee Lane',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400001',
                phone: '9876543210',
            },
        },
    ],
    2: [ // John Doe's orders
        {
            id: 'ORD-2024-003',
            userId: 2,
            date: '2024-03-10',
            status: 'delivered',
            total: 899,
            items: [
                {
                    productId: 7,
                    name: 'Cold Brew Blend',
                    quantity: 1,
                    size: '500g',
                    price: 899,
                },
            ],
            shippingAddress: {
                name: 'John Doe',
                address: '456 Brew Street',
                city: 'Bangalore',
                state: 'Karnataka',
                pincode: '560001',
                phone: '9123456780',
            },
        },
    ],
    4: [ // Sarah Wilson's orders
        {
            id: 'ORD-2024-004',
            userId: 4,
            date: '2024-03-18',
            status: 'processing',
            total: 799,
            items: [
                {
                    productId: 2,
                    name: 'Premium Espresso Blend',
                    quantity: 1,
                    size: '250g',
                    price: 799,
                },
            ],
            shippingAddress: {
                name: 'Sarah Wilson',
                address: '789 Espresso Avenue',
                city: 'Delhi',
                state: 'Delhi',
                pincode: '110001',
                phone: '9876501234',
            },
        },
    ],
};

// Get orders for a specific user
export const getUserOrders = (userId) => {
    return dummyOrders[userId] || [];
};

// Get order by ID
export const getOrderById = (orderId) => {
    for (const userOrders of Object.values(dummyOrders)) {
        const order = userOrders.find(o => o.id === orderId);
        if (order) return order;
    }
    return null;
};

// Order statuses
export const orderStatuses = {
    processing: { label: 'Processing', color: 'blue' },
    shipped: { label: 'Shipped', color: 'yellow' },
    delivered: { label: 'Delivered', color: 'green' },
    cancelled: { label: 'Cancelled', color: 'red' },
};
