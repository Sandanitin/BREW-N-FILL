import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaApple, FaGooglePlay, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [showMore, setShowMore] = useState(false);

    const footerSections = [
        {
            title: 'Company',
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

    const topCategories = [
        'T-shirts', 'Shirts', 'Joggers', 'Shorts', 'Trousers', 'Sweatshirts & Hoodies',
        'Sweaters', 'Bags', 'Accessories', 'Belts', 'Blazers', 'Boxers', 'Cargo Pants',
        'Chinos', 'Co-ords', 'Hoodies', 'Jackets', 'Jeans', 'Night Suit & Pyjamas',
        'Overshirt', 'Perfumes', 'Shoes', 'Sunglasses'
    ];

    const popularSearches = [
        'shirts for men', 'jackets for men', 't-shirts for men', 'cargo', 'baggy jeans',
        'mens jeans', 'polo t-shirts', 'hoodie', 'joggers for men', 'baggy jeans mens',
        'straight fit jeans', 'printed shirts for men', 'varsity jacket', 'formal pants for men',
        'polo t-shirts for men', 'formal trousers for men', 'sweatshirt', 'white shirt for men',
        'black shirt', 'korean pants', 'baggy pants', 'trousers for men', 'cargo jeans',
        'oversized shirt', 'denim', 'linen pants', 'crochet shirt', 'old money outfits',
        'branded shirts for men', 'boutiques near me', 'check shirt for men', 'casual shirts for men',
        'chinos for men', 'formal shirts for men', 'printed shirts', 'mens tshirt',
        'linen shirt', 'denim jeans', 'baggy pants men', 'varsity jacket mens',
        'black t-shirt men', 'club wear for men'
    ];

    const popularAccessories = [
        'Ravenwood Braided Bracelet', 'EternaWrap Black Braclet', 'Obsidian Blue Braided Bracelet',
        'Rustic Revolve Brown Braided Braclet', 'Divine Skull Cross Chain', 'Bar of Luxe Chain',
        'Rogue Bullet Pendant', "Pirate's Anchor Steel Chain", 'Debonair Black Bracelet',
        'Solid Block SS Chain', 'Hyphenated Weave Braided Bracelet', 'Metal Black Trio Bracelet',
        'Abstract Trio Metal Bracelet', 'Rattle Square Chain', 'Blacksmith Nail Braided Bracelet',
        'Duo Gold & Silver SS Chain', 'Rover Wrap Black Braclet', 'Mafia SS Chain',
        'Nob Nail Edge Braided Bracelet', 'Hexa Beads Bracelet', 'Bold Swirl Bracelet',
        'Grey Cuboid SS Chain', 'Midnight Eclipse Braid Bracelet', 'Black Cuboid SS Chain',
        'Wavecrest Dollar Brown Bracelet'
    ];

    return (
        <footer className="bg-[#F5F3EF] text-gray-800 pt-10">
            {/* SEO Text Section */}
            <div className="container-custom mb-10">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 hover:text-brand-yellow transition-colors"
                >
                    More about shopping At BREW-N-FILL
                    {showMore ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                <div className={`text-xs text-gray-600 leading-relaxed space-y-4 transition-all duration-500 overflow-hidden ${showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p>
                        <strong>The BREW-N-FILL Shopping Experience – Where Digital Meets Style</strong><br />
                        At BREW-N-FILL, we redefine the modern shopping experience, merging seamless digital convenience with engaging in-store interactions. Whether you're shopping online or visiting our immersive retail spaces, we ensure a smooth, stylish, and hassle-free journey that caters to today's fashion-forward individuals.
                    </p>
                    <p>
                        Our direct-to-consumer (D2C) approach eliminates traditional retail barriers, giving you complete control over how and where you engage with our trend-driven collections. From effortless online browsing to hands-on in-store exploration, BREW-N-FILL lets you shop on your terms, at your pace.
                    </p>

                    <div>
                        <strong>Shop Anytime, Anywhere – The Digital Shopping Experience</strong><br />
                        🛍️ 24/7 Accessibility – Fashion at Your Fingertips: Gone are the days of restrictive store hours. BREW-N-FILL online shopping allows you to browse, select, and purchase from our curated collections anytime, anywhere. Whether you're searching for sharp formalwear, contemporary casual styles, or trend-forward accessories, our website provides an intuitive, fast, and stylish experience.
                    </div>

                    <div>
                        <strong>Key Features of BREW-N-FILL Online Shopping:</strong>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>User-Friendly Navigation – Explore categories effortlessly, from joggers and co-ords to sunglasses and accessories.</li>
                            <li>AI-Powered Recommendations – Get personalized outfit suggestions based on your style preferences.</li>
                            <li>Detailed Product Views – High-quality images, 360-degree views, and fabric close-ups ensure zero guesswork when shopping online.</li>
                            <li>Secure & Easy Checkout – Multiple payment options, fast processing, and seamless checkout make buying a breeze.</li>
                            <li>Exclusive Online Drops – Stay ahead of trends with limited-edition online-only collections.</li>
                        </ul>
                    </div>

                    <p>
                        <strong>Beyond the Screen – The BREW-N-FILL In-Store Experience</strong><br />
                        🏬 Feel the Fabric, Perfect the Fit – Hands-On Shopping: For those who love a tactile experience, BREW-N-FILL stores provide an immersive way to engage with premium fabrics, tailored fits, and contemporary aesthetics. Step into a space where style meets innovation, allowing you to explore textures, colors, and silhouettes in person.
                    </p>

                    <div>
                        <strong>Why Visit a BREW-N-FILL Store?</strong>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Try Before You Buy – Experience the perfect fit and see how our clothing moves with you.</li>
                            <li>Expert Styling Assistance – Our in-store fashion advisors help curate looks that suit your personality and occasion.</li>
                            <li>Exclusive In-Store Drops – Discover limited-edition releases and early access to upcoming collections.</li>
                            <li>Instant Gratification – No waiting for deliveries—walk in, shop, and step out with your favorite picks.</li>
                        </ul>
                    </div>

                    <p>
                        <strong>Omnichannel Shopping – The Best of Both Worlds</strong><br />
                        🔄 Seamless Shopping with BREW-N-FILL's Unified Retail Strategy: Our omnichannel approach ensures you can shop whenever, wherever, and however you prefer. Whether you love the convenience of online shopping or prefer the tactile experience of in-store purchases, BREW-N-FILL brings you the best of both worlds.
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="border-t border-gray-300 py-10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Top Categories */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">TOP CATEGORIES</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {topCategories.map((cat, i) => (
                                    <Link key={i} to="#" className="text-xs text-gray-600 hover:text-black hover:underline">
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Popular Searches */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Popular Searches</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {popularSearches.map((term, i) => (
                                    <Link key={i} to="#" className="text-xs text-gray-600 hover:text-black hover:underline">
                                        {term}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Most Popular Accessories */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">Most Popular Accessories</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {popularAccessories.map((acc, i) => (
                                    <Link key={i} to="#" className="text-xs text-gray-600 hover:text-black hover:underline">
                                        {acc}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-white py-10 border-t border-gray-200">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"><FaFacebook size={16} /></a>
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"><FaInstagram size={16} /></a>
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"><FaYoutube size={16} /></a>
                                <a href="#" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"><FaTwitter size={16} /></a>
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

                        {/* Download App */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-4">Download App</h4>
                            <div className="space-y-2">
                                <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors w-fit">
                                    <FaApple size={20} />
                                    <div className="text-left">
                                        <div className="text-[9px] leading-tight">Download on the</div>
                                        <div className="text-xs font-semibold">App Store</div>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors w-fit">
                                    <FaGooglePlay size={18} />
                                    <div className="text-left">
                                        <div className="text-[9px] leading-tight">GET IT ON</div>
                                        <div className="text-xs font-semibold">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-white border-t border-gray-200 py-5">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-xs text-gray-600">
                            © 2025 BREW-N-FILL. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="text-xs text-gray-600">We Accept:</span>
                            <div className="flex gap-2 flex-wrap">
                                {['VISA', 'MasterCard', 'UPI', 'PayPal', 'Amex'].map((payment) => (
                                    <div key={payment} className="px-2.5 py-1 border border-gray-300 rounded text-[10px] font-semibold text-gray-700">
                                        {payment}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
