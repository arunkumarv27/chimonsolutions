/* eslint-disable */
import React from "react";

export default function FeatureSectionTwo() {
    return (
        <>
            <section className="feature-section work-section bg-cover bg-center py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="feature-image-mask img-left">
                            <img
                                src="./featuresectiontwo.jpg"
                                alt="Chimon Solutions Inc IT Consulting"
                                className="feature-image w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-orange-500 uppercase tracking-wide font-bold text-lg mb-2">Empowering Businesses with IT Excellence</h2>
                            <h3 className="text-4xl font-semibold leading-tight md:text-5xl md:leading-tight">
                                Innovating for the Future.
                                <br />
                                <strong className="text-orange-600">Driven by Technology.</strong>
                            </h3>
                            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                                At Chimon Solutions Inc., we are a team of strategists, engineers, and IT consultants transforming
                                businesses with cutting-edge technology. We specialize in AI-driven solutions, cloud infrastructure,
                                and cybersecurity, providing seamless digital transformation strategies.
                                <br /><br />
                                Our mission is to empower enterprises with intelligent automation, scalable cloud solutions, and robust
                                security frameworks, ensuring sustainable growth in a dynamic digital landscape.
                            </p>
                            <a href="/aboutUs" className="mt-6 inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
                                Learn More About Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
