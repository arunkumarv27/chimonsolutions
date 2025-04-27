/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

export default function FullScreenBanner() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    const handleContactClick = () => {
        router.push("/contactus");
    };

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500 px-6 py-20 text-center">
<motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={!isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="max-w-3xl relative z-10"
            >

                <p className="text-sm font-semibold tracking-wide uppercase text-blue-900">Why Choose Us</p>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-500 mt-2">
                    Industry Expertise
                </h1>
                <h2 className="text-3xl sm:text-5xl font-light text-blue-400 mt-2">
                    Combined With Technical Excellence
                </h2>
                <p className="text-lg text-blue-300 mt-4">
                    Our team brings decades of experience across multiple industries, delivering solutions that drive real business value.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={!isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.5 }}
                    className=" p-6 rounded-lg shadow-lg"
                    style={{ backgroundColor: '#0285D3' }}
                >
                    <h3 className="text-4xl font-bold text-blue-900">Our Approach</h3>
                    <p className="text-lg mt-3 text-orange-100">We focus on delivering high-impact solutions with cutting-edge technology and deep industry insights.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={!isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.5 }}
                    className="p-6 rounded-lg shadow-lg"
                    style={{ backgroundColor: '#0285D3' }}
                >
                    <h3 className="text-4xl font-bold text-blue-900">What We Offer</h3>
                    <p className="text-lg mt-3 text-orange-100">From AI-driven insights to personalized strategies, we empower businesses with innovative solutions tailored to their unique needs.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={!isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.5 }}
                    className=" p-6 rounded-lg shadow-lg"
                    style={{ backgroundColor: '#0285D3' }}
                >
                    <h3 className="text-4xl font-bold text-blue-900">Why Work With Us</h3>
                    <p className="text-lg mt-3 text-orange-100">We partner with industry leaders to create impactful solutions and help businesses succeed in a competitive market.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={!isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.5 }}
                    className=" p-6 rounded-lg shadow-lg"
                    style={{ backgroundColor: '#0285D3' }}
                >
                    <h3 className="text-4xl font-bold text-blue-900">Contact Us</h3>
                    <p className="text-lg mt-3 text-orange-100">Don't leave without reaching out! Let us help you take your business to the next level. Get in touch today.</p>
                </motion.div>
            </div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={!isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2 }}
                className="mt-6 px-6 py-3 bg-orange-500 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-orange-600"
                onClick={handleContactClick}
            >
                Contact Us
            </motion.button>

        </div>
    );
}