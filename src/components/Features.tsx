import React from "react";
import { FeatureSteps } from "./ui/feature-section";

function Features() {
    const features = [
        {
            step: "Step 1",
            title: "AI & Data Analytics",
            content: "Leverage advanced AI and machine learning solutions to gain actionable insights, drive automation, and unlock new growth opportunities.",
            image: "/11111111.jpg",
        },
        {
            step: "Step 2",
            title: "Full Stack Development",
            content: "Design and build robust, scalable applications using modern frameworks like React, Node.js, and Next.js.",
            image: "/222222.jpg",
        },
        {
            step: "Step 3",
            title: "Salesforce & CRM",
            content: "Implement and optimize Salesforce solutions for enhanced customer relationship management and business growth.",
            image: "/333333.jpg",
        },
        {
            step: "Step 4",
            title: "ServiceNow Implementation",
            content: "Streamline IT operations and automate workflows with our ServiceNow consulting and deployment services.",
            image: "/44444.jpg",
        },
        {
            step: "Step 5",
            title: "Workday & HCM",
            content: "Enhance your HR processes with Workday's unified human capital management solutions and our expert support.",
            image: "/55555.jpg",
        },
    ];

    return (
        <section className="py-12 bg-gray-100 text-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Explore Our Technology Expertise</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Discover cutting-edge technology solutions tailored to your business needs.
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <FeatureSteps
                    features={features}
                    autoPlayInterval={5000}
                    imageHeight="h-[700px]"
                />
            </div>
        </section>
    );
}

export default Features;
