import React from 'react';

const LearnPage = () => {
    const articles = [
        {
            title: "The Art of Pour Over",
            category: "Brewing Guide",
            image: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=800&q=80",
            excerpt: "Master the technique of pour-over coffee for a clean, flavorful cup."
        },
        {
            title: "Understanding Roast Levels",
            category: "Coffee Knowledge",
            image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80",
            excerpt: "From light to dark: how roasting affects flavor profiles."
        },
        {
            title: "Indian Coffee History",
            category: "Heritage",
            image: "https://images.unsplash.com/photo-1611162458324-a92ea6416942?w=800&q=80",
            excerpt: "Tracing the roots of coffee cultivation in the hills of India."
        }
    ];

    return (
        <div className="pt-32 pb-16 container-custom">
            <h1 className="text-4xl font-bold mb-4 text-center">Coffee Academy</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Deepen your understanding of coffee, from bean to cup.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">{article.category}</span>
                            <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                            <button className="text-sm font-semibold underline hover:text-brand-yellow transition-colors">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnPage;
