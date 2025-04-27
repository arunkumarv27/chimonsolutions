/* eslint-disable */
import React, { useState } from "react";

export default function NavContentPartnership({ slug }: { slug: string }) {
    const [activeTab, setActiveTab] = useState("solutions");


    const contentBySlug = {
        "migration-planning-and-strategy": {
            solutions: "At Chimon Solutions, ."
        },
        "accenture": {
            solutions: "Our partnership with Accenture enables us to deliver comprehensive digital solutions that drive innovation and efficiency. Together, we leverage advanced technologies, including AI and cloud computing, to help clients transform their business models and improve customer experiences in a rapidly evolving marketplace."
        },
        "deloitte": {
            solutions: "In partnership with Deloitte, Chimon Solutions provides strategic consulting services that align technology with business objectives. Our collaboration focuses on digital transformation, operational efficiency, and risk management, enabling organizations to navigate change and achieve sustainable growth."
        },
        "github": {
            solutions: "As a GitHub partner, we support software development teams in leveraging the platform's collaborative features for version control and code management. Chimon Solutions helps organizations integrate GitHub into their development workflows, promoting efficiency, collaboration, and innovation in software projects."
        },
        "microsoft": {
            solutions: "As a Microsoft partner, Chimon Solutions leverages the power of Microsoft Azure to deliver scalable cloud solutions that drive business transformation. Our collaboration enables us to provide clients with robust enterprise solutions, including data analytics, AI, and machine learning capabilities that enhance operational efficiency and improve decision-making."
        },
        "amazon-web-services-aws": {
            solutions: "Through our partnership with AWS, we offer clients access to a comprehensive suite of cloud services that enable agility and scalability. Chimon Solutions utilizes AWS solutions for cloud migration, storage, and machine learning, helping businesses innovate and reduce time-to-market while maintaining the highest standards of security and compliance."
        },
        "docker": {
            solutions: "Our collaboration with Docker allows us to provide containerization solutions that enhance application development and deployment. Chimon Solutions leverages Docker's technology to help organizations improve scalability, portability, and resource efficiency, enabling faster and more reliable software delivery."
        },
        "google-cloud": {
            solutions: "Our partnership with Google Cloud allows us to deliver advanced data analytics and machine learning solutions. Chimon Solutions integrates Google's powerful cloud tools to help clients harness their data, improve customer experiences, and enhance operational efficiency, driving growth and innovation in their respective industries."
        },
        "atlassian": {
            solutions: "Through our partnership with Atlassian, we help teams collaborate more effectively using tools like Jira, Confluence, and Trello. Chimon Solutions leverages these platforms to enhance project management, improve communication, and streamline workflows, enabling organizations to achieve their goals efficiently."
        },
        "equinix": {
            solutions: "Our collaboration with Equinix enables us to provide clients with secure and reliable data center solutions. Chimon Solutions utilizes Equinix's global interconnection platform to enhance network performance, improve connectivity, and support hybrid cloud strategies, driving operational efficiency for organizations."
        },
        "jenkins": {
            solutions: "Through our partnership with Jenkins, we enable continuous integration and continuous delivery (CI/CD) for our clients. Chimon Solutions utilizes Jenkins' automation capabilities to streamline software development processes, enhance deployment efficiency, and improve product quality."
        },
        "openai": {
            mainContent: "OpenAI is revolutionizing the way we interact with technology. Chimon Solutions is exploring strategic implementations of OpenAI’s advanced models to empower organizations with smarter automation, better decision-making, and intelligent customer experiences.",
            solutions: "Our OpenAI-powered solutions focus on natural language understanding and generation. This includes AI-driven chatbots for real-time customer support, intelligent content summarization for knowledge bases, and advanced sentiment analysis tools that extract insights from user feedback and social media.\n\nWe are currently working on enterprise integrations with GPT models to automate workflows, streamline document analysis, and provide conversational AI interfaces for internal tools."
        },
        "dall-e": {
            mainContent: "DALL·E enables the generation of original, high-quality images from text prompts, opening up new possibilities for creativity and automation. At Chimon Solutions, we are piloting the use of DALL·E to bring generative AI into our design, marketing, and training workflows.",
            solutions: "We use DALL·E to support creative teams by generating visual assets for branding, presentations, and product design. It also assists in visual storytelling for internal communications, enabling rapid mockup creation for concept visualization. Future phases will explore personalized image generation based on customer profiles and content themes."
        },
        "devops": {
            mainContent: "Chimon Solutions’s DevOps initiatives focus on unifying development and operations to increase agility, automate deployments, and accelerate software delivery lifecycles. By integrating modern DevOps practices, we empower engineering teams to build, test, and release software faster and with greater confidence.",
            solutions: "Our DevOps offerings include setting up robust CI/CD pipelines, infrastructure automation using Terraform and Ansible, and implementing monitoring tools like Prometheus and Grafana. We also help teams adopt container orchestration with Kubernetes, enabling scalable and resilient application deployments across hybrid environments.\n\nWe're currently building reusable DevOps frameworks tailored for enterprise environments to reduce time-to-market and improve system reliability."
        }
        ,
        "databricks": {
            mainContent: "Chimon Solutions partners with Databricks to help businesses harness the full power of unified analytics and AI. Our integration strategy leverages Databricks' Lakehouse Platform to streamline data engineering, advanced analytics, and machine learning operations on a single, scalable platform.",
            solutions: "Our Databricks solutions include:\n\n• Unified Data Architecture: Break down silos by combining data lakes and data warehouses into a single lakehouse architecture.\n• Scalable Machine Learning: Accelerate model development with collaborative notebooks and managed ML workflows.\n• Real-Time Analytics: Process streaming data in real-time for actionable business insights.\n• Data Governance & Security: Implement robust access controls, auditing, and compliance frameworks across your data pipeline.\n\nChimon Solutions helps organizations unlock insights faster while keeping data secure and production-ready for AI innovation."
        },

        "huggingface": {
            mainContent: "As the future of AI shifts toward open models and ethical development, Chimon Solutions’s partnership with Hugging Face positions us at the forefront of responsible AI innovation. By integrating open-source transformer models and NLP frameworks, we enable scalable, customizable AI capabilities for our clients.",
            solutions: "Our Hugging Face partnership empowers your business with:\n\n• Pre-trained Transformers: Fast-track development with ready-to-use NLP models for text classification, summarization, translation, and more.\n• Model Fine-Tuning: Customize state-of-the-art models like BERT, RoBERTa, and GPT for your industry-specific use cases.\n• Inference APIs: Deploy models via managed endpoints for real-time usage in your applications.\n• Open Model Hosting: Host, manage, and version your proprietary or open-source models securely.\n\nWhether it's chatbots, sentiment analysis, or document intelligence, our Hugging Face integrations help you deploy AI with transparency and speed."
        },

        "redhat": {
            mainContent: "Our collaboration with Red Hat enables enterprises to modernize infrastructure, automate operations, and orchestrate containerized workloads at scale. Whether it’s with OpenShift for hybrid cloud or Ansible for IT automation, Chimon Solutions brings operational agility to your DevSecOps pipeline.",
            solutions: "We offer Red Hat-powered services in:\n\n• Hybrid Cloud Enablement: Deploy OpenShift to unify on-prem and cloud-native applications under a single control plane.\n• IT Automation with Ansible: Automate infrastructure provisioning, application deployment, and configuration management with repeatable playbooks.\n• CI/CD Pipelines: Build scalable DevSecOps pipelines integrated with OpenShift’s GitOps workflows.\n• Governance & Compliance: Maintain consistent security policies and configurations across environments using Ansible Automation Platform.\n\nOur certified Red Hat consultants ensure faster time-to-value while reducing operational risk in complex enterprise ecosystems."
        }

    };


    const cleanSlug = slug ? slug.replace(/\/$/, "").toLowerCase() : "";

    const currentContent = contentBySlug[cleanSlug as keyof typeof contentBySlug] || {
        solutions: "Solutions not available for this service."
    };

    const tabContent = {
        solutions: (
            <div style={{ opacity: 1, transition: "opacity 0.5s ease" }}>
                {currentContent.solutions.split('\n\n').map((paragraph, index) => (
                    <p
                        key={index}
                        style={{
                            marginBottom: "16px",
                            fontSize: "18px",
                            color: "#444"
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        ),
    };


    const getServiceName = () => {
        if (!cleanSlug) return "Partnership";

        const parts = cleanSlug.split('-');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };


    const bannerStyles: React.CSSProperties = {
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
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderBottom: "3px solid #007bff"
    };
    const containerStyles = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        backgroundColor: "#ffffff",
        color: "#333",
        lineHeight: 1.6
    };

    const sectionStyles = {
        padding: "40px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        borderRadius: "8px",
        backgroundColor: "#fff"
    };

    const tabsContainerStyles = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        borderBottom: "2px solid #eaeaea",
        backgroundColor: "#f8f9fa"
    };

    const contentStyles = {
        padding: "40px 30px",
        maxWidth: "900px",
        margin: "0 auto",
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#444",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        transition: "all 0.3s ease"
    };

    return (
        <div style={containerStyles}>
            {/* Banner */}
            <section style={bannerStyles} aria-label="Partnership Banner">
                <div>
                    <h1 style={{ marginBottom: "8px", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}>
                        {getServiceName()}
                    </h1>
                    <p style={{ fontSize: "16px" }}>
                        Comprehensive IT solutions driven by strategic partnerships
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section style={contentStyles} aria-label="Solutions Section">
                {tabContent[activeTab as keyof typeof tabContent]}
            </section>
        </div>

    );
}