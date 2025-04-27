/* eslint-disable */
import React, { useState, JSX } from "react";

export default function BusinessInteligence() {
    const [activeTab, setActiveTab] = useState<"solutions" | "benefits" | "workflow" | "chooseUs">("solutions");

    const tabContent: { [key in "solutions" | "benefits" | "workflow" | "chooseUs"]: JSX.Element } = {
        solutions: (
            <>
                <p>
                    At <strong>Chimon Solutions Inc.</strong>, we provide <strong>comprehensive IT Consulting & Support services</strong>
                    to help businesses navigate <strong>digital transformation, optimize IT infrastructure, and ensure seamless operations</strong>.
                    Our team of experts offers strategic guidance, technical implementation, and ongoing support to meet
                    <strong>your business needs efficiently</strong>.
                </p>
                <h3>💻 Our IT Consulting & Support Services Include:</h3>
                <ul>
                    <li><strong>IT Strategy & Digital Transformation:</strong> Align IT initiatives with business goals to drive <strong>scalability, efficiency, and innovation</strong>.</li>
                    <li><strong>Cloud Consulting & Migration:</strong> Seamless migration and management of workloads across <strong>AWS, Azure, and Google Cloud</strong> environments.</li>
                    <li><strong>Cybersecurity & Risk Management:</strong> Implement robust security frameworks to <strong>protect business data and ensure compliance</strong>.</li>
                    <li><strong>IT Infrastructure Optimization:</strong> Enhance network performance, data storage, and server management for <strong>maximum uptime and efficiency</strong>.</li>
                    <li><strong>24/7 Technical Support & Managed IT Services:</strong> Proactive monitoring, troubleshooting, and IT helpdesk solutions to <strong>minimize downtime</strong>.</li>
                </ul>
            </>
        ),

        benefits: (
            <>
                <p>
                    Businesses that partner with <strong>Chimon Solutions Inc.</strong> for IT consulting and support gain access to
                    <strong>expert technology guidance, reliable infrastructure, and enhanced operational efficiency</strong>.
                </p>
                <h3>📈 Key Benefits of Our IT Consulting & Support:</h3>
                <ul>
                    <li><strong>Strategic IT Roadmap:</strong> Develop a long-term IT strategy that aligns with <strong>business growth and digital goals</strong>.</li>
                    <li><strong>Improved System Performance:</strong> Optimize IT environments for <strong>higher efficiency, speed, and reliability</strong>.</li>
                    <li><strong>Enhanced Security & Compliance:</strong> Protect sensitive data and ensure compliance with industry regulations like <strong>GDPR, HIPAA, and SOC 2</strong>.</li>
                    <li><strong>Reduced Downtime & Faster Resolutions:</strong> Our <strong>24/7 IT support</strong> ensures minimal disruption to business operations.</li>
                    <li><strong>Cost Optimization:</strong> Reduce IT operational expenses with <strong>smart cloud strategies, automation, and managed IT solutions</strong>.</li>
                </ul>
            </>
        ),

        workflow: (
            <>
                <p>
                    Our <strong>proven IT consulting framework</strong> ensures a <strong>seamless transition</strong>
                    from traditional IT models to <strong>modern, efficient, and scalable IT solutions</strong>.
                </p>
                <h3>⚙️ Our 3-Phase IT Consulting Approach:</h3>
                <ol>
                    <li><strong>Assessment & IT Strategy Development:</strong> We evaluate current IT infrastructure, identify challenges, and design a roadmap for <strong>digital transformation</strong>.</li>
                    <li><strong>Implementation & Integration:</strong> We deploy tailored solutions, ensuring seamless integration with <strong>enterprise applications and cloud environments</strong>.</li>
                    <li><strong>Continuous Support & Optimization:</strong> We provide <strong>ongoing monitoring, security updates, and performance enhancements</strong> to keep your IT systems running smoothly.</li>
                </ol>
            </>
        ),

        chooseUs: (
            <>
                <p>
                    Choosing <strong>Chimon Solutions Inc.</strong> for IT consulting means partnering with a team of <strong>certified technology experts</strong>
                    who specialize in <strong>cloud computing, cybersecurity, IT infrastructure, and managed services</strong>.
                </p>
                <h3>🌐 Why Choose Us?</h3>
                <ul>
                    <li><strong>Proven IT Expertise:</strong> Our consultants have extensive experience in <strong>enterprise IT, cloud solutions, and cybersecurity</strong>.</li>
                    <li><strong>Customized IT Solutions:</strong> We tailor strategies to fit <strong>your business needs, ensuring seamless technology adoption</strong>.</li>
                    <li><strong>End-to-End IT Support:</strong> From strategy to execution, we provide <strong>holistic IT solutions and continuous technical assistance</strong>.</li>
                    <li><strong>Security & Compliance First:</strong> We prioritize <strong>data protection, compliance, and IT risk management</strong> to safeguard business assets.</li>
                    <li><strong>Scalable & Future-Ready IT:</strong> Our solutions help businesses adapt to <strong>new technologies and industry changes seamlessly</strong>.</li>
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
                    <h1 style={{ marginBottom: "8px" }}>Business Intelligence</h1>
                    <p style={{ fontSize: "16px" }}>Transform data into actionable insights and enhance decision-making with our BI solutions.</p>
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
