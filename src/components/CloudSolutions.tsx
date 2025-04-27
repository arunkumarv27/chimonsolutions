/* eslint-disable */
import React, { useState, JSX } from "react";

export default function CloudSolutions() {
    const [activeTab, setActiveTab] = useState<"solutions" | "benefits" | "workflow" | "chooseUs">("solutions");

    const tabContent: { [key in "solutions" | "benefits" | "workflow" | "chooseUs"]: JSX.Element } = {
        solutions: (
            <>
                <p>
                    At <strong>Chimon Solutions Inc.</strong>, we provide <strong>comprehensive Cloud Solutions</strong> that enable businesses to
                    <strong>migrate, optimize, and scale</strong> their operations securely and efficiently.
                    Our services leverage <strong>Cloud Computing, DevOps, Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Serverless Computing</strong>
                    to enhance flexibility, performance, and cost-effectiveness.
                </p>
                <h3>☁️ Our Cloud Solutions Include:</h3>
                <ul>
                    <li><strong>Cloud Migration & Modernization:</strong> Seamlessly transition from on-premises infrastructure to the cloud with <strong>minimal downtime</strong> and optimized performance.</li>
                    <li><strong>Multi-Cloud & Hybrid Cloud Strategies:</strong> Leverage a combination of <strong>AWS, Microsoft Azure, Google Cloud, and private cloud</strong> solutions for enhanced flexibility.</li>
                    <li><strong>Cloud Security & Compliance:</strong> Implement industry-best practices for <strong>data protection, encryption, and regulatory compliance</strong> to safeguard business operations.</li>
                    <li><strong>Serverless & Containerized Solutions:</strong> Optimize development with <strong>Docker, Kubernetes, and serverless architectures</strong> to improve scalability and reduce infrastructure management overhead.</li>
                    <li><strong>Cloud-Based AI & Analytics:</strong> Utilize **big data processing, AI-driven insights, and real-time analytics** to make data-driven business decisions.</li>
                </ul>
            </>
        ),

        benefits: (
            <>
                <p>
                    Businesses adopting <strong>Cloud Solutions</strong> benefit from <strong>greater agility, reduced IT costs, and improved performance</strong>.
                    Here’s how <strong>Chimon Solutions Inc.</strong> helps you maximize the cloud’s potential:
                </p>
                <h3>📈 Key Benefits of Cloud Computing:</h3>
                <ul>
                    <li><strong>Cost Efficiency & Flexibility:</strong> Scale resources dynamically and reduce infrastructure costs with <strong>pay-as-you-go pricing</strong>.</li>
                    <li><strong>Enhanced Performance & Reliability:</strong> Cloud-hosted applications ensure <strong>faster load times, high availability, and reduced downtime</strong>.</li>
                    <li><strong>Improved Security & Compliance:</strong> Implement **end-to-end encryption, identity management, and multi-layer security** to protect sensitive data.</li>
                    <li><strong>Seamless Collaboration:</strong> Enable remote work and **real-time collaboration** with cloud-based tools and centralized data access.</li>
                    <li><strong>Scalability & Business Growth:</strong> Expand operations effortlessly with **auto-scaling, load balancing, and cloud-native solutions**.</li>
                </ul>
            </>
        ),

        workflow: (
            <>
                <p>
                    Our <strong>structured Cloud Adoption Framework</strong> ensures a <strong>seamless transition</strong> to the cloud, maximizing efficiency while minimizing risks.
                </p>
                <h3>🔄 Our 3-Phase Cloud Transformation Process:</h3>
                <ol>
                    <li><strong>Assessment & Strategy Development:</strong> Analyze your current IT infrastructure to determine the best <strong>cloud migration strategy</strong>.</li>
                    <li><strong>Cloud Deployment & Integration:</strong> Migrate workloads, applications, and databases while ensuring <strong>seamless integration with existing enterprise systems</strong>.</li>
                    <li><strong>Optimization & Ongoing Management:</strong> Implement **automated monitoring, cost optimization, and continuous performance enhancements**.</li>
                </ol>
            </>
        ),

        chooseUs: (
            <>
                <p>
                    Choosing <strong>Chimon Solutions Inc.</strong> means working with <strong>certified cloud experts</strong> who specialize in **secure, scalable, and high-performance cloud architectures**.
                </p>
                <h3>🌍 Why Partner With Us?</h3>
                <ul>
                    <li><strong>Expertise Across Cloud Platforms:</strong> Our team has deep expertise in <strong>AWS, Azure, Google Cloud, and private cloud environments</strong>.</li>
                    <li><strong>Tailored Cloud Solutions:</strong> We customize cloud adoption strategies to fit **your business needs** while ensuring smooth integration.</li>
                    <li><strong>Security & Compliance Focus:</strong> We implement <strong>best-in-class security frameworks</strong> to meet **HIPAA, GDPR, and SOC 2** compliance requirements.</li>
                    <li><strong>Proven Cloud Success:</strong> We’ve helped **enterprises, Fortune 500 companies, and startups** migrate, optimize, and scale operations in the cloud.</li>
                </ul>
            </>
        ),
    };

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", backgroundColor: "#ffffff" }}>
            
            <div
                style={{
                    backgroundImage: "url('/aboutus.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "28px",
                    position: "relative",
                }}
            >
                <div>
                    <h1 style={{ marginBottom: "8px" }}>Cloud Solutions</h1>
                    <p style={{ fontSize: "16px" }}>Migrate, optimize, and scale your business with our secure and efficient cloud computing services.</p>
                </div>
            </div>

            
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", borderBottom: "2px solid #ddd" }}>
                {[
                    { key: "solutions" as "solutions", label: "Our Solutions" },
                    { key: "benefits" as "benefits", label: "Benefits" },
                    { key: "workflow" as "workflow", label: "Our Workflow" },
                    { key: "chooseUs" as "chooseUs", label: "Why Choose Us" },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            padding: "12px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: activeTab === tab.key ? "#007bff" : "transparent",
                            color: activeTab === tab.key ? "#ffffff" : "#007bff",
                            border: `2px solid ${activeTab === tab.key ? "#007bff" : "#ddd"}`,
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            
            <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto", fontSize: "18px", lineHeight: "1.6" }}>
                {tabContent[activeTab]}
            </div>
        </div>
    );
}
