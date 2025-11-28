import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="pt-32 pb-16">
            {/* Hero */}
            <div className="relative h-[400px] mb-16">
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80"
                    alt="Coffee Plantation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Our Story</h1>
                </div>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Born from Passion</h2>
                        <p className="text-gray-600 mb-4">
                            BREW-N-FILL started with a simple mission: to bring the world's finest coffee beans to Indian homes. We believe that coffee is not just a beverage, but a ritual, a moment of pause, and a source of inspiration.
                        </p>
                        <p className="text-gray-600">
                            Our journey began in the lush hills of Coorg, where we discovered the magic of shade-grown Indian coffee. Today, we partner with sustainable farms across the globe to curate a selection that celebrates diversity in flavor and origin.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1442512595331-e89e7385a861?w=800&q=80"
                            alt="Coffee Brewing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold mb-12">The Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
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
