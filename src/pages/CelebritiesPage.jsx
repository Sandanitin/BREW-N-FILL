import React from 'react';

const CelebritiesPage = () => {
    return (
        <div className="pt-32 pb-16 container-custom">
            <h1 className="text-4xl font-bold mb-12 text-center">Celebrity Picks</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group overflow-hidden rounded-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                        alt="Celebrity 1"
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Alia's Morning Ritual</h3>
                        <p className="mb-4">"The Ethiopian Single Origin is my absolute favorite way to start the day. It's bright, floral, and wakes me up instantly."</p>
                        <button className="btn-primary w-fit">Shop Alia's Pick</button>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
                        alt="Celebrity 2"
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Ranveer's Energy Boost</h3>
                        <p className="mb-4">"Before a shoot, I need that intense kick. The Italian Dark Roast gives me the energy I need to perform at my best."</p>
                        <button className="btn-primary w-fit">Shop Ranveer's Pick</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CelebritiesPage;
