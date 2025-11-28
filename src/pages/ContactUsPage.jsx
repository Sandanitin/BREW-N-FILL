import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactUsPage = () => {
    return (
        <div className="pt-32 pb-16 container-custom">
            <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow-dark">
                                <FiMapPin className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold">Headquarters</h3>
                                <p className="text-gray-600">123 Coffee Street, Koramangala<br />Bangalore, Karnataka 560034</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow-dark">
                                <FiPhone className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold">Phone</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                                <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow-dark">
                                <FiMail className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-gray-600">hello@brewnfill.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none"></textarea>
                        </div>
                        <button className="btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
