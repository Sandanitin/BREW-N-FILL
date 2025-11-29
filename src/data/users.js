// Dummy user data for testing authentication
export const dummyUsers = [
    {
        id: 1,
        name: 'Demo User',
        email: 'demo@brew.com',
        password: 'demo123',
        phone: '9876543210',
        role: 'customer',
        createdAt: '2024-01-15T10:30:00Z',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        phone: '9123456780',
        role: 'customer',
        createdAt: '2024-02-10T14:20:00Z',
    },
    {
        id: 3,
        name: 'Admin User',
        email: 'admin@brew.com',
        password: 'admin123',
        phone: '9999999999',
        role: 'admin',
        createdAt: '2023-12-01T09:00:00Z',
    },
    {
        id: 4,
        name: 'Sarah Wilson',
        email: 'sarah@example.com',
        password: 'sarah123',
        phone: '9876501234',
        role: 'customer',
        createdAt: '2024-03-05T16:45:00Z',
    },
];

// Initialize localStorage with dummy users if not already present
export const initializeDummyUsers = () => {
    const existingUsers = localStorage.getItem('brew-users');
    if (!existingUsers) {
        localStorage.setItem('brew-users', JSON.stringify(dummyUsers));
    }
};
