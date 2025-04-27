/* eslint-disable */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "./use-media-query"

const services = [
    {
        title: "Digital Transformation",
        description: "Modernize your business operations with cutting-edge digital solutions and strategies.",
        image: "/DigitalTransformation.jpg",
    },
    {
        title: "Cloud Solutions",
        description: "Leverage cloud technology for scalability, security, and improved operational efficiency.",
        image: "/CloudSolutions.jpg",
    },
    {
        title: "Cybersecurity",
        description: "Protect your digital assets with comprehensive security solutions and best practices.",
        image: "/Cybersecurity.jpg",
    },
    {
        title: "AI & Machine Learning",
        description: "Harness the power of AI and machine learning to drive automation, insights, and innovation.",
        image: "/AIDataAnalytics.jpg",
    },
    {
        title: "DevOps & Automation",
        description:
            "Optimize your software development lifecycle with automation, CI/CD pipelines, and infrastructure as code.",
        image: "/devopssdfsdf.jpg",
    },
    {
        title: "Data Analytics & BI",
        description:
            "Transform data into actionable insights with predictive analytics and business intelligence solutions.",
        image: "/da.jpg",
    },
    {
        title: "Enterprise Software",
        description: "Seamlessly integrate and optimize enterprise resource planning (ERP) and software applications.",
        image: "/wrefsd.jpg",
    },
]

export default function DigitalServicesCards() {
    const [activeCard, setActiveCard] = useState(0)
    const desktopMedium = useMediaQuery("(min-width: 768px)")

    const startWidth = desktopMedium ? 100 : 120
    const endWidth = desktopMedium ? 500 : 432

    return (
        <div style={{ backgroundColor: '#0285D3' }} className="h-screen p-8 flex flex-wrap justify-center gap-8">


            <div style={{ backgroundColor: '#0285D3' }} className="min-h-80 p-8 flex gap-8">
                {services.map((service, index) => {
                    const isSelected = index === activeCard

                    const springConfig = {
                        width: isSelected ? endWidth : startWidth,
                        config: { mass: 2, friction: 40, tension: 600 },
                    }

                    return (
                        <motion.div
                            key={index}
                            className="relative shrink-0 cursor-pointer rounded-xl overflow-hidden"
                            onHoverStart={() => setActiveCard(index)}
                            animate={springConfig}
                            style={{ width: springConfig.width }}
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={service.image || "/placeholder.svg"}
                                    alt={service.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                            </div>
                            <div className="h-full overflow-hidden relative">
                                <div className="w-[500px] h-full">
                                    <div className="p-6 h-full flex flex-col justify-between relative">
                                        <h3
                                            className={`text-xl font-semibold text-white ${isSelected ? "origin-top-left rotate-0" : "origin-top-left rotate-90 absolute left-[78px] top-[32px]"} transition-all duration-300`}
                                        >
                                            {service.title}
                                        </h3>
                                        <div className="flex flex-col">
                                            <p
                                                className={`text-base text-white/90 transition-opacity duration-300 delay-100 ${isSelected ? "opacity-100" : "opacity-0"}`}
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>


            {/* <div className="w-full md:w-1/3 flex-shrink-0 p-4 md:p-6 text-white overflow-y-auto max-h-screen">


                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Chimon Solutions</h2>
                <p className="text-gray-700">
                    At Chimon Solutions, we provide services such as Digital Transformation, Cloud Solutions, Cybersecurity, AI & Machine Learning, DevOps & Automation, Data Analytics & BI, and Enterprise Software Development. Our goal is to empower businesses with cutting-edge technology solutions that drive efficiency, scalability, security, and innovation.
                </p>
                <p className="text-gray-700 mt-4">
                    Our Digital Transformation services focus on modernizing business operations by leveraging emerging technologies, automation, and data-driven strategies. We help businesses transition from legacy systems to digital-first approaches, enabling them to remain competitive in a rapidly evolving market.
                </p>
                <p className="text-gray-700 mt-4">
                    With our Cloud Solutions, we assist organizations in migrating to and managing cloud environments efficiently. Whether it's public, private, or hybrid cloud infrastructure, our expertise ensures seamless scalability, security, and cost-effectiveness.
                </p>
                <p className="text-gray-700 mt-4">
                    Security is paramount in today’s digital landscape, which is why we offer Cybersecurity services that safeguard digital assets from potential threats.
                </p>
                <p className="text-gray-700 mt-4">
                    Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries by enabling automation, predictive analytics, and intelligent decision-making. At Chimon Solutions, our AI & Machine Learning services help businesses harness the power of data-driven intelligence.
                </p>
                <p className="text-gray-700 mt-4">
                    Our DevOps & Automation services focus on streamlining software development processes through automation, CI/CD, and infrastructure as code.
                </p>
                <p className="text-gray-700 mt-4">
                    Data is a valuable asset, and our Data Analytics & Business Intelligence (BI) services empower businesses to extract meaningful insights from their data.
                </p>
            </div> */}
        </div>
    )
}
