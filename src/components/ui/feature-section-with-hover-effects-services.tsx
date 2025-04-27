/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
    ArchiveIcon,
    CodeIcon,
    LockClosedIcon,
    GearIcon,
    BarChartIcon,
    PersonIcon,
} from "@radix-ui/react-icons";

export function FeaturesSectionWithHoverEffectsServices() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const features = [
        {
            title: "AI & Data Analytics",
            description: "Leverage artificial intelligence and data-driven insights to make smarter business decisions.",
            icon: <ArchiveIcon className="h-10 w-10 text-orange-600" />,
            link: "/AIAnalytics",
        },
        {
            title: "Cloud Solutions",
            description: "Migrate, optimize, and scale your business with our secure and efficient cloud computing services.",
            icon: <CodeIcon className="h-10 w-10 text-orange-600" />,
            link: "/cloudSolutions",
        },
        {
            title: "Cybersecurity & Compliance",
            description: "Ensure data security and compliance with the latest cybersecurity measures and best practices.",
            icon: <LockClosedIcon className="h-10 w-10 text-orange-600" />,
            link: "/cyberSecurity",
        },
        {
            title: "DevOps & Automation",
            description: "Accelerate software development and deployment with DevOps, CI/CD pipelines, and automation tools.",
            icon: <GearIcon className="h-10 w-10 text-orange-600" />,
            link: "/devops",
        },
        {
            title: "Business Intelligence",
            description: "Transform data into actionable insights and enhance decision-making with our BI solutions.",
            icon: <BarChartIcon className="h-10 w-10 text-orange-600" />,
            link: "/businessIntelligence",
        },
        {
            title: "IT Consulting & Support",
            description: "Get expert guidance on IT strategy, digital transformation, and ongoing technical support.",
            icon: <PersonIcon className="h-10 w-10 text-orange-600" />,
            link: "/processautomation",
        },
    ];

    return (
        <div ref={ref} className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-6 py-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <p className="text-sm font-semibold tracking-wide uppercase text-orange-500">Why Choose Us</p>
                <h1 className="text-5xl font-bold text-gray-900 mt-2">
                    Empowering Your Digital Future
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                    We specialize in innovative solutions that drive business growth and operational excellence.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.2 }}
                        className="p-8 rounded-xl bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-md mt-3 text-gray-600">{feature.description}</p>
                        <a
                            href={feature.link}
                            className="mt-4 inline-block text-lg font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                        >
                            Click Here to Learn More →
                        </a>
                    </motion.div>
                ))}
            </div>

            <motion.a
                href="/contactus"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2 }}
                className="mt-10 px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
            >
                Get in Touch
            </motion.a>
        </div>
    );
}
