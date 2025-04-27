/* eslint-disable */
import React, { useState, JSX } from "react";

export default function CyberSecurity() {
    const [activeTab, setActiveTab] = useState<"solutions" | "benefits" | "workflow" | "chooseUs">("solutions");

    const tabContent: { [key in "solutions" | "benefits" | "workflow" | "chooseUs"]: JSX.Element } = {
        solutions: (
            <>
                <p>
                    At <strong>Chimon Solutions Inc.</strong>, we provide <strong>advanced Cybersecurity & Compliance solutions</strong>
                    designed to protect your business from cyber threats and ensure regulatory compliance.
                    Our approach integrates <strong>cutting-edge security technologies, risk management frameworks,
                        and compliance automation</strong> to safeguard your digital assets.
                </p>
                <h3>🔐 Our Cybersecurity & Compliance Solutions Include:</h3>
                <ul>
                    <li><strong>Threat Detection & Response:</strong> AI-driven security monitoring to detect, analyze, and mitigate cyber threats in real time.</li>
                    <li><strong>Data Protection & Encryption:</strong> End-to-end encryption and data security solutions to prevent unauthorized access and data breaches.</li>
                    <li><strong>Compliance Automation:</strong> Ensure adherence to industry regulations such as <strong>GDPR, HIPAA, SOC 2, ISO 27001, and PCI DSS</strong>.</li>
                    <li><strong>Identity & Access Management (IAM):</strong> Strengthen security with multi-factor authentication (MFA), single sign-on (SSO), and access controls.</li>
                    <li><strong>Cloud Security & Zero Trust Architecture:</strong> Secure cloud environments with zero trust policies, ensuring protection against unauthorized access.</li>
                </ul>
            </>
        ),

        benefits: (
            <>
                <p>
                    Businesses that prioritize <strong>cybersecurity & compliance</strong> experience <strong>reduced risks, enhanced trust, and operational resilience</strong>.
                    Here’s how <strong>Chimon Solutions Inc.</strong> helps organizations stay secure:
                </p>
                <h3>🛡️ Key Benefits of Cybersecurity & Compliance:</h3>
                <ul>
                    <li><strong>Proactive Threat Prevention:</strong> AI-driven security continuously monitors and detects threats before they impact operations.</li>
                    <li><strong>Regulatory Compliance Assurance:</strong> Stay compliant with <strong>global cybersecurity regulations</strong> and avoid fines or legal penalties.</li>
                    <li><strong>Data Integrity & Protection:</strong> Secure sensitive data against unauthorized access, breaches, and cyberattacks.</li>
                    <li><strong>Enhanced Business Reputation:</strong> Strong cybersecurity measures increase customer trust and protect brand credibility.</li>
                    <li><strong>Reduced Financial Risks:</strong> Prevent costly data breaches, ransomware attacks, and downtime with robust security frameworks.</li>
                </ul>
            </>
        ),

        workflow: (
            <>
                <p>
                    Our <strong>comprehensive cybersecurity workflow</strong> ensures businesses stay secure and compliant
                    with evolving regulatory requirements and cyber threats.
                </p>
                <h3>🔄 Our 3-Phase Cybersecurity & Compliance Process:</h3>
                <ol>
                    <li><strong>Risk Assessment & Security Strategy:</strong> Identify vulnerabilities, conduct security audits, and develop a robust cybersecurity plan.</li>
                    <li><strong>Implementation & Monitoring:</strong> Deploy security controls, threat detection systems, and compliance automation tools.</li>
                    <li><strong>Continuous Monitoring & Improvement:</strong> Conduct regular security updates, audits, and real-time monitoring to adapt to new threats.</li>
                </ol>
            </>
        ),

        chooseUs: (
            <>
                <p>
                    Choosing <strong>Chimon Solutions Inc.</strong> means working with <strong>trusted cybersecurity professionals</strong>
                    who specialize in protecting organizations against cyber risks and ensuring compliance with industry standards.
                </p>
                <h3>🔒 Why Choose Us for Cybersecurity & Compliance?</h3>
                <ul>
                    <li><strong>Expert Security Team:</strong> Our specialists have deep expertise in <strong>cyber risk management, ethical hacking, and compliance frameworks</strong>.</li>
                    <li><strong>Tailored Security Solutions:</strong> We customize cybersecurity strategies to fit your business model and regulatory requirements.</li>
                    <li><strong>Advanced AI & Threat Intelligence:</strong> AI-powered security tools provide real-time insights and proactive threat detection.</li>
                    <li><strong>Proven Success Across Industries:</strong> We’ve helped businesses across finance, healthcare, and retail strengthen security and compliance.</li>
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
                    <h1 style={{ marginBottom: "8px" }}>Cybersecurity & Compliance</h1>
                    <p style={{ fontSize: "16px" }}>Ensure data security and compliance with the latest cybersecurity measures and best practices.</p>
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
