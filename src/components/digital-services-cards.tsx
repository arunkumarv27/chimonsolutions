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
        <div className="min-h-screen bg-orange-600 p-8">
            <div className="mx-auto flex max-w-[1440px] h-[600px] gap-[18px] overflow-x-auto pb-4 items-stretch">
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
                                                className={`text-base text-white/90 transition-opacity duration-300 delay-100 ${isSelected ? "opacity-100" : "opacity-0"
                                                    }`}
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
        </div>
    )
}

