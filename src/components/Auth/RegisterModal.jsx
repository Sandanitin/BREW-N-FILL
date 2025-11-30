import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiPhone, FiCheck } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { register } = useAuth();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, label: '', color: '' };

        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;

        const labels = ['Weak', 'Fair', 'Good', 'Strong'];
        const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];

        return {
            strength,
            label: labels[strength - 1] || '',
            color: colors[strength - 1] || ''
        };
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        const result = await register(formData);
        setIsLoading(false);

        if (result.success) {
            onClose();
            setFormData({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                agreeToTerms: false,
            });
            setErrors({});
        }
    };

    const handleClose = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false,
        });
        setErrors({});
        setShowPassword(false);
        setShowConfirmPassword(false);
        onClose();
    };

    const passwordStrength = getPasswordStrength(formData.password);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
                {/* Backdrop with Apple-style blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-apple"
                    onClick={handleClose}
                />

                {/* Modal - Apple-inspired design */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200/80 text-gray-500 hover:text-gray-700 transition-all duration-200"
                        aria-label="Close"
                    >
                        <FiX className="text-xl" />
                    </button>

                    {/* Content */}
                    <div className="p-10 overflow-y-auto max-h-[90vh]">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-semibold mb-3 tracking-tight">
                                Join the <span className="gradient-text">Community</span>
                            </h2>
                            <p className="text-gray-500 text-base">
                                Create your account and start earning rewards
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-4 py-4 border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all duration-200 bg-gray-50/50 text-base`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-4 py-4 border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all duration-200 bg-gray-50/50 text-base`}
                                        placeholder="you@example.com"
                                    />
                                </div>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-4 py-4 border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all duration-200 bg-gray-50/50 text-base`}
                                        placeholder="(123) 456-7890"
                                    />
                                </div>
                                {errors.phone && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        {errors.phone}
                                    </motion.p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-14 py-4 border ${errors.password ? 'border-red-400' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all duration-200 bg-gray-50/50 text-base`}
                                        placeholder="Create a password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        {errors.password}
                                    </motion.p>
                                )}
                                {/* Password Strength Indicator */}
                                {formData.password && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-3"
                                    >
                                        <div className="flex gap-1.5 mb-2">
                                            {[1, 2, 3, 4].map((level) => (
                                                <div
                                                    key={level}
                                                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${level <= passwordStrength.strength
                                                            ? passwordStrength.color
                                                            : 'bg-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-600 font-medium">
                                            Password strength: <span className={passwordStrength.strength >= 3 ? 'text-green-600' : 'text-gray-700'}>{passwordStrength.label}</span>
                                        </p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`w-full pl-12 pr-14 py-4 border ${errors.confirmPassword ? 'border-red-400' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all duration-200 bg-gray-50/50 text-base`}
                                        placeholder="Confirm your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showConfirmPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        {errors.confirmPassword}
                                    </motion.p>
                                )}
                            </div>

                            {/* Terms & Conditions */}
                            <div className="pt-2">
                                <label className="flex items-start cursor-pointer group">
                                    <div className="relative flex items-center justify-center mt-0.5">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded-md border-gray-300 text-brand-yellow focus:ring-brand-yellow/50 cursor-pointer"
                                        />
                                        {formData.agreeToTerms && (
                                            <FiCheck className="absolute text-black text-sm pointer-events-none" />
                                        )}
                                    </div>
                                    <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors leading-relaxed">
                                        I agree to the{' '}
                                        <a href="#" className="text-black font-medium hover:underline">
                                            Terms & Conditions
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="text-black font-medium hover:underline">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>
                                {errors.agreeToTerms && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-2 ml-1"
                                    >
                                        {errors.agreeToTerms}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary py-4 text-base font-semibold mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Creating Account...
                                    </span>
                                ) : 'Create Account'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Already a member?</span>
                            </div>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <button
                                onClick={onSwitchToLogin}
                                className="text-base font-semibold text-black hover:text-gray-700 transition-colors inline-flex items-center gap-2 group"
                            >
                                Sign in to your account
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default RegisterModal;
