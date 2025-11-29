import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-16">
            {/* Hero */}
            <div className="relative h-[300px] md:h-[400px] mb-12 md:mb-16">
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80"
                    alt="Coffee Plantation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
                </div>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Born from Passion</h2>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            BREW-N-FILL started with a simple mission: to bring the world's finest coffee beans to Indian homes. We believe that coffee is not just a beverage, but a ritual, a moment of pause, and a source of inspiration.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base">
                            Our journey began in the lush hills of Coorg, where we discovered the magic of shade-grown Indian coffee. Today, we partner with sustainable farms across the globe to curate a selection that celebrates diversity in flavor and origin.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1442512595331-e89e7385a861?w=800&q=80"
                            alt="Coffee Brewing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">The Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="text-center">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-100">
                                    <img
                                        src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : '1580489944761-15a19d654956'}?w=400&q=80`}
                                        alt="Team Member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-lg">Vikram Adithya</h3>
                                <p className="text-gray-500 text-sm">Co-Founder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
