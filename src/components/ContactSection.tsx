/* eslint-disable */



import React, { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    interface FormData {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
    }

    interface ChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }

    const handleChange = (e: ChangeEvent): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email) {
            alert("Please fill in required fields.");
            return;
        }

        try {
            const response = await fetch("/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                alert("Message sent successfully!");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
            } else {
                alert("Failed to send message.");
                console.error(result);
            }
        } catch (error) {
            alert("An error occurred while sending your message.");
            console.error(error);
        }
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "auto" }}>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    backgroundColor: "#2F3E83",
                    color: "#ffffff",
                    padding: "60px 20px",
                    flex: 1, // Takes up half the page
                }}
            >

                <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Message Us</h1>
                    <p style={{ fontSize: "18px", maxWidth: "600px", marginBottom: "8px" }}>
                        We’ll get back to you within 24 hours guaranteed.
                    </p>
                    <p style={{ fontSize: "16px", maxWidth: "600px", marginBottom: "24px" }}>
                        If the chat doesn't open on the bottom right, please disable any extensions or try another browser.
                    </p>
                </div>


                <div
                    style={{
                        flex: 1,
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        padding: "40px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                            <div style={{ flex: 1 }}>
                                <label>Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", padding: "8px" }}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label>Last</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    style={{ width: "100%", padding: "8px" }}
                                />
                            </div>
                        </div>

                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
                        />

                        <label>Comment or Message</label>
                        <textarea
                            name="message"
                            placeholder="Your message..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
                        />

                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#2F3E83",
                                color: "#ffffff",
                                fontSize: "16px",
                                padding: "10px",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                width: "100%",
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>


            <div
                style={{
                    backgroundColor: "#f5f6fa",
                    padding: "60px 20px",
                    textAlign: "center",
                    flex: 1, // Takes up the other half of the page
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>Call Us</h2>
                <p style={{ fontSize: "16px", marginBottom: "40px" }}>
                    Monday to Friday: 9AM - 6PM EST
                </p>


                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {[

                        {
                            label: "IND",
                            // phone: "+1-972-634-0122",
                            address: "Capital Park Rd, Madhapur, Hyderabad - 500081",
                            icon: "🇮🇳",
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                padding: "20px",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "left",
                            }}
                        >
                            <div style={{ marginRight: "20px", fontSize: "48px" }}>
                                {item.icon}
                            </div>
                            <div>
                                <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>
                                    {item.label}
                                </div>
                                <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>
                                    {item.phone}
                                </div>
                                <div style={{ fontSize: "14px", whiteSpace: "pre-line", fontWeight: "bold" }}>
                                    {item.address}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
