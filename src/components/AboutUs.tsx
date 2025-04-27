import React from "react";

export default function AboutUs() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", backgroundColor: "#ffffff", padding: "60px 20px" }}>

            <div
                style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: "url('./aboutus.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "rotate(-3deg)",
                    position: "relative",
                }}
            />


            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "60px 20px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >

                <div style={{ flex: 1, minWidth: "300px", paddingRight: "40px" }}>
                    <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px" }}>Who We Are</h2>
                    <h3 style={{ fontSize: "24px", color: "#F26622", fontWeight: "bold" }}>
                        Transforming Businesses Through Technology
                    </h3>
                </div>


                <div style={{ flex: 2, minWidth: "300px" }}>
                    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                        At <strong>Chimon Solutions Inc.</strong>, we are committed to helping businesses thrive in the digital age through <strong>strategic IT consulting, cutting-edge technology solutions, and expert staffing services</strong>.
                        We partner with organizations to <strong>modernize operations, enhance security, and drive digital transformation</strong> with innovative solutions tailored to their unique needs.
                    </p>
                    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                        Our team of <strong>seasoned IT professionals, strategists, and developers</strong> brings deep industry expertise to every project.
                        We believe in a <strong>business-first approach</strong>, ensuring that technology is seamlessly integrated to <strong>boost efficiency, accelerate growth, and deliver measurable impact</strong>.
                    </p>

                    <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Why Choose Chimon Solutions?</h4>
                    <ul style={{ listStyleType: "none", padding: "0" }}>
                        <li>🔹 <strong>Client-Centric Approach</strong> – We prioritize your goals and deliver tailored solutions that create real value.</li>
                        <li>🔹 <strong>Expert IT Consulting</strong> – Our expertise spans <strong>cloud solutions, AI, enterprise software, and cybersecurity</strong>.</li>
                        <li>🔹 <strong>Seamless Digital Transformation</strong> – From <strong>strategy to execution</strong>, we guide businesses in adopting future-ready technologies.</li>
                        <li>🔹 <strong>Trusted Industry Partnerships</strong> – We collaborate with top <strong>technology providers, enterprises, and startups</strong> to bring innovative solutions.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
