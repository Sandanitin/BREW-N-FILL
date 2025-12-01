import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerSections = [
        {
            title: 'COMPANY',
            links: [
                { name: 'About Us', href: '/about-us' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Return/Exchange Policy', href: '#' },
                { name: 'Contact Us', href: '/contact-us' },
                { name: 'Sitemap', href: '#' },
                { name: 'Stakeholders', href: '#' },
            ],
        },
        {
            title: 'GET TO KNOW US',
            links: [
                { name: 'Our Story', href: '/about-us' },
                { name: 'Terms Of Service', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Blogs', href: '#' },
                { name: 'FAQs', href: '#' },
                { name: 'Contact Us', href: '/contact-us' },
            ],
        },
        {
            title: 'RETURN / EXCHANGE ORDER',
            links: [
                { name: 'Request A Return', href: '#' },
                { name: 'Shipping & Delivery Policy', href: '#' },
                { name: 'International Orders', href: '#' },
                { name: 'Return & Exchange Policy', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Bestseller', href: '/bestsellers' },
            ],
        },
        {
            title: 'REWARDS & BENEFITS',
            links: [
                { name: 'HoC Rewards', href: '#' },
                { name: 'Refer & Earn', href: '#' },
            ],
        },
    ];

    const popularCategories = [
        'Espresso Beans', 'Cold Brew', 'French Press', 'Pour Over',
        'Coffee Grinders', 'Milk Frothers', 'Travel Mugs', 'Gift Sets'
    ];

    return (
        <footer className="bg-[#F5F3EF] text-gray-800">
            {/* Popular Categories Section */}
            <div className="border-b border-gray-300">
                <div className="container-custom py-8 md:py-10">
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Popular Categories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                        {popularCategories.map((category, index) => (
                            <Link
                                key={index}
                                to="#"
                                className="text-xs text-gray-600 hover:text-black transition-colors py-1"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container-custom py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <img
                            src="/images/image.png"
                            alt="BREW-N-FILL"
                            className="h-12 w-auto object-contain mb-4"
                        />
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Premium coffee roasted with passion, delivered to your doorstep. Experience the finest blends from around the world.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-3 mb-6">
                            <a
                                href="#"
                                className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="YouTube"
                            >
                                <FaYoutube size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={16} />
                            </a>
                        </div>

                        {/* Download App */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Download App</h4>
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                            >
                                <FaApple size={20} />
                                <div className="text-left">
                                    <div className="text-[9px] leading-tight">Download on the</div>
                                    <div className="text-xs font-semibold">App Store</div>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                <FaGooglePlay size={18} />
                                <div className="text-left">
                                    <div className="text-[9px] leading-tight">GET IT ON</div>
                                    <div className="text-xs font-semibold">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-900">
                                {section.title}
                            </h4>
                            <ul className="space-y-2.5">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-xs text-gray-600 hover:text-black transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300">
                <div className="container-custom py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="text-xs text-gray-600">We Accept:</span>
                            <div className="flex gap-2 flex-wrap">
                                {['VISA', 'MasterCard', 'UPI', 'PayPal', 'Amex'].map((payment) => (
                                    <div
                                        key={payment}
                                        className="px-2.5 py-1 bg-white border border-gray-300 rounded text-[10px] font-semibold text-gray-700"
                                    >
                                        {payment}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-xs text-gray-600">
                            © 2025 BREW-N-FILL. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
