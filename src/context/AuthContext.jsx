import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { initializeDummyUsers } from '../data/users';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize dummy users and load saved user
    useEffect(() => {
        initializeDummyUsers();
        const savedUser = localStorage.getItem('brew-user');
        const savedToken = localStorage.getItem('brew-token');
        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    // Register new user
    const register = async (userData) => {
        try {
            // Get existing users
            let users = localStorage.getItem('brew-users');
            users = users ? JSON.parse(users) : [];

            // Check if email already exists
            if (users.some(u => u.email === userData.email)) {
                toast.error('Email already registered');
                return { success: false, error: 'Email already exists' };
            }

            // Create new user
            const newUser = {
                id: Date.now(),
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                password: userData.password, // In real app, this would be hashed
                createdAt: new Date().toISOString(),
                role: 'customer'
            };

            // Save to users list
            users.push(newUser);
            localStorage.setItem('brew-users', JSON.stringify(users));

            // Create mock token
            const token = `mock_token_${newUser.id}_${Date.now()}`;

            // Save user and token
            const userWithoutPassword = { ...newUser };
            delete userWithoutPassword.password;

            localStorage.setItem('brew-user', JSON.stringify(userWithoutPassword));
            localStorage.setItem('brew-token', token);
            setUser(userWithoutPassword);

            toast.success('Registration successful! Welcome to BREW-N-FILL!');
            return { success: true, user: userWithoutPassword };
        } catch (error) {
            toast.error('Registration failed. Please try again.');
            return { success: false, error: error.message };
        }
    };

    // Login user
    const login = async (email, password, rememberMe = false) => {
        try {
            // Get users from localStorage
            let users = localStorage.getItem('brew-users');
            users = users ? JSON.parse(users) : [];

            // Find user
            const user = users.find(u => u.email === email && u.password === password);

            if (!user) {
                toast.error('Invalid email or password');
                return { success: false, error: 'Invalid credentials' };
            }

            // Create mock token
            const token = `mock_token_${user.id}_${Date.now()}`;

            // Save user and token
            const userWithoutPassword = { ...user };
            delete userWithoutPassword.password;

            if (rememberMe) {
                localStorage.setItem('brew-user', JSON.stringify(userWithoutPassword));
                localStorage.setItem('brew-token', token);
                localStorage.setItem('brew-remember', 'true');
            } else {
                sessionStorage.setItem('brew-user', JSON.stringify(userWithoutPassword));
                sessionStorage.setItem('brew-token', token);
            }

            setUser(userWithoutPassword);
            toast.success(`Welcome back, ${userWithoutPassword.name}!`);
            return { success: true, user: userWithoutPassword };
        } catch (error) {
            toast.error('Login failed. Please try again.');
            return { success: false, error: error.message };
        }
    };

    // Logout user
    const logout = () => {
        localStorage.removeItem('brew-user');
        localStorage.removeItem('brew-token');
        localStorage.removeItem('brew-remember');
        sessionStorage.removeItem('brew-user');
        sessionStorage.removeItem('brew-token');
        setUser(null);
        toast.success('Logged out successfully');
    };

    // Update user profile
    const updateProfile = (updates) => {
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem('brew-user', JSON.stringify(updatedUser));

        // Update in users list
        let users = localStorage.getItem('brew-users');
        users = users ? JSON.parse(users) : [];
        const userIndex = users.findIndex(u => u.id === user.id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updates };
            localStorage.setItem('brew-users', JSON.stringify(users));
        }

        toast.success('Profile updated successfully');
    };

    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        register,
        login,
        logout,
        updateProfile,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
