import React from 'react';

const CareersPage = () => {
    const jobs = [
        { title: "Head Barista", location: "Mumbai", type: "Full-time" },
        { title: "Digital Marketing Manager", location: "Bangalore", type: "Full-time" },
        { title: "Supply Chain Executive", location: "Coorg", type: "Full-time" },
        { title: "Customer Success Rep", location: "Remote", type: "Part-time" },
    ];

    return (
        <div className="pt-32 pb-16 container-custom">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We're looking for passionate individuals who love coffee and community. Help us build the future of coffee culture in India.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                {jobs.map((job, index) => (
                    <div key={index} className="border border-gray-200 p-6 rounded-xl flex justify-between items-center hover:shadow-md transition-shadow bg-white">
                        <div>
                            <h3 className="font-bold text-lg">{job.title}</h3>
                            <p className="text-gray-500 text-sm">{job.location} • {job.type}</p>
                        </div>
                        <button className="btn-outline px-6 py-2 text-sm">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareersPage;
