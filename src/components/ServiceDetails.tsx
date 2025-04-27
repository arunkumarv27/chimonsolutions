/* eslint-disable */

"use client";
import React, { JSX, useState } from "react";


type TabKey = "solutions" | "benefits" | "workflow" | "chooseUs";



const solutionsData: Record<string, JSX.Element> = {
  "Backup and Disaster Recovery": (
    <>
      <p>
        In today’s fast-paced digital world, data loss can happen in an instant—from
        cyberattacks to natural disasters. Chimon Solutions’s Backup and Disaster Recovery
        services offer a robust solution...
      </p>

    </>
  ),
  "Help Desk Support": (
    <>
      <p>
        Chimon Solutions’s Help Desk Support services are designed to provide your
        business with a dedicated, reliable support system...
      </p>

    </>
  ),
  "Network Management": (
    <>
      <p>
        Chimon Solutions’s Network Management services ensure that your business’s
        IT infrastructure operates at peak performance...
      </p>

    </>
  ),
  "Security Management": (
    <>
      <p>
        Chimon Solutions’s Security Management services provide comprehensive protection
        for your business’s IT infrastructure...
      </p>

    </>
  ),

};


const benefitsContent = (
  <>
    <h2>Benefits</h2>
    <p>
      By partnering with Chimon Solutions, you gain access to cutting-edge technology,
      reduced downtime, and a customized service model that aligns with your business goals.
    </p>
  </>
);

const workflowContent = (
  <>
    <h2>Our Workflow</h2>
    <p>
      We begin by assessing your current IT infrastructure and identifying business needs.
      We then implement tailored solutions...
    </p>
  </>
);

const chooseUsContent = (
  <>
    <h2>Why Choose Us</h2>
    <p>
      At Chimon Solutions, we understand that your IT infrastructure is the backbone of your business.
      We take the complexity out of technology management...
    </p>
  </>
);

interface ServiceDetailsProps {
  serviceName: string;   // e.g. "Backup and Disaster Recovery"
  subheading?: string;   // optional text for the banner
}

export default function ServiceDetails({ serviceName, subheading }: ServiceDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("solutions");


  const tabContent: Record<TabKey, JSX.Element> = {
    solutions: solutionsData[serviceName] || <p>No data found for {serviceName}.</p>,
    benefits: benefitsContent,
    workflow: workflowContent,
    chooseUs: chooseUsContent,
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>

      <div
        style={{
          backgroundImage: "url('./aboutus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>{serviceName}</h1>
        {subheading && <p style={{ fontSize: "16px", margin: 0 }}>{subheading}</p>}
      </div>


      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
        {([
          { key: "solutions" as TabKey, label: "Our Solutions" },
          { key: "benefits" as TabKey, label: "Benefits" },
          { key: "workflow" as TabKey, label: "Our Workflow" },
          { key: "chooseUs" as TabKey, label: "Why Choose Us" },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: activeTab === tab.key ? "#007bff" : "transparent",
              color: activeTab === tab.key ? "#fff" : "#007bff",
              border: `2px solid ${activeTab === tab.key ? "#007bff" : "#ccc"}`,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        {tabContent[activeTab]}
      </div>
    </div>
  );
}
