/* eslint-disable */
import React, { useState, JSX } from "react";

export default function ProcessAutomation() {
    const [activeTab, setActiveTab] = useState<"solutions" | "benefits" | "workflow" | "chooseUs">("solutions");

    const tabContent: { [key in "solutions" | "benefits" | "workflow" | "chooseUs"]: JSX.Element } = {
        solutions: (
            <>
                <p>
                    At <strong>Chimon Solutions Inc.</strong>, we provide <strong>end-to-end process automation solutions</strong> tailored to meet your business needs.
                    Our solutions leverage <strong>Artificial Intelligence (AI), Machine Learning (ML), Robotic Process Automation (RPA), and cloud-based automation tools</strong>
                    to transform the way businesses operate.
                </p>
                <h3>🚀 Our Automation Solutions Include:</h3>
                <ul>
                    <li><strong>Business Process Automation (BPA):</strong> Streamline repetitive manual processes such as data entry, approvals, invoicing, and document management.</li>
                    <li><strong>AI-Powered Chatbots:</strong> Enhance customer interactions and support with AI-driven virtual assistants that provide <strong>24/7</strong> responses.</li>
                    <li><strong>Robotic Process Automation (RPA):</strong> Automate high-volume, rule-based tasks across multiple applications, reducing processing time significantly.</li>
                    <li><strong>Cloud Automation & DevOps:</strong> Automate CI/CD pipelines, cloud deployments, and software updates to <strong>reduce downtime and optimize efficiency</strong>.</li>
                    <li><strong>AI-Driven Analytics & Reporting:</strong> Automatically generate reports, analyze patterns, and provide real-time insights for <strong>data-driven decisions</strong>.</li>
                </ul>
            </>
        ),

        benefits: (
            <>
                <p>
                    Businesses that <strong>implement automation</strong> experience <strong>enhanced efficiency, reduced costs, and increased productivity</strong>.
                    Here’s how <strong>Chimon Solutions Inc.</strong> can help you transform your operations:
                </p>
                <h3>📊 Key Benefits of Process Automation:</h3>
                <ul>
                    <li><strong>Cost Reduction & Efficiency Gains:</strong> Eliminate repetitive manual tasks, reducing <strong>operational expenses by up to 40%</strong>.</li>
                    <li><strong>Faster Turnaround Time:</strong> Automated workflows ensure processes are completed <strong>in seconds rather than hours</strong>, increasing overall efficiency.</li>
                    <li><strong>Error-Free Execution:</strong> AI-driven automation minimizes human errors, ensuring <strong>100% accuracy</strong> in tasks such as <strong>data processing, finance, and HR</strong>.</li>
                    <li><strong>Improved Compliance & Security:</strong> Maintain regulatory compliance by automating audit trails, <strong>enforcing policies, and reducing security risks</strong>.</li>
                    <li><strong>Scalability for Growth:</strong> As businesses grow, automated processes scale effortlessly without requiring additional human resources.</li>
                </ul>
            </>
        ),

        workflow: (
            <>
                <p>
                    Our <strong>proven automation workflow</strong> ensures a <strong>seamless transition</strong> from manual processes to <strong>fully automated solutions</strong>.
                    We take a <strong>structured, data-driven</strong> approach to ensure maximum efficiency and minimal disruption.
                </p>
                <h3>🔄 Our 3-Phase Automation Process:</h3>
                <ol>
                    <li><strong>Assessment & Strategy Development:</strong> We conduct a <strong>deep analysis</strong> of your existing workflows to identify inefficiencies and opportunities.</li>
                    <li><strong>Implementation & Integration:</strong> Our team seamlessly <strong>integrates automation tools</strong> with existing enterprise applications like <strong>Salesforce, SAP, Workday, and ServiceNow</strong>.</li>
                    <li><strong>Optimization & Continuous Improvement:</strong> We monitor real-time data and continuously refine automation systems to ensure <strong>maximum efficiency</strong>.</li>
                </ol>
            </>
        ),

        chooseUs: (
            <>
                <p>
                    Choosing <strong>Chimon Solutions Inc.</strong> means <strong>partnering with automation experts</strong> who bring <strong>cutting-edge technology, deep industry experience, and proven methodologies</strong> to the table.
                </p>
                <h3>🌍 Why Partner With Us?</h3>
                <ul>
                    <li><strong>Industry Expertise:</strong> With years of experience in <strong>IT consulting, AI, cloud computing, and enterprise automation</strong>, we deliver <strong>proven</strong> automation solutions across industries.</li>
                    <li><strong>Customized Solutions:</strong> We tailor automation strategies to fit <strong>your business needs</strong>, ensuring <strong>seamless integration</strong> with existing workflows.</li>
                    <li><strong>Security & Compliance:</strong> We prioritize <strong>data security, compliance, and risk management</strong>, ensuring businesses <strong>operate within regulatory guidelines</strong>.</li>
                    <li><strong>Proven Track Record:</strong> We've successfully automated processes for <strong>Fortune 500 companies, mid-sized enterprises, and startups</strong>, helping them <strong>reduce costs and enhance efficiency</strong>.</li>
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
                    <h1 style={{ marginBottom: "8px" }}>Process Automation</h1>
                    <p style={{ fontSize: "16px" }}>Home / Process Automation</p>
                </div>
            </div>

            
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", borderBottom: "2px solid #ddd" }}>
                {[
                    { key: "solutions", label: "Our Solutions" },
                    { key: "benefits", label: "Benefits" },
                    { key: "workflow", label: "Our Workflow" },
                    { key: "chooseUs", label: "Why Choose Us" },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as "solutions" | "benefits" | "workflow" | "chooseUs")}
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
