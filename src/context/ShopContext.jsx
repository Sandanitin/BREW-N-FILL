import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ShopContext = createContext();

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within ShopProvider');
    }
    return context;
};

export const ShopProvider = ({ children }) => {
    // Cart state
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('brew-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Wishlist state
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('brew-wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Save to localStorage whenever cart or wishlist changes
    useEffect(() => {
        localStorage.setItem('brew-cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('brew-wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Cart functions
    const addToCart = (product, size = '250g', quantity = 1) => {
        const existingItem = cart.find(
            item => item.id === product.id && item.size === size
        );

        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id && item.size === size
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
            toast.success(`Updated ${product.name} quantity in cart`);
        } else {
            setCart([...cart, { ...product, size, quantity }]);
            toast.success(`${product.name} added to cart!`);
        }
    };

    const removeFromCart = (productId, size) => {
        setCart(cart.filter(item => !(item.id === productId && item.size === size)));
        toast.success('Item removed from cart');
    };

    const updateCartQuantity = (productId, size, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId, size);
            return;
        }
        setCart(cart.map(item =>
            item.id === productId && item.size === size
                ? { ...item, quantity }
                : item
        ));
    };

    const clearCart = () => {
        setCart([]);
        toast.success('Cart cleared');
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    // Wishlist functions
    const addToWishlist = (product) => {
        if (wishlist.find(item => item.id === product.id)) {
            toast.error('Already in wishlist');
            return;
        }
        setWishlist([...wishlist, product]);
        toast.success(`${product.name} added to wishlist!`);
    };

    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter(item => item.id !== productId));
        toast.success('Removed from wishlist');
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId);
    };

    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    // Search functions
    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => {
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    const value = {
        // Cart
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        // Wishlist
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        // Search
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        openSearch,
        closeSearch,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
