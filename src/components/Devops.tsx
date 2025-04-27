import React, { useState, JSX } from "react";

export default function Devops() {
    const [activeTab, setActiveTab] = useState<"solutions" | "benefits" | "workflow" | "chooseUs">("solutions");

    const tabContent: { [key in "solutions" | "benefits" | "workflow" | "chooseUs"]: JSX.Element } = {
        solutions: (
            <>
                <p>
                    At <strong>Chimon Solutions Inc.</strong>, we empower businesses with <strong>DevOps & Automation solutions</strong> that
                    <strong>accelerate software development, enhance deployment efficiency, and optimize IT operations</strong>.
                    Our expertise in <strong>Continuous Integration (CI), Continuous Deployment (CD), Infrastructure as Code (IaC), and cloud automation</strong>
                    ensures seamless software delivery and operational excellence.
                </p>
                <h3>🚀 Our DevOps & Automation Solutions Include:</h3>
                <ul>
                    <li><strong>CI/CD Pipeline Automation:</strong> Implement automated <strong>build, test, and deployment pipelines</strong> to ensure faster, more reliable software releases.</li>
                    <li><strong>Infrastructure as Code (IaC):</strong> Automate cloud provisioning and configuration management using <strong>Terraform, Ansible, and Kubernetes</strong>.</li>
                    <li><strong>Cloud & Container Orchestration:</strong> Deploy and manage cloud applications efficiently using <strong>Docker, Kubernetes, and serverless computing</strong>.</li>
                    <li><strong>Monitoring & Logging Automation:</strong> Gain real-time insights with <strong>automated observability tools like Prometheus, Grafana, and ELK stack</strong>.</li>
                    <li><strong>Security & Compliance Automation:</strong> Integrate <strong>automated security scanning, policy enforcement, and compliance reporting</strong> into DevOps workflows.</li>
                </ul>
            </>
        ),

        benefits: (
            <>
                <p>
                    Adopting <strong>DevOps & Automation</strong> accelerates development cycles, improves collaboration, and enhances system reliability.
                    Here’s how <strong>Chimon Solutions Inc.</strong> helps organizations scale their DevOps capabilities:
                </p>
                <h3>📊 Key Benefits of DevOps & Automation:</h3>
                <ul>
                    <li><strong>Faster Software Delivery:</strong> Automate development and deployment, reducing release cycles from <strong>weeks to hours</strong>.</li>
                    <li><strong>Increased Reliability & Stability:</strong> CI/CD pipelines ensure <strong>error-free deployments</strong> and minimize production failures.</li>
                    <li><strong>Optimized IT Operations:</strong> Automate infrastructure provisioning, monitoring, and scaling to improve efficiency and reduce manual workload.</li>
                    <li><strong>Enhanced Security & Compliance:</strong> Implement DevSecOps to <strong>integrate security into the CI/CD pipeline</strong> and ensure regulatory compliance.</li>
                    <li><strong>Cost Savings & Scalability:</strong> Automate cloud resources and dynamically scale workloads to optimize operational costs.</li>
                </ul>
            </>
        ),

        workflow: (
            <>
                <p>
                    Our <strong>proven DevOps workflow</strong> ensures a <strong>seamless transition</strong> to automation and continuous delivery,
                    enhancing agility and efficiency.
                </p>
                <h3>🔄 Our 3-Phase DevOps & Automation Process:</h3>
                <ol>
                    <li><strong>Assessment & Strategy Development:</strong> Analyze current development processes and define a roadmap for <strong>DevOps adoption</strong>.</li>
                    <li><strong>Implementation & Integration:</strong> Deploy <strong>CI/CD pipelines, cloud automation, and infrastructure as code</strong> to streamline operations.</li>
                    <li><strong>Optimization & Continuous Improvement:</strong> Continuously monitor, refine, and scale automation processes to ensure <strong>high availability and efficiency</strong>.</li>
                </ol>
            </>
        ),

        chooseUs: (
            <>
                <p>
                    Partnering with <strong>Chimon Solutions Inc.</strong> means embracing <strong>modern DevOps practices and intelligent automation</strong>
                    to achieve <strong>faster, more secure, and more efficient software delivery</strong>.
                </p>
                <h3>🌍 Why Choose Chimon Solutions Inc. for DevOps & Automation?</h3>
                <ul>
                    <li><strong>Expertise in DevOps & Cloud:</strong> Our team has deep expertise in <strong>Kubernetes, Terraform, CI/CD, and cloud-native technologies</strong>.</li>
                    <li><strong>Customized DevOps Strategies:</strong> We tailor solutions to fit your business needs, ensuring seamless integration with existing IT infrastructure.</li>
                    <li><strong>Security-First Approach:</strong> We embed <strong>DevSecOps practices</strong> to protect software supply chains and ensure regulatory compliance.</li>
                    <li><strong>Proven Success:</strong> We have helped <strong>startups, mid-sized businesses, and Fortune 500 companies</strong> streamline software delivery and IT operations.</li>
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
                    <h1 style={{ marginBottom: "8px" }}>DevOps & Automation</h1>
                    <p style={{ fontSize: "16px" }}>Accelerate software development and deployment with DevOps, CI/CD pipelines, and automation tools.</p>
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
