/* eslint-disable */
import React, { useState, JSX } from "react";
import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";
import { FeaturesSectionWithHoverEffectsServices } from "./ui/feature-section-with-hover-effects-services";

export default function NavContentIndustries({ slug }: { slug: string }) {
    console.log('slug inside', slug);
    const [activeTab, setActiveTab] = useState("solutions");


    const contentBySlug = {

        "automotive": {
            mainContent: "Accelerating the Future of Automotive Technology",
            solutions: "In the automotive industry, digital transformation is driving innovation in vehicle development, production, and customer experiences. Chimon Solutions provides cutting-edge IT solutions that leverage AI, IoT, and machine learning to improve everything from manufacturing efficiency to connected vehicle technology."
        },
        "government": {
            mainContent: "Enabling Digital Transformation in Government",
            solutions: "Governments around the world are adopting digital transformation to improve service delivery, enhance security, and increase transparency. Chimon Solutions supports government agencies with advanced IT solutions that improve public services, ensure data security, and streamline administrative processes. From cloud migration to AI-driven citizen services, we help governments become more efficient and responsive."
        },
        "media-and-entertainment": {
            mainContent: "Empowering Media with Technology Solutions",
            solutions: "The media and entertainment industry thrives on engaging content and personalized experiences. Chimon Solutions delivers IT solutions that enable content creators, broadcasters, and digital platforms to leverage data, cloud technology, and AI to deliver personalized experiences at scale. Our solutions help media companies optimize content creation, delivery, and audience engagement."
        },
        "telecommunications": {
            mainContent: "Optimizing Telecommunications with Next-Gen Technology",
            solutions: "As telecommunications networks evolve to meet growing demands, Chimon Solutions delivers IT solutions that optimize network performance, enhance customer experiences, and improve service delivery. From cloud-based solutions to AI-powered customer engagement, we provide the technology and expertise that telecom companies need to stay competitive in a rapidly changing industry."
        },
        "education": {
            mainContent: "Revolutionizing Education with Technology",
            solutions: "The education sector is rapidly evolving, and Chimon Solutions helps institutions leverage technology to enhance learning experiences, streamline administration, and enable digital transformation. From online learning platforms to AI-driven tools that improve student outcomes, we provide comprehensive IT solutions designed to meet the needs of modern education."
        },
        "healthcare": {
            mainContent: "Empowering Healthcare with Innovative IT Solutions",
            solutions: "The healthcare industry is undergoing rapid transformation, and Chimon Solutions is at the forefront of this change. We help healthcare organizations enhance patient care, streamline operations, and maintain regulatory compliance through our comprehensive IT solutions. From implementing advanced data management systems to leveraging AI and predictive analytics for better diagnosis and patient outcomes, we are dedicated to improving the healthcare experience for both providers and patients."
        },
        "retail-and-e-commerce": {
            mainContent: "Enhancing Customer Experiences with Smart Technology",
            solutions: "The retail and e-commerce industries thrive on personalized customer experiences, and Chimon Solutions delivers the technology to make that happen. We help businesses leverage AI, machine learning, and data analytics to optimize operations, improve customer engagement, and drive sales. Our end-to-end solutions enable retailers to manage everything from inventory to customer personalization, providing a seamless shopping experience across all channels."
        },
        "finance-and-banking": {
            mainContent: "Driving Digital Transformation in Finance",
            solutions: "In the fast-paced world of finance and banking, Chimon Solutions delivers secure, scalable, and compliant solutions that enable institutions to adapt to evolving customer expectations and regulatory requirements. Whether through AI-powered fraud detection, cloud migration, or robust data security measures, we provide the technology and strategies to help financial institutions operate efficiently and securely in today's digital-first world."
        },
        "manufacturing": {
            mainContent: "Optimizing Manufacturing with Digital Transformation",
            solutions: "Manufacturing is increasingly reliant on digital solutions to optimize production and supply chains. Chimon Solutions provides comprehensive IT services that help manufacturers embrace Industry 4.0 through IoT, predictive maintenance, automation, and data analytics. We empower manufacturers to drive efficiency, reduce downtime, and enhance productivity."
        },
        "technology-and-software-development": {
            mainContent: "Driving Innovation in Technology Development",
            solutions: "Chimon Solutions partners with technology and software development companies to accelerate innovation and bring cutting-edge products to market. From DevOps and cloud solutions to AI and machine learning, we provide the tools and expertise that technology companies need to build, deploy, and scale software quickly and efficiently."
        },


        "backup-and-disaster-recovery": {
            mainContent: "In today's fast-paced digital world, data loss can happen in an instant—from cyberattacks to natural disasters. Chimon Solutions's Backup and Disaster Recovery services offer a robust solution to ensure your critical business data is always secure, protected, and easily recoverable in case of any unforeseen event. Whether you're dealing with accidental data deletion or facing a catastrophic disaster, we help you safeguard your most valuable asset—your data.",
            solutions: "Chimon Solutions provides cloud-based backup options for businesses looking for real-time synchronization and easy remote access to their data. For those preferring local storage, our on-premises backup solutions ensure that your data is securely stored and instantly accessible on-site. Additionally, our hybrid backup approach offers the best of both worlds, combining the flexibility of cloud storage with the reliability of local storage for enhanced security and redundancy.\n\nWe go beyond simple backups by creating comprehensive disaster recovery strategies that minimize downtime and ensure fast restoration of your systems. Our automated backup scheduling allows you to focus on your business while we handle the security of your data in the background."
        },
        "help-desk-support": {
            mainContent: "Chimon Solutions's Help Desk Support services are designed to provide your business with a dedicated, reliable support system that resolves IT issues quickly and effectively. Our expert team is available to handle technical issues, troubleshoot problems, and provide solutions that ensure your operations remain uninterrupted. With a customer-focused approach, we deliver personalized support that minimizes downtime and enhances productivity.",
            solutions: "Our Help Desk Support offers a comprehensive solution to meet the needs of businesses of all sizes. Whether it's resolving hardware or software issues, answering technical queries, or providing remote assistance, our team is ready to respond with speed and expertise. We provide both tiered and 24/7 support models, ensuring that your business receives timely help when you need it most. Additionally, our ticketing system allows for efficient tracking and prioritization of issues, leading to faster resolutions and improved customer satisfaction.\n\nWe believe in offering flexible support models, whether through phone, email, or live chat, so that your team can reach us using their preferred method. Our Help Desk Support also provides proactive maintenance services, identifying potential issues before they impact your business operations."
        },
        "network-management": {
            mainContent: "Chimon Solutions's Network Management services ensure that your business's IT infrastructure operates at peak performance. Our team of experts monitors, manages, and optimizes your network to guarantee secure and uninterrupted connectivity. Whether it's local area networks (LAN), wide area networks (WAN), or wireless systems, we provide proactive solutions that help your business stay connected, productive, and protected.",
            solutions: "Our Network Management services cover the full spectrum of your network needs. We monitor network performance in real-time, ensuring any issues are detected and resolved before they cause disruptions. With advanced tools and analytics, we manage bandwidth allocation to optimize network speed and efficiency across your organization. Our security protocols protect your network from unauthorized access, malware, and cyberattacks, keeping your business safe.\n\nWe also provide configuration and management of both hardware and software, ensuring that routers, switches, firewalls, and other network components are properly maintained. Remote troubleshooting is available for immediate resolution of any network issues, minimizing downtime. Additionally, we offer network scalability solutions that grow with your business, ensuring your infrastructure is always ready to meet new demands."
        },
        "security-management": {
            mainContent: "Chimon Solutions's Security Management services provide comprehensive protection for your business's IT infrastructure. As cyber threats continue to evolve, we ensure that your systems, data, and network remain secure from malicious attacks. From real-time threat detection to data encryption and compliance, our security solutions are designed to safeguard your business's most valuable assets, giving you peace of mind and allowing you to focus on your core operations.",
            solutions: "We offer a robust suite of Security Management solutions tailored to protect your organization. Our services include continuous network monitoring and real-time threat detection to identify and neutralize potential risks before they cause harm. Our firewalls and intrusion detection systems provide an additional layer of defense, preventing unauthorized access to your systems. We also implement advanced encryption methods to ensure sensitive data is secure, both in transit and at rest.\n\nTo further protect your business, we provide regular security audits and vulnerability assessments to identify and address weaknesses in your infrastructure. In addition, we offer compliance management to help your business adhere to industry regulations and data protection laws, ensuring that your security measures meet the highest standards. Our incident response team is always ready to act swiftly in case of any breaches, minimizing damage and restoring normal operations as quickly as possible."
        },
        "change-management": {
            mainContent: "Chimon Solutions's Change Management services help businesses smoothly implement organizational, process, and technological changes. In today's rapidly evolving business environment, adapting to change is crucial for growth and success. Our comprehensive approach ensures that transitions are managed efficiently, with minimal disruption to your operations. From strategy development to execution, we guide your business through change, empowering your team to embrace innovation and transformation.",
            solutions: "Our Change Management solutions are designed to address the unique needs of your business. We start by developing a clear strategy that aligns with your goals, ensuring that all stakeholders are informed and engaged throughout the process. Our team provides structured planning and communication tools to ensure that changes are introduced smoothly and with minimal disruption.\n\nWe specialize in managing various types of change, including organizational restructuring, process re-engineering, and the adoption of new technologies. With our expert guidance, your business can overcome resistance to change, streamline operations, and ensure that new processes are implemented effectively. We also offer training and support for your team, helping them adapt quickly and confidently to new systems and procedures."
        },
        "digital-strategy-development": {
            mainContent: "Chimon Solutions's Digital Strategy Development services provide businesses with a comprehensive roadmap to harness the power of digital technologies and achieve their long-term goals. In an increasingly digital world, a well-defined digital strategy is key to staying competitive. We help you identify the right tools, platforms, and processes to drive growth, enhance customer experiences, and streamline operations, ensuring that your business is equipped to succeed in the digital age.",
            solutions: "Our Digital Strategy Development solutions are designed to create a holistic approach to digital transformation. We begin by assessing your business's current digital capabilities and identifying gaps that need to be addressed. From there, we design a tailored strategy that aligns with your goals, focusing on areas such as digital marketing, customer engagement, operational efficiency, and technology integration.\n\nWe leverage emerging technologies like AI, cloud computing, and data analytics to help you innovate and improve business performance. Additionally, we ensure your strategy includes the right digital tools for improving customer engagement, enhancing user experiences, and driving e-commerce success. By integrating digital tools across all functions of your business, we position your company to excel in an evolving digital landscape."
        },
        "process-automation": {
            mainContent: "Chimon Solutions's Process Automation services empower businesses to enhance productivity and reduce manual workloads by automating repetitive tasks. By leveraging cutting-edge technologies, we help streamline processes, optimize workflows, and eliminate inefficiencies, allowing your team to focus on more strategic, high-value activities. Whether it's automating routine administrative tasks or complex business processes, we provide tailored solutions that transform how your business operates.",
            solutions: "Our Process Automation solutions are designed to simplify and optimize business operations. We begin by assessing your current workflows and identifying opportunities for automation. Using technologies such as Robotic Process Automation (RPA), AI, and machine learning, we create systems that handle repetitive tasks like data entry, invoicing, customer communication, and reporting with speed and accuracy.\n\nIn addition to basic task automation, we also offer end-to-end automation for more complex processes, such as supply chain management, human resources, and financial operations. By integrating automation tools into your existing systems, we ensure seamless functionality, improved accuracy, and enhanced operational efficiency. We also provide ongoing monitoring and optimization to ensure the automation systems continue to deliver maximum value."
        },
        "technology-selection-and-implementation": {
            mainContent: "Chimon Solutions's Technology Selection and Implementation services guide businesses in choosing and integrating the most suitable technology solutions to meet their unique needs. In an ever-evolving technological landscape, making informed decisions about technology investments is crucial for operational success. Our expert team helps you navigate the complexities of technology selection and ensures seamless implementation, allowing you to leverage the latest innovations to drive growth and efficiency.",
            solutions: "Our Technology Selection and Implementation services begin with a comprehensive assessment of your business requirements, current infrastructure, and future goals. We work closely with you to identify the technologies that align with your objectives, whether it's cloud computing, software applications, or hardware solutions.\n\nOnce the right technologies are selected, we provide end-to-end implementation services, ensuring that systems are integrated smoothly into your existing operations. Our team handles everything from system configuration and customization to user training and support. We prioritize minimizing disruption during the transition, ensuring that your team can continue to operate efficiently while adopting new technologies."
        },
        "containerization-and-orchestration": {
            mainContent: "Chimon Solutions's Containerization and Orchestration services provide businesses with cutting-edge solutions to optimize application deployment, scaling, and management. By leveraging container technology, we help you create lightweight, portable applications that can run consistently across various environments. Our orchestration solutions ensure seamless management of containerized applications, enhancing efficiency and scalability in your operations.",
            solutions: "Our Containerization and Orchestration services focus on transforming your application deployment processes. We begin by assessing your existing applications and infrastructure to identify opportunities for containerization. Our team utilizes technologies such as Docker for containerization, allowing you to package applications and their dependencies into isolated containers that can be easily deployed across different environments.\n\nOnce your applications are containerized, we implement orchestration solutions, such as Kubernetes, to manage the deployment, scaling, and operation of your containerized applications. Our orchestration services automate the management of containers, ensuring efficient resource utilization, load balancing, and automatic scaling based on demand. This streamlined approach not only improves deployment times but also enhances the reliability and performance of your applications."
        },
        "continuous-integration-and-continuous-deployment-ci-cd": {
            mainContent: "Chimon Solutions's Continuous Integration and Continuous Deployment (CI/CD) services streamline your software development process, enabling faster and more reliable application delivery. By implementing CI/CD practices, we help your development teams automate testing and deployment, ensuring that code changes are integrated and delivered to production quickly and efficiently. This approach not only improves collaboration but also enhances the overall quality of your software products.",
            solutions: "Our CI/CD services encompass a comprehensive strategy designed to optimize your software development lifecycle. We begin by assessing your current development processes and identifying areas for improvement. Our team then implements CI/CD pipelines that automate the build, test, and deployment processes, reducing manual intervention and minimizing the risk of errors.\n\nUsing industry-standard tools like Jenkins, GitLab CI, and CircleCI, we set up automated testing frameworks that ensure code quality at every stage of development. Our deployment strategies facilitate seamless integration into production environments, allowing for frequent and reliable releases. Additionally, we provide monitoring and feedback mechanisms to track application performance and user feedback, enabling continuous improvement of your software solutions."
        },
        "infrastructure-as-code-iac": {
            mainContent: "Chimon Solutions's Infrastructure as Code (IaC) services empower businesses to manage and provision their IT infrastructure through code, ensuring consistency, scalability, and agility in operations. By automating infrastructure management, we help you reduce manual processes, minimize errors, and accelerate deployment times. Our IaC solutions enable your team to focus on innovation while ensuring reliable and repeatable infrastructure configurations.",
            solutions: "Our IaC services begin with a thorough assessment of your existing infrastructure and operational requirements. We utilize industry-standard tools such as Terraform, Ansible, and AWS CloudFormation to define and manage your infrastructure through code. This approach allows you to version control your infrastructure, making it easy to track changes and maintain a history of configurations.\n\nWe implement best practices for IaC, ensuring that your infrastructure is not only automated but also secure and compliant. Our team designs modular, reusable code components that enable rapid provisioning of resources, from servers and databases to networking configurations. Additionally, we provide ongoing support and optimization to ensure that your infrastructure remains aligned with your evolving business needs."
        },
        "monitoring-and-logging": {
            mainContent: "Chimon Solutions's Monitoring and Logging services provide businesses with the tools and insights needed to maintain optimal performance and ensure the reliability of their IT systems. By implementing robust monitoring and logging practices, we help you detect and respond to issues proactively, ensuring that your applications and infrastructure operate smoothly. Our solutions empower your team to gain deep visibility into system performance, security, and user activity.",
            solutions: "Our Monitoring and Logging services begin with a thorough assessment of your existing infrastructure and application landscape. We utilize advanced monitoring tools such as Prometheus, Grafana, and ELK Stack to collect, analyze, and visualize data from your systems in real time. Our approach ensures that you can monitor key performance indicators (KPIs), application metrics, and infrastructure health effectively.\n\nWe implement comprehensive logging solutions that capture detailed information about system events, transactions, and errors. This data is crucial for troubleshooting issues, conducting audits, and ensuring compliance. Our team configures alerts and dashboards tailored to your specific needs, enabling you to monitor system health and performance proactively."
        },
        "capacity-planning-and-optimization": {
            mainContent: "Chimon Solutions's Capacity Planning and Optimization services enable businesses to effectively manage their resources and ensure they are prepared for future demands. By analyzing current resource utilization and forecasting future needs, we help you optimize your infrastructure and operations. Our solutions ensure that you have the right resources in place to support your business goals without overspending or underutilizing assets.",
            solutions: "Our Capacity Planning and Optimization services begin with a comprehensive assessment of your existing infrastructure and resource utilization patterns. We utilize advanced analytics and modeling tools to evaluate current performance metrics and identify trends that may impact capacity needs. Our team collaborates with you to define key performance indicators (KPIs) and service level agreements (SLAs) that guide your capacity planning efforts.\n\nOnce we have a clear understanding of your resource requirements, we develop tailored strategies to optimize your infrastructure. This includes recommendations for scaling resources, enhancing system configurations, and implementing load balancing techniques to improve performance. We also provide ongoing monitoring to ensure that your infrastructure adapts to changing demands efficiently."
        },
        "data-center-operations": {
            mainContent: "Chimon Solutions's Data Center Operations services provide comprehensive management and optimization of your data center environment. Our solutions ensure that your infrastructure operates at peak efficiency while maintaining reliability, security, and scalability. By leveraging industry best practices, we help you maximize the performance of your data center while minimizing operational costs.",
            solutions: "Our Data Center Operations services begin with a thorough assessment of your existing data center infrastructure. We evaluate hardware, software, network configurations, and operational processes to identify areas for improvement. Our team then implements robust monitoring and management tools to ensure that your data center runs smoothly.\n\nWe focus on optimizing power and cooling management, improving physical security measures, and streamlining maintenance processes. Our solutions also include capacity planning and resource allocation strategies to ensure that your data center can scale efficiently as your business grows. We provide ongoing support and incident management to address any issues promptly, ensuring minimal disruption to your operations."
        },
        "data-center-security-management": {
            mainContent: "Chimon Solutions's Data Center Security Management services ensure the safety and integrity of your critical data and infrastructure. With increasing threats in today's digital landscape, our solutions provide robust security measures designed to protect your data center from physical and cyber threats. We focus on implementing best practices and cutting-edge technologies to safeguard your assets and maintain compliance with industry standards.",
            solutions: "Our Data Center Security Management services begin with a thorough assessment of your existing security posture. We evaluate physical security measures, network security protocols, and access controls to identify vulnerabilities. Our team develops a comprehensive security strategy that encompasses both physical and cyber security layers.\n\nWe implement advanced security solutions, including surveillance systems, access control mechanisms, and intrusion detection systems for physical security. On the cyber side, we deploy firewalls, encryption, and security information and event management (SIEM) tools to monitor and protect against potential threats. Regular security audits and compliance assessments are conducted to ensure that your data center adheres to regulatory requirements and industry best practices."
        },
        "disaster-recovery-planning": {
            mainContent: "Chimon Solutions's Disaster Recovery Planning services help organizations prepare for and respond to unexpected disruptions. In an increasingly unpredictable environment, having a robust disaster recovery plan is essential to safeguard your critical operations and data. Our solutions are designed to minimize downtime, protect valuable assets, and ensure that your business can recover quickly from adverse events.",
            solutions: "Our Disaster Recovery Planning services begin with a comprehensive assessment of your current infrastructure, applications, and data. We work closely with you to identify critical business functions and the potential risks that could impact them. Based on this analysis, we develop a tailored disaster recovery strategy that outlines recovery objectives, processes, and responsibilities.\n\nWe implement a variety of recovery solutions, including data backups, failover mechanisms, and cloud-based recovery options, ensuring that your data is secure and accessible in the event of a disaster. Our team conducts regular testing of your disaster recovery plan to ensure its effectiveness, making necessary adjustments based on changing business needs or advancements in technology."
        },
        "ai-model-development-and-training": {
            mainContent: "The future of business lies in leveraging artificial intelligence to solve complex challenges, optimize operations, and deliver personalized experiences. Chimon Solutions's AI Model Development and Training services provide businesses with custom-built AI models tailored to their specific needs. By harnessing advanced machine learning, deep learning, and neural networks, we develop intelligent models that can predict trends, automate tasks, and deliver actionable insights.",
            solutions: "At Chimon Solutions, we specialize in developing AI models that fit seamlessly into your business ecosystem. Our AI Model Development and Training services include:\n\nCustom AI Model Development: We build AI models from the ground up based on your unique business requirements, whether you need predictive analytics, natural language processing, or image recognition capabilities.\n\nMachine Learning Model Training: Using vast datasets, we train models to recognize patterns and make predictions with accuracy. Our training process ensures that models continuously improve as they process more data.\n\nNatural Language Processing (NLP): Develop AI systems that understand, interpret, and generate human language for applications such as chatbots, virtual assistants, and sentiment analysis.\n\nImage and Video Recognition: Build AI models capable of detecting objects, facial features, or movements in real-time, transforming sectors like security, healthcare, and retail.\n\nRecommendation Engines: Develop AI-powered recommendation systems to deliver personalized product suggestions and improve user experiences in eCommerce, media, and content-driven platforms.\n\nOur expertise ensures that your AI model is perfectly aligned with your operational goals, whether it's to enhance customer interactions, streamline operations, or provide deep data insights."
        },
        "computer-vision": {
            mainContent: "Transition to the cloud with confidence. Our Cloud Migration Services ensure a smooth, secure, and efficient migration, minimizing downtime and maximizing the benefits of cloud computing.",
            solutions: "Chimon Solutions's Cloud Readiness Assessment delivers in-depth analysis and tailored recommendations to help your organization make informed decisions about cloud adoption. Our key offerings include:\n\nInfrastructure Evaluation: We assess your current IT infrastructure to determine its suitability for cloud migration, ensuring it can support the scalability and flexibility cloud environments offer.\n\nApplication Compatibility: Our experts evaluate the compatibility of your existing applications and software with cloud platforms, providing insights into which systems can be migrated and which may require re-engineering.\n\nCost-Benefit Analysis: We perform a detailed analysis of potential cost savings and ROI from migrating to the cloud, allowing you to plan your cloud journey effectively.\n\nSecurity and Compliance Review: Our team reviews your current security protocols and compliance requirements to ensure that the move to the cloud aligns with regulatory standards and enhances data protection.\n\nMigration Strategy Development: Based on the assessment results, we craft a customized cloud migration strategy, outlining the necessary steps, timelines, and resources to ensure a smooth transition.\n\nThese solutions enable businesses to confidently embark on their cloud transformation, knowing that all aspects of their environment have been evaluated for readiness."
        },
        "natural-language-processing-nlp": {
            mainContent: "In an increasingly digital world, the ability to bridge the gap between human language and machines is a key factor for success. Chimon Solutions's Natural Language Processing (NLP) solutions enable your business to leverage the power of AI to understand, interpret, and respond to natural language inputs. From chatbots and virtual assistants to sentiment analysis and language translation, our NLP services provide your organization with the tools to interact with customers in a meaningful, intuitive way.",
            solutions: "At Chimon Solutions, we use advanced NLP technologies to build solutions that drive smarter communication and better customer experiences. Our NLP services include:\n\nChatbots & Virtual Assistants: Enhance customer interactions with AI-powered chatbots that understand and respond to natural language queries in real-time.\n\nSentiment Analysis: Gain insights into customer feedback by analyzing reviews, social media comments, and surveys to understand the sentiment behind the words.\n\nText and Speech Recognition: Enable accurate transcription and interpretation of spoken language, making it easier to convert speech into actionable data.\n\nMachine Translation: Automatically translate content into multiple languages with high accuracy, making it easier to engage with a global audience.\n\nContent Categorization: Automate the classification of large amounts of text into relevant categories, enabling more efficient data management and retrieval.\n\nOur NLP solutions are designed to streamline communication processes, provide actionable insights, and deliver personalized customer experiences across various touchpoints."
        },
        "predictive-analytics": {
            mainContent: "Leverage the power of predictive analytics to anticipate trends, identify opportunities, and make data-driven decisions. Our solutions help you stay ahead of the curve in a rapidly changing market.",
            solutions: "At Chimon Solutions, our Predictive Analytics services are designed to provide organizations with a forward-thinking approach to decision-making. Our solutions are crafted to meet the specific challenges of your industry and business model. We offer:\n\nCustomer Insights & Churn Prediction: Analyze customer behavior to forecast future purchasing decisions and identify those at risk of leaving, enabling proactive engagement strategies.\n\nSales and Demand Forecasting: Utilize historical sales data and market trends to predict future demand, helping businesses optimize inventory and streamline operations.\n\nRisk Assessment & Fraud Detection: Predict potential risks by identifying patterns that signal fraud, financial instability, or operational inefficiencies, allowing for timely intervention.\n\nMarketing Optimization: Enhance marketing strategies by predicting which campaigns and offers will resonate with customers, maximizing conversion rates.\n\nOperational Efficiency: Anticipate equipment maintenance needs, optimize staffing levels, and manage resources based on data-driven forecasts.\n\nOur team utilizes cutting-edge tools and techniques such as machine learning, regression models, time-series forecasting, and data mining to develop predictive models that address your unique business challenges."
        },
        "application-migration-and-modernization": {
            mainContent: "As businesses evolve, so do their technological needs. Legacy applications, while essential in the past, may not be able to keep up with the demands of modern, cloud-based environments. Chimon Solutions's Application Migration and Modernization service enables organizations to upgrade their applications and systems to meet today's performance, scalability, and security standards. Whether it's migrating to the cloud, re-architecting existing applications, or modernizing outdated systems, we ensure a smooth and future-proof transition.",
            solutions: "Our comprehensive Application Migration and Modernization solutions cover every aspect of transforming your legacy systems into modern, efficient applications that are cloud-ready and scalable:\n\nLegacy Application Migration: We migrate your existing applications to cloud platforms or more modern environments, ensuring seamless functionality and improved performance.\n\nApplication Re-Engineering: Our team re-engineers and optimizes legacy applications to meet today's standards, enhancing speed, security, and usability.\n\nCloud-Native Application Development: We help you transition legacy applications into cloud-native models, utilizing containerization and microservices architecture to increase flexibility and scalability.\n\nSystem Integration: We ensure seamless integration of your modernized applications with existing infrastructure and third-party services, enhancing overall efficiency.\n\nApplication Modernization Consulting: We provide consulting services to assess which parts of your application portfolio need upgrading and how to best approach modernization.\n\nThese solutions ensure your applications are optimized for the demands of modern business, supporting growth and adaptability."
        },
        "migration-planning-and-strategy": {
            mainContent: "Moving to the cloud requires careful planning and execution to ensure a smooth transition without disruption to your business operations. Chimon Solutions's Migration Planning and Strategy service provides organizations with a comprehensive approach to migrating their infrastructure, applications, and data to the cloud. Our strategic framework is designed to minimize risks, reduce downtime, and optimize your migration process, ensuring your business fully capitalizes on the cloud's potential.",
            solutions: "At Chimon Solutions, we deliver custom-tailored migration solutions that ensure a successful shift to cloud-based systems. Our Migration Planning and Strategy includes:\n\nComprehensive Migration Assessment: We start by thoroughly assessing your existing IT landscape, applications, and workloads to understand their cloud compatibility and identify key areas for improvement.\n\nCustomized Migration Roadmap: Our experts create a step-by-step migration strategy based on your business needs, outlining clear timelines, resources, and the best cloud deployment models.\n\nRisk Mitigation: We identify and address potential risks involved in migration, from data loss to security vulnerabilities, ensuring that your transition is seamless and safe.\n\nData Migration Strategy: Whether it's a lift-and-shift, refactor, or re-platforming, we develop a data migration plan tailored to your business requirements, ensuring minimal disruption and maximum data integrity.\n\nPost-Migration Support: Our service doesn't stop after the migration. We offer continued support to fine-tune the environment, address performance issues, and provide additional optimization as needed.\n\nWith our strategic approach, businesses can move to the cloud with confidence, knowing that their migration is backed by proven processes and expert guidance."
        }
    };


    const cleanSlug = slug ? slug.replace(/\/$/, "") : "";

    const currentContent = cleanSlug && cleanSlug in contentBySlug ? contentBySlug[cleanSlug as keyof typeof contentBySlug] : {
        mainContent: "Content not available for this service.",
        solutions: "Solutions not available for this service."
    };

    const tabContent = {
        solutions: <div>{currentContent.solutions.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>,
    };


    const getServiceName = () => {
        const parts = cleanSlug.split('-');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", backgroundColor: "#ffffff" }}>

            <div
                style={{
                    backgroundImage: "url('/aboutus.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "280px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "30px",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(8px)",
                        background: "rgba(0, 0, 0, 0.4)"
                    }}
                ></div>
                <div style={{ zIndex: 1 }}>
                    <h1 style={{ marginBottom: "8px", fontSize: "36px", letterSpacing: "1px" }}>
                        {getServiceName()}
                    </h1>
                    <p style={{ fontSize: "16px", opacity: "0.9" }}>
                        Comprehensive IT services tailored for your business success
                    </p>
                </div>
            </div>


            <div style={{ padding: "50px 20px 30px", maxWidth: "900px", margin: "0 auto" }}>
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        textAlign: "center",
                        color: "#2F3E83",
                        animation: "fadeInUp 0.8s ease-in-out"
                    }}
                >
                    Overview
                </h2>
                <p
                    style={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                        color: "#555",
                        animation: "fadeIn 1s ease-in-out"
                    }}
                >
                    {currentContent.mainContent}
                </p>
            </div>


            <div style={{ padding: "30px 20px", maxWidth: "900px", margin: "0 auto" }}>
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        textAlign: "center",
                        color: "#2F3E83",
                        animation: "fadeInUp 0.8s ease-in-out"
                    }}
                >
                    Our Solutions
                </h2>
                <div
                    style={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                        color: "#555",
                        animation: "fadeIn 1s ease-in-out"
                    }}
                >
                    {currentContent.solutions.split("\n\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <FeaturesSectionWithHoverEffectsServices />


            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </div>
    );
}