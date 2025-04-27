/* eslint-disable */
import React, { useState, JSX } from "react";

export default function AIAnalytics() {
    const [activeTab, setActiveTab] = useState<"solutions" | "benefits" | "workflow" | "chooseUs">("solutions");

    const tabContent: { [key in "solutions" | "benefits" | "workflow" | "chooseUs"]: JSX.Element } = {
        solutions: (
            <>
                <p>
                    At <strong>Chimon Solutions Inc.</strong>, we provide <strong>cutting-edge AI & Data Analytics solutions</strong> designed to help businesses
                    <strong>harness the power of data, unlock valuable insights, and drive smarter decision-making</strong>.
                    Our solutions integrate <strong>Artificial Intelligence (AI), Machine Learning (ML), Predictive Analytics, and Business Intelligence (BI)</strong>
                    to enhance operational efficiency and foster innovation.
                </p>
                <h3>🚀 Our AI & Data Analytics Solutions Include:</h3>
                <ul>
                    <li><strong>Predictive Analytics & Forecasting:</strong> AI-powered models analyze historical data, identify trends, and provide accurate <strong>forecasts for sales, demand planning, and risk assessment</strong>.</li>
                    <li><strong>AI-Powered Business Intelligence (BI):</strong> Transform raw data into actionable insights with <strong>automated dashboards and real-time reporting</strong> to drive strategic decision-making.</li>
                    <li><strong>Natural Language Processing (NLP):</strong> Extract meaningful insights from <strong>customer feedback, social media, and internal documents</strong> using AI-driven text analysis.</li>
                    <li><strong>AI-Driven Process Optimization:</strong> Identify inefficiencies in operations through <strong>data analytics and AI-driven workflow automation</strong> to <strong>enhance productivity</strong>.</li>
                    <li><strong>Data Integration & Management:</strong> Consolidate and structure enterprise data from multiple sources, ensuring <strong>clean, reliable, and scalable data architecture</strong>.</li>
                </ul>
            </>
        ),

        benefits: (
            <>
                <p>
                    Organizations leveraging <strong>AI & Data Analytics</strong> experience <strong>higher efficiency, deeper insights, and stronger competitive advantages</strong>.
                    Here’s how <strong>Chimon Solutions Inc.</strong> empowers businesses through AI-driven data intelligence:
                </p>
                <h3>📊 Key Benefits of AI & Data-Driven Insights:</h3>
                <ul>
                    <li><strong>Smarter Decision-Making:</strong> AI-powered analytics <strong>identifies hidden patterns</strong> in data, enabling businesses to make <strong>data-driven and proactive decisions</strong>.</li>
                    <li><strong>Improved Operational Efficiency:</strong> Automate data processing and reporting, <strong>eliminating manual errors</strong> and saving valuable time.</li>
                    <li><strong>Customer-Centric Insights:</strong> AI analyzes <strong>customer behaviors, sentiment, and preferences</strong>, helping businesses personalize marketing strategies and improve customer engagement.</li>
                    <li><strong>Risk Mitigation & Fraud Detection:</strong> AI models detect anomalies and fraudulent activities, ensuring <strong>better security and compliance</strong> across operations.</li>
                    <li><strong>Scalability & Competitive Edge:</strong> AI-driven insights allow businesses to <strong>scale efficiently, identify market trends, and stay ahead of competitors</strong>.</li>
                </ul>
            </>
        ),

        workflow: (
            <>
                <p>
                    Our <strong>structured AI & Data Analytics workflow</strong> ensures <strong>seamless integration</strong> into your business processes,
                    driving measurable outcomes and long-term success.
                </p>
                <h3>🔄 Our 3-Phase Data Analytics Process:</h3>
                <ol>
                    <li><strong>Data Assessment & Strategy Development:</strong> We evaluate your existing <strong>data landscape</strong> and identify opportunities for AI-driven insights.</li>
                    <li><strong>AI Model Development & Integration:</strong> We develop and deploy <strong>custom AI models and analytics platforms</strong>, seamlessly integrating them with <strong>ERP, CRM, and cloud environments</strong>.</li>
                    <li><strong>Optimization & Continuous Intelligence:</strong> Our team continuously monitors AI models, refining them for <strong>improved accuracy, automation, and business impact</strong>.</li>
                </ol>
            </>
        ),

        chooseUs: (
            <>
                <p>
                    Choosing <strong>Chimon Solutions Inc.</strong> means leveraging <strong>top-tier AI expertise, advanced analytics, and deep industry knowledge</strong>
                    to transform your data into <strong>actionable insights</strong>.
                </p>
                <h3>🌍 Why Businesses Trust Us?</h3>
                <ul>
                    <li><strong>Expertise in AI & Data Science:</strong> Our team specializes in <strong>AI, ML, data engineering, and analytics</strong>, delivering high-impact solutions across industries.</li>
                    <li><strong>Tailored AI Strategies:</strong> We <strong>customize AI & analytics solutions</strong> to align with your business objectives and <strong>seamlessly integrate with existing systems</strong>.</li>
                    <li><strong>Enterprise-Grade Security & Compliance:</strong> We follow <strong>strict data governance policies</strong>, ensuring regulatory compliance and <strong>secure data handling</strong>.</li>
                    <li><strong>Proven Results & Business Growth:</strong> We have helped <strong>global enterprises, Fortune 500 companies, and startups</strong> leverage AI & data analytics to <strong>reduce costs, improve efficiency, and gain a competitive edge</strong>.</li>
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
                    <h1 style={{ marginBottom: "8px" }}>AI Analytics</h1>
                    <p style={{ fontSize: "16px" }}>Automate workflows using AI</p>
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
