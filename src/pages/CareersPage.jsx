import React from 'react';

const CareersPage = () => {
    const jobs = [
        { title: "Head Barista", location: "Mumbai", type: "Full-time" },
        { title: "Digital Marketing Manager", location: "Bangalore", type: "Full-time" },
        { title: "Supply Chain Executive", location: "Coorg", type: "Full-time" },
        { title: "Customer Success Rep", location: "Remote", type: "Part-time" },
    ];

    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-16 container-custom">
            <div className="text-center mb-8 md:mb-16 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Join Our Team</h1>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                    We're looking for passionate individuals who love coffee and community. Help us build the future of coffee culture in India.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                {jobs.map((job, index) => (
                    <div key={index} className="border border-gray-200 p-5 md:p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-md transition-shadow bg-white gap-4">
                        <div>
                            <h3 className="font-bold text-lg md:text-xl mb-1">{job.title}</h3>
                            <p className="text-gray-500 text-sm">{job.location} • {job.type}</p>
                        </div>
                        <button className="btn-outline w-full sm:w-auto px-6 py-2.5 text-sm font-semibold">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareersPage;
