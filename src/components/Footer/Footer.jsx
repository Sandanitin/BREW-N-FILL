import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    const footerSections = [
        {
            title: 'GET TO KNOW US',
            links: [
                { name: 'Our Story', href: '#' },
                { name: 'Terms Of Service', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Blogs', href: '#' },
                { name: 'FAQs', href: '#' },
                { name: 'Contact Us', href: '#' },
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
                { name: 'Bestseller', href: '#' },
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

    return (
        <footer className="bg-black text-white">
            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="container-custom py-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-3">Stay Caffeinated with Our Newsletter</h3>
                        <p className="text-gray-400 mb-6">
                            Get the latest updates on new releases, brewing guides, and exclusive offers
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-gray-700 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            BREW-N-FILL<span className="text-xs align-super">®</span>
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Premium coffee roasted with passion, delivered to your doorstep
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                                aria-label="Pinterest"
                            >
                                <FaPinterest />
                            </a>
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold mb-4 text-brand-yellow">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-brand-yellow transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Methods & Copyright */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <span className="text-sm text-gray-400">We Accept:</span>
                            <div className="flex gap-2">
                                {['VISA', 'MasterCard', 'UPI', 'PayPal'].map((payment) => (
                                    <div
                                        key={payment}
                                        className="px-3 py-1 bg-white/10 rounded text-xs font-semibold"
                                    >
                                        {payment}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">
                            © 2025 BREW-N-FILL. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
